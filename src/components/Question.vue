<template >
  <div class="container">
    <div class="card mt-2">
      <div class="card-body shadow-lg">
        <div class="d-flex justify-content-between">
          <p class="text-start fw-light">Film</p>
          <div class="d-flex fs-5">
            <p>1500</p>

          </div>

          <div class="d-flex fs-4 ">
            ⌛<p class="text-end fw-light">16</p>
          </div>
        </div>
        <p class="card-text fs-4 prevent-select" v-html="question"></p>
      </div>
    </div>

    <div class="quiz-grid mt-4 gap-3">
      <button
          class="p-3 btn btn-outline-dark fs-3 shadow"
          v-for="(choice, index) in choices"
          :key="index"
          v-html="choice"
          @click.prevent="respond(choice)"
          :class="{
            'selected': selectedChoice === choice,
            'blink_me btn-primary':  selectedChoice === choice && !showResult,
           'disabled': responded,
           // 'blink_me' : selectedChoice === choice &&  showResult,
           'wrong_answer' :  showResult && selectedChoice === choice && choice !== correctChoice,
           'correct_answer blink_me_faster' : showResult && choice === correctChoice
          }"
      ></button>
    </div>


<!--    <Scoreboard></Scoreboard>-->




  </div>
</template>

<script>
import Scoreboard from "./Scoreboard.vue";

export default {
  components: { Scoreboard },

  data() {
    return {
      question: 'Which musical artist had a prominent role in the 2017 film &quot;Kingsman: The Golden Circle&quot;?',
      choices: {
        choice1: 'Elton John',
        choice2: 'Lady Gaga',
        choice3: 'Rihanna',
        choice4: 'Justin Bieber',
      },
      selectedChoice: null,
      correctChoice: 'Justin Bieber',
      showResult: false,
      isCorrect: false,
      responded: false, // Track if the user has already responded
      flashing: false
    };
  },
  setup(){

  },
  methods: {
    respond(choice) {
      if (!this.responded) {
        this.selectedChoice = choice;
        // this.isCorrect = this.selectedChoice === this.correctChoice;
        this.responded = true; // Mark that the user has responded

        setTimeout(() => this.showResult = true, 3000);
        // this.showResult = true;
        }
      },
    showQuestion(question, choices){
      this.question = question;
      this.choices = choices;
      this.correctChoice = "";

      this.selectedChoice = null;
      this.showResult = false;
      this.isCorrect = false;
      this.responded = false;
      this.flashing = false;
    },
    revealCorrectAnswer(correctChoice){
      this.correctChoice = correctChoice;
      this.isCorrect = this.selectedChoice === this.correctChoice;
      this.showResult = true;
    }
    }
}
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
  background-color: #007bff; /* Customize the background color as needed */
  color: white;
  font-weight: bold;
}
.blink_me {
  animation: blinker 1.2s infinite;
}

.blink_me_faster {
  animation: blinker 0.8s linear infinite;
}

.correct_answer{
  background-color: green; /* Customize the background color as needed */
  color: white;
  font-weight: bold;
}
.wrong_answer {
  background-color: red; /* Customize the background color as needed */
  font-weight: normal;
}
@keyframes blinker {
  50% {
    opacity: 50;
  }
}



</style>