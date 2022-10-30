<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form 
          class="text-center border border-primary p-5"
          v-on:submit.prevent="loginSubmitUserForm()"
          >
        <!-- Inicio do bloco: Email -->
        <div class="form-group">
        <input 
        type="email"
        id="email"
        name="email"
        class="form-control mb-5"
        placeholder="Digite seu E-mail"
        v-model="state.email"
        :class="{ 'is-invalid': isSubmitted && v$.state.email.$error}"
        />
          <div v-if="isSubmitted && !v.state.email.required"
        class="invalid-feedback"
          >
          O campo e-mail é obrigatório!
          </div>
        </div>
        <!-- Fim do bloco: Email -->     
        <!-- Inicio do bloco: Password -->
        <div class="form-group">
        <input  type="password" id="password" name="password" class="form-control mb-5" placeholder="Digite sua senha" v-model="state.password"
        :class="{ 'is-invalid':isSubmitted &&  v$.state.password.$errors}"
        />
        <div v-if="isSubmitted && !v.state.password.required"
        class="invalid-feedback"
          >
          O campo senha é obrigatório!
          </div>
        </div>
        <!-- Fim do bloco: Password -->  
        
        <p class="center">Não tem uma conta cadastrada? <router-link to="/register">Cadastre Aqui!</router-link></p>
   
        <!-- Inicio do bloco: Botao-->
        <Center>
          <button @click="loginSubmitUserForm()" 
          class="btn btn-primary w-75 my-4">
            Entrar
          </button>
        </Center>
        <!-- Fim do bloco: Botao -->  
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import  useValidate  from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed} from 'vue'

export default {
  name: 'LoginComponent',
  setup(){ 
  const state = reactive({
    email: '',
    password: '',
    isSubmitted: false
  });

const rules = computed(()=>{ // Validations 
  return{
    email: { required, email },
    password: { required, minLength: minLength(6)  },
    }
  })
  const v$ = useValidate(rules, state)
  return{
    state,
    v$
  }
},   
  methods:{
    loginSubmitUserForm(){
        this.isSubmitted = true;
        this.v$.$touch();
        if(this.v$.$invalid){
          return;
        }
        alert("SUCESS!" + JSON.stringify(this.state))
    },
    
    async submitLoginUser(){

    },
  }
};''


</script>

<style scoped>
form{
  margin-top: 70px;
  height: auto;
  padding-top: 100px !important;
}
.is-invalid{
  background-color: red;
}
</style>
