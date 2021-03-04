<template>
  <div class="home">
      <h1>症例一覧</h1>
    <div class="rightColumn">
        <p><button class="newPatient" v-on:click="openModal">新規登録</button></p>
        <RegisteredList class="registeredList" />
    </div>
    <Modal @close="closeModal" v-if="modal">
        <p>本当に新規症例を登録しますか？</p>
        <template slot="footer">
            <button v-on:click="requestNewPatient">OK</button><button v-on:click="closeModal">キャンセル</button>
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
        },
        closeModal: function() {
            this.modal = false;
        },
        requestNewPatient: function() {
            this.axios.get( this.$store.getters.apiRoot + '/baseline/new', {
                headers: {
                    "Authorization": "Bearer hanamogera"
                },
                data: {}
            }).then(( response ) => {
                this.$store.commit( 'UPDATE_PATIENT_ID', response.data );
                this.$store.dispatch( 'updatePatientIdAction' );
                this.$router.push( 'register', true, false );
            });
        }
    }
}
</script>
<style scoped>
button.newPatient {
    font-size: 1.5rem;
    padding: 2px 30px;
}
div.rightColumn {
    width: 100%;
    margin: 0 auto;
}
table.registeredList {
    margin: 0 auto;
}

</style>
