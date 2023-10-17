<script>
export default {
  name: "Scoreboard",
}
</script>

<template>
  <div class="container mt-5 ">
    <table class="table text-md-center shadow-lg">
      <tbody>
      <tr v-for="index in 5" :key="index">
        <td class="w-25">{{index}}</td>
        <td class="w-50">Player {{ index }}</td>
        <td class="w-50">
          <span v-for="heartIndex in index">
            <font-awesome-icon :key="heartIndex" :icon="['fas', 'heart']" class="text-danger"/>
          </span>
        </td>
        <td class="w-50">1</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>