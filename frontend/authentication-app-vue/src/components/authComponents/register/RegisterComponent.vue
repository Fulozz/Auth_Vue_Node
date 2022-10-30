<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form 
        class="text-center border border-primary p-5"
        v-on:submit.prevent="registerSubmitUserForm()"
        >
        <!-- Inicio do bloco: Nome -->
        <input 
        type="text"
        id="name"
        name="name"
        class="form-control mb-5"
        placeholder="Inclua seu nome completo"
        v-model="registerForm.name"
        />
        <!-- Fim do bloco: Nome -->  
        <!-- Inicio do bloco: Email -->
        <input 
        type="email"
        id="email"
        name="email"
        class="form-control mb-5"
        placeholder="Inclua seu nome completo"
        v-model="registerForm.email"
        />
        <!-- Fim do bloco: Email -->    
        <!-- Inicio do bloco: Password -->
        <input 
        type="password"
        id="password"
        name="password"
        class="form-control mb-5"
        placeholder="Inclua sua senha"
        v-model="registerForm.password"
        />
        <!-- Fim do bloco: Email -->  
        <p class="center">Já tem um conta cadastrada? <router-link to="/login">Faça login</router-link></p>
        <!-- Inicio do bloco: Botao-->
        <Center>
          <button @click="submitRegisterUser" 
          class="btn btn-primary w-75 my-4">
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
    export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm:{
        name: null,
        email: null,
      }
    };
  },
  methods: {
    registerSubmitUserForm(){

    },
    async submitRegisterUser(){

    },
  }
};
</script>

<style scoped>
  form{
  margin-top: 70px;
  height: auto;
  padding-top: 100px !important;
}
</style>
