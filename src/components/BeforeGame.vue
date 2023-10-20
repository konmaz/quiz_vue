<template>
  <!--  <div>-->
  <!--    <h1>Hello</h1>-->
  <!--    <button @click.prevent="goToQuestion">Click to Go</button>-->
  <!--  </div>-->
  <div class="container">

    <div class="card mx-auto shadow-lg mt-3" style="width: 20em">
      <div class="card-header">
        Quiz.io Lobby
      </div>
      <div class="card-body">
        <!--        <div class="alert alert-danger" role="alert">-->
        <!--          Can't join! -->
        <!--        </div>-->
        <div class="text-center">
          <h3>
            <font-awesome-icon :icon="['fas', 'key']"/>
            Room code
          </h3>
          <span class="badge rounded-pill text-bg-warning fs-2">{{ roomId }}</span>
        </div>
        <div class="d-grid gap-1">
          <button class="btn btn-success mt-4 shadow-lg" @click="startGame">Start Game</button>
          <button class="btn btn-danger mt-4" @click="exitGame">Exit</button>
        </div>

        <div class="text-center">
          <h3 class="mt-4 fw-light">
            <font-awesome-icon :icon="['fas', 'users']" class="text-secondary"/>
            Players
          </h3>
        </div>
        <table class="table mt-3">
          <tbody>
          <tr v-for="(username, index) in playerUsernames" :key="index">
            <td class="fw-light">
              <font-awesome-icon :icon="['fas', 'user']" class="text-primary"/>
              {{ index + 1 }}
            </td>
            <td class="fw-semibold">{{ username }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


    <!--    <input type="text" placeholder="Your name" v-model="userName">-->

    <!--    <div class="join-game">-->
    <!--      <input type="text" placeholder="Enter Room Code" v-model="roomCode">-->
    <!--      <button @click="joinGame">Join Game</button>-->
    <!--    </div>-->
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from "vue-router";
import {Client} from "colyseus.js";

export default {
  name: 'BeforeGame',
  setup() {

    const roomId = ref(0);
    const playerUsernames = ref([]);

    const store = useStore();
    const router = useRouter();
    let room = store.state.room;


    const fetchRoom = async () => {
      console.log("Room state is:")
      console.log(room);
      if (room == null) {
        try {
          let client = new Client(import.meta.env.VITE_SERVER_ADDRESS);
          room = await client.reconnect(localStorage.getItem('reconnectionToken'));
          localStorage.setItem('reconnectionToken', room.reconnectionToken);
          console.log("joined successfully", room);
          await store.dispatch('updateRoom', room);

        } catch (e) {
          console.error("join error", e);
          await router.replace('/'); // return to home page and don't continue executing the code after
          return {
            roomId,
            playerUsernames: [],
            exitGame: () => {
            }
          }
        }
      }

      roomId.value = room.roomId;

      // room.state.listen("trivia_category", (currentValue, previousValue) => {
      //   console.log(`trivia_category is now ${currentValue}`);
      //   console.log(`trivia_category value was: ${previousValue}`);
      // });

      room.onMessage("players_get_ready", (message) => {
        router.replace("/game")
      });

      room.state.players.onChange((value, key) => {
        // Update playerUsernames when the players change
        playerUsernames.value = Array.from(room.state.players.values()).map((player) => player.username);
      });

    }

    onMounted( async () => {
      await fetchRoom();
    })

    const startGame = () =>{
      room.send('start_game')
    }

    const exitGame = () => {
      room.removeAllListeners();
      room.leave();
      router.replace('/');
    }

    return {
      roomId,
      playerUsernames,
      exitGame,
      startGame
    };
  },
};
</script>

<!--<style scoped>-->
<!--body{-->
<!--  background-color: dimgray !important;-->
<!--}-->
<!--</style>-->
