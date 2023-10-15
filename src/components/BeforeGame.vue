<template>
<!--  <div>-->
<!--    <h1>Hello</h1>-->
<!--    <button @click.prevent="goToQuestion">Click to Go</button>-->
<!--  </div>-->
  <div class="container ">

    <div class="card mx-auto shadow-lg mt-3" style="width: 20em" >
      <div class="card-header">
        Quiz.io Loby:
      </div>
      <div class="card-body">
<!--        <div class="alert alert-danger" role="alert">-->
<!--          Can't join! -->
<!--        </div>-->

        <h3 class="text-md-center">Room code <h3 class="display-5 text-danger">{{room.roomId}}</h3></h3>

        <div class="d-grid gap-1">
          <button class="btn btn-success mt-4 shadow-lg" @click="createGame">Start Game</button>
          <button class="btn btn-danger mt-4" @click="createGame">Exit </button>
        </div>

        <h3 class="mt-4">Players in the room</h3>

        <table class="table">
          <tbody>
          <tr v-for="(username, index) in playerUsernames" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ username }}</td>
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
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'BeforeGame',
  setup() {
    const store = useStore();
    const room = store.state.room;

    const playerUsernames = ref([]);

    room.state.listen('trivia_category', (currentValue, previousValue) => {
      console.log(`trivia_category is now ${currentValue}`);
      console.log(`trivia_category value was: ${previousValue}`);
    });

    room.state.players.onChange((value, key) => {
      console.log(key, 'changed to', value);

      // Update playerUsernames when the players change
      playerUsernames.value = Array.from(room.state.players.values()).map((player) => player.username);
    });

    return {
      room,
      playerUsernames,
    };
  },
};
</script>

<!--<style scoped>-->
<!--body{-->
<!--  background-color: dimgray !important;-->
<!--}-->
<!--</style>-->
