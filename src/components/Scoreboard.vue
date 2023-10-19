

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
        <table class="table ">
          <tbody>
          <tr v-for="[key, value] of foo"
              :key="key"
              :class="{'fw-bolder table-primary' : key === playerID}"
          >
<!--            <td>{{ (index +1)+nth(index + 1) }}</td>-->
            <td>
              <font-awesome-icon
                  :icon="['fas', 'user']"
                  class="text-primary"
              />
              {{ value.username }}
            </td>
            <td>
              <span v-for="heartIndex in value.lives">
            <font-awesome-icon :key="heartIndex" :icon="['fas', 'heart']" class="text-danger fw-bolder"/>
          </span>
            </td>
            <td>
              {{value.score}}
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
<script>
let foo;
export default {
  name: "Scoreboard",
  props:{
    foo: Array,
    playerID: String,
  },
  data() {
    return {
    }
  },
  methods:{
    nth(n) {
      return ["st", "nd", "rd"][((n + 90) % 100 - 10) % 10 - 1] || "th"
    }
  }
}


</script>