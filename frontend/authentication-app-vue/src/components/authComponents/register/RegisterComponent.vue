<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form 
        class="text-center border border-primary p-5"
        v-on:submit="registerSubmitUserForm()"
        >
        <!-- Inicio do bloco: Nome -->
        <input 
        type="text"
        id="name"
        name="name"
        class="form-control mb-5"
        placeholder="Inclua seu nome completo"
        v-model="state.name"
        required
        />
        <!-- Fim do bloco: Nome -->  
        <!-- Inicio do bloco: Email -->
        <input 
        type="email"
        id="email"
        name="email"
        class="form-control mb-5"
        placeholder="Coloque seu E-mail"
        v-model="state.email"

        required
         />
         <span v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
        
        <!-- Fim do bloco: Email -->    
        <!-- Inicio do bloco: Password -->
        <input 
        type="password"
        id="password"
        name="password"
        class="form-control mb-5"
        placeholder="Inclua sua senha"
        v-model="state.password.password"
        />
        <span v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </span>
        <!-- Fim do bloco: Password -->  
        <!-- Inicio do bloco: Confirm Password -->
        <input 
        type="password"
        id="password"
        name="password"
        class="form-control mb-5"
        placeholder="Confirme sua senha"
        v-model="state.password.confirm"
        required
        />
        <span v-if="v$.password.confirm.$error">
          <p>{{ v$.password.confirm.$errors[0].$message }}</p>
        </span>
        <!-- Fim do bloco: Password -->
        <p class="center">Já tem um conta cadastrada? <router-link to="/login">Faça login</router-link></p>
        <!-- Inicio do bloco: Botao-->
        <Center>
          <button @click="registerLoginUser()" 
          class="btn btn-primary w-75 my-4"
          id="btn"
          >
            Cadastrar
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
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { reactive, computed} from 'vue'

export default {
  name: 'RegisterComponent',
setup(){ 
  const state = reactive({
    name: '',
    email: '',
    password:{  
      password: '',
      confirm: '',
    },
  });

const rules = computed(()=>{ // Validations 
  return{
    name: { required },
    email: { required, email },
    password:{  
      password: { required, minLength: minLength(6) },
      confirm: { required, sameAs: sameAs(state.password.password) },
      }
    }
  })
  const v$ = useValidate(rules, state)
  return{
    state,
    v$
  }
},   
  methods: {
    registerLoginUser(){
      this.v$.$validate()
      if(!this.v$.$error){
        alert("Seja bem-vindo(a)!")
      } else {
        alert("Tem algo errado")
      }
    },
    registerSubmitUserForm(){}
  } 
}
</script>

<style scoped>
  form{
  margin-top: 70px;
  height: auto;
  padding-top: 100px !important;
}
</style>
