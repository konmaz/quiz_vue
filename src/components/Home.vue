<template>


  <div class="container">
    <div class="card mx-auto shadow-lg mt-3" style="width: 20em">
      <div class="card-header">Quiz</div>
      <div class="card-body text-center">
        <input type="text" placeholder="Please fill your Name first" v-model="userName" class="form-control"
               autofocus>

        <button class="btn btn-primary mt-5"
                :disabled="nameIsEmpty"
                @click="createGame">Create a New Room
        </button>

        <h3 class="m-2">or</h3>
        <div class="row">
          <div class="col">
            <input type="tel"
                   maxlength="3"
                   :disabled="nameIsEmpty"
                   placeholder="Room Code"
                   v-model="gameCode"
                   @input="limitGameCodeInput"
                   class="form-control rounded-pill text-center fw-semibold"
            >
          </div>
          <div class="col">
            <button class="btn btn-primary" :disabled="nameIsEmpty || roomCodeIsEmpty" @click="joinGame"><span
                class="text-warning">Join</span> a Room
            </button>
          </div>
        </div>
        <div class="alert alert-danger mt-3" role="alert" v-if="errorJoin">
          <font-awesome-icon :icon="['fas', 'triangle-exclamation']"/>
          Invalid room code: {{ gameCode }}<br>Please enter a 3-digit code.
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {Client} from 'colyseus.js';
import {useStore} from 'vuex'; // Import the store

import {useLoading} from 'vue-loading-overlay'

export default {
  name: 'Home',
  computed: {
    nameIsEmpty() {
      return this.userName === '' || this.userName === null;
    },
    roomCodeIsEmpty() {
      return this.gameCode === '' || this.gameCode === null;
    }
  },
  setup() {
    console.log("setup hello!")
    const userName = ref('');
    const gameCode = ref('');
    const errorJoin = ref(false);

    const router = useRouter();
    let client;
    let room;

    const $loading = useLoading({
      // options
    });


    const store = useStore();

    const createGame = async () => {
      const loader = $loading.show({loader: 'dots'});
      client = new Client(import.meta.env.VITE_SERVER_ADDRESS);
      room = await client.create('my_room', {username: userName.value});
      localStorage.setItem('reconnectionToken', room.reconnectionToken);
      console.log(room);

      await store.dispatch('updateRoom', room);
      await router.replace('/pre_game');
      loader.hide();
    };


    const joinGame = async () => {
      errorJoin.value = false; // Use errorJoin as a ref directly
      const loader = $loading.show({loader: 'dots'});
      client = new Client(import.meta.env.VITE_SERVER_ADDRESS);
      try {
        room = await client.joinById(gameCode.value, {username: userName.value});
        await store.dispatch('updateRoom', room);
        localStorage.setItem('reconnectionToken', room.reconnectionToken);
        await router.replace('/pre_game');
        loader.hide();
      } catch (e) {
        errorJoin.value = true; // Use errorJoin as a ref directly
        loader.hide();
      }
    };


    const hideErrorBanner = () => {
      errorJoin.value = false;
    };

    return {
      userName,
      gameCode,
      createGame,
      joinGame,
      errorJoin,
      limitGameCodeInput: hideErrorBanner
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
