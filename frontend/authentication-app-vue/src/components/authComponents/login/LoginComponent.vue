<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form 
          class="text-center border border-primary p-5"
          v-on:submit.prevent="loginSubmitUserForm()"
          >
        <!-- Inicio do bloco: Email -->
        <input 
        type="email"
        id="email"
        name="email"
        class="form-control mb-5"
        placeholder="Digite seu E-mail"
        v-model="loginForm.email"
        />
        <!-- Fim do bloco: Email -->     
        <!-- Inicio do bloco: Password -->
        <input 
        type="password"
        id="password"
        name="password"
        class="form-control mb-5"
        placeholder="Digite sua senha"
        v-model="loginForm.password"
        />
        <!-- Fim do bloco: Password -->  
        
        <p class="center">Não tem uma conta cadastrada? <router-link to="/register">Cadastre Aqui!</router-link></p>
   
        <!-- Inicio do bloco: Botao-->
        <Center>
          <button @click="submitLoginUser" 
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


export default {


  name: 'LoginComponent',
  data() {
    return {
      loginForm:{
        email: null,
        password: null
      }
    };    
  },
  methods:{
    loginSubmitUserForm(){},
    
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
</style>
