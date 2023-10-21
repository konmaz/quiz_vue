<template>
  <div class="container">
    <div v-if="!gameOver">
    <div class="card mt-2">
      <div class="card-body shadow-lg">
        <div class="d-flex justify-content-between align-items-center">
          <p class="text-start fw-light">{{ question_category }}</p>
          <div class="fs-4 text-end">
            <p class="fw-light">{{ timer }} <font-awesome-icon :icon="['fa', 'clock']"/></p>
          </div>
        </div>
        <p class="card-text fs-4 prevent-select text" v-html="question"></p>
      </div>
    </div>
    <div class="alert alert-danger mt-2 text-center" role="alert" v-if="isPlayerDead">
      You have run out of lives <font-awesome-icon :icon="['fa', 'heart']"/>, and can't respond to questions
    </div>

    <div class="quiz-grid mt-4 gap-3">
      <button
          class="p-3 btn btn-secondary fs-3 shadow"
          v-for="(choice, index) in choices"
          :key="index"
          v-html="choice"
          @click.prevent="respond(choice)"
          :class="{
          'selected': selectedChoice === choice,
          'blink_me btn-primary': selectedChoice === choice && !showResult,
          'disabled': responded || isPlayerDead,
          'wrong_answer': showResult && selectedChoice === choice && choice !== correctChoice,
          'correct_answer blink_me_faster': showResult && choice === correctChoice,
        }"
      ></button>
    </div>
    </div>

    <div v-if="gameOver">
      <div class="card mx-auto shadow-lg mt-3" style="width: 20em">
        <div class="card-header"></div>
        <div class="card-body">
          <div class="text-center">
            <h3>Game Over</h3>
          </div>
          <div class="d-grid">
            <button class="btn btn-success mt-4 shadow-lg" @click="handleGameOver">Play again</button>
          </div>
        </div>
      </div>
    </div>
    <Scoreboard :foo="playersList" :player-i-d="sessionId"></Scoreboard>
  </div>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Scoreboard from "./Scoreboard.vue";
import {Client} from "colyseus.js";



export default {
  components: {Scoreboard},
  setup() {
    const store = useStore();
    const router = useRouter();
    let room = store.state.room;

    const sessionId = ref('');

    const timer = ref(20);
    const question = ref('');
    const question_category = ref('');
    const choices = ref(['', '', '', '',]);

    const playersList = ref([]);

    const selectedChoice = ref(null);
    const correctChoice = ref('Justin Bieber');
    const showResult = ref(false);

    const isPlayerDead = ref(false);
    const gameOver = ref(false);

    const isCorrect = computed(() => selectedChoice.value === correctChoice.value);

    const responded = ref(true);
    const flashing = ref(false);

    const fetchRoom = async () => {
      console.log("Room state is:");
      console.log(room);
      if (room == null) {
        try {
          let client = new Client(import.meta.env.VITE_SERVER_ADDRESS);
          room = await client.reconnect(localStorage.getItem('reconnectionToken'));
          localStorage.setItem('reconnectionToken', room.reconnectionToken);
          await store.dispatch('updateRoom', room);
          console.log("joined successfully", room);
        } catch (e) {
          console.error("join error", e);
          await router.replace('/'); // return to the home page and don't continue executing the code after
        }
      }
    };



    const handleGameOver = () =>{
      room.removeAllListeners();
      room.leave();
      router.replace('/');
    }

    onMounted(async () => {

      await fetchRoom();
      if (room === null) {
        await router.replace('/'); // return to the home page and don't continue executing the code
        return {};
      }

      if (room.state.gameOver){
        gameOver.value = true;
      }
      sessionId.value = room.sessionId;

      room.state.listen('gameOver', (currentValue, previousValue) => {
        if (currentValue)
          gameOver.value = true;
      });

      room.onLeave(async (code) => { //TODO : examine the state when the client disconnect eg. WiFi loss
        alert("You have disconnected from the game");
        location.reload();

      });


      room.state.listen('timer', (currentValue, previousValue) => {
        timer.value = currentValue;
      });

      room.state.listen('questionCategory', (currentValue, previousValue) => {
        question_category.value = currentValue;
      });

      room.state.listen('correctAnswer', (currentValue, previousValue) => {
        correctChoice.value = currentValue;
        if (currentValue !== ""){
          showResult.value = true;
          flashing.value = true;
        }
        if (currentValue === "")
          resetQuestionState();
      });

      room.state.listen('question', (currentValue, previousValue) => {
        resetQuestionState();
        question.value = currentValue;
      });

      room.state.answers.onChange((value, key) => {
        // Update playerUsernames when the players change
        choices.value = Array.from(room.state.answers.values());
      });

      room.state.players.onChange((value, key) => {
        playersList.value = Array.from(room.state.players.values())
        if(!room.state.players.get(room.sessionId).lives && !room.state.gameOver)
          isPlayerDead.value = true;
        if(room.state.players.get(room.sessionId).player_answer !== "" && !showResult.value)  // Update the player UI if the player reconnects
          respond(room.state.players.get(room.sessionId).player_answer);
      })

      room.onMessage("updated_scores", (message) => {
        playersList.value = Array.from(room.state.players.values())
        if(room.state.players.get(room.sessionId).lives === 0 && !room.state.gameOver)
          isPlayerDead.value = true;
      });

    });

    const respond = (choice) => {
      if (!responded.value) {
        selectedChoice.value = choice;
        responded.value = true;
        room.send('answer_question', {answer:choice})
        // setTimeout(() => (showResult.value = true), 3000);
      }
    };

    const resetQuestionState = () => {
      showResult.value = false;
      responded.value = false;
      flashing.value = false;
      correctChoice.value = '';
      selectedChoice.value = null;
    };


    return {
      timer,
      question,
      choices,
      selectedChoice,
      correctChoice,
      showResult,
      isCorrect,
      responded,
      flashing,
      respond,
      question_category,
      playersList,
      sessionId,
      isPlayerDead,
      gameOver,
      handleGameOver
    };
  },
};
</script>

<style scoped>
/* Custom CSS to make buttons expand to full width */
.quiz-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  min-height: 15em;
  background-color: var(--bs-primary-bg-subtle);
}

/* Style for the selected choice */
.selected {
  background-color: var(--bs-warning); /* Customize the background color as needed */
  color: black;
  font-weight: bold;
}
.blink_me {
  animation: blinker 1.2s infinite;
}

.blink_me_faster {
  animation: blinker 0.8s linear infinite;
}

.correct_answer {
  background-color: green; /* Customize the background color as needed */
  color: white;
  font-weight: bold;
}
.wrong_answer {
  background-color: red; /* Customize the background color as needed */
  font-weight: normal;
  text-decoration: line-through ;
}
@keyframes blinker {
  50% {
    opacity: 50;
  }
}
</style>
