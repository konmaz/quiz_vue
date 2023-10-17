<template>
  <div class="container">
    <div class="card mt-2">
      <div class="card-body shadow-lg">
        <div class="d-flex justify-content-between">
          <p class="text-start fw-light">{{ question_category }}</p>
          <div class="fs-4 text-end">
            <p class="fw-light">{{ timer }} <font-awesome-icon :icon="['fa', 'clock']"/></p>
          </div>
        </div>
        <p class="card-text fs-4 prevent-select" v-html="question"></p>
      </div>
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
          'disabled': responded,
          'wrong_answer': showResult && selectedChoice === choice && choice !== correctChoice,
          'correct_answer blink_me_faster': showResult && choice === correctChoice,
        }"
      ></button>
    </div>
    <Scoreboard></Scoreboard>
  </div>
</template>

<script>
import {ref, computed, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Scoreboard from "./Scoreboard.vue";

export default {
  components: {Scoreboard},
  setup() {
    const store = useStore();
    const router = useRouter();
    const room = store.state.room;

    const timer = ref(20);
    const question = ref('');
    const question_category = ref('');
    const choices = ref(['', '', '', '',]);

    const selectedChoice = ref(null);
    const correctChoice = ref('Justin Bieber');
    const showResult = ref(false);

    const isCorrect = computed(() => selectedChoice.value === correctChoice.value);

    const responded = ref(true);
    const flashing = ref(false);

    onMounted(() => {

      if (room == null) {
        router.replace('/'); // return to the home page and don't continue executing the code
        return {};
      }

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


      console.log(room);
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
      question_category
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
  background: white;
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
