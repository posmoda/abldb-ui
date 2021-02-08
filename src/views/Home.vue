<template>
  <div class="home">
    <div class="leftColumn">
        <p>Export</p>
    </div>
    <div class="rightColumn">
        <p><button v-on:click="toRegister">新規登録</button></p>
        <RegisteredList class="registeredList" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisteredList from '@/components/RegisteredList.vue'

export default {
  name: 'Home',
  components: {
    RegisteredList
  },
    methods: {
        toRegister: function () {
            this.$router.push(
                {
                    name: 'Register'
                }
            )
        }
    }
}
</script>
<style scoped>
div.leftColumn {
    float: left;
    width: 20%;
}
div.rightColumn {
    width: 80%;
}
table.registeredList {
    margin: 0 auto;
}

</style>
