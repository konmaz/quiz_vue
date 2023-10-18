<script>
export default {
  name: "Scoreboard",
  data(){
    return{
      playerUsernames : ["Maria", "Nikos", "George"]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="card mx-auto shadow-lg mt-3" style="max-width: 30em">
      <div class="card-header">
        <h3 class="mt-4 fw-light text-center">
          <font-awesome-icon :icon="['fas', 'users']" class="text-secondary"/>
          Players
        </h3>
      </div>
      <div class="card-body">
        <table class="table">
          <tbody>
          <tr v-for="(username, index) in playerUsernames" :key="index">
            <td class="fw-light">
              <font-awesome-icon :icon="['fas', 'user']" class="text-primary"/>
              {{ username }}
            </td>
            <td class="fw-semibold">
              <span v-for="heartIndex in 3">
            <font-awesome-icon :key="heartIndex" :icon="['fas', 'heart']" class="text-danger"/>
          </span>
            </td>
            <td class="fw-semibold">
              1500
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>



  </div>
</template>

<style scoped>

</style>