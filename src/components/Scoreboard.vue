<script>
export default {
  name: "Scoreboard",
}
</script>

<template>
  <div class="container mt-5">
    <table class="table table-striped table-sm fw-light shadow-lg">
      <tbody>
      <tr v-for="index in 2" :key="index">
        <td>Player {{ index }}</td>
        <td>{{ 1 }}</td>
        <td>{{ 3 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>