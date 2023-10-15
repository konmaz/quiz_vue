<template>
  <div class="container">
    <div class="card mx-auto shadow-lg mt-3" style="width: 20em">
      <div class="card-header">
        Quiz.io
      </div>
      <div class="card-body text-center">
        <input type="text" placeholder="Please fill your Name" v-model="userName" class="form-control" autofocus>

        <button class="btn btn-primary mt-5" @click="createGame">Create a New Game</button>

        <h3 class="m-2">or</h3>
        <div class="row">
          <div class="col">
            <input type="number" placeholder="Game Code" v-model="gameCode" class="form-control">
          </div>
          <div class="col">
            <button class="btn btn-primary" @click="joinGame">Join a Game</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Client } from 'colyseus.js';
import { useStore } from 'vuex'; // Import the store

export default {
  name: 'Home',
  setup() {
    const userName = ref('');
    const gameCode = ref('');
    const router = useRouter();
    let client;
    let room;

    const store = useStore(); // Use the Vuex store


    const createGame = async () => {
      // Initialize a Colyseus client and establish a connection to your server.
      client = new Client('http://localhost:2567');
      room = await client.create('my_room', { username: userName.value });

      console.log(room);

      await store.dispatch('updateRoom', room);
      // Handle successful connection and room creation.
      await router.replace('/pre_game');
    };

    const joinGame = async () => {
      client = new Client('http://localhost:2567');
      room = await client.joinById(gameCode.value, { username: userName.value });

      await store.dispatch('updateRoom', room);
      // Handle successful room joining.
      await router.replace('/pre_game');
    };

    return {
      userName,
      gameCode,
      createGame,
      joinGame,
    };
  },
};
</script>


<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
