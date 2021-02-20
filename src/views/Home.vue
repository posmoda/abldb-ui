<template>
  <div class="home">
    <div class="leftColumn">
        <p>Export</p>
    </div>
    <div class="rightColumn">
        <p><button v-on:click="openModal">新規登録</button></p>
        <RegisteredList class="registeredList" />
    </div>
    <Modal @close="closeModal" v-if="modal">
        <p>本当に新規症例を登録しますか？</p>
        <template slot="footer">
            <button>TEST</button>
        </template>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisteredList from '@/components/RegisteredList.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'Home',
  components: {
    RegisteredList,
    Modal
  },
    data: function() {
        return {
            modal: false
        }
    },
    methods: {
        toRegister: function () {
            this.$router.push(
                {
                    name: 'Register'
                }
            )
        },
        openModal: function() {
            this.modal = true;
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
