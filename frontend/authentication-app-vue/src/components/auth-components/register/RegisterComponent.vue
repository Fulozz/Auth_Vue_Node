<template>
    <div class="container">
      <div class="row">
          <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
            <form
            class="text-center"
            v-on:submit.prevent="registerSubmitUserForm()">
            <h1 class="p-5">Register</h1>
            <!--INICIO DO BLOCO: NAME  -->
            <label for="name" class="form-control">
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                v-model="registerForm.name"
                placeholder="Informe o seu nome completo"
                />
            </label>
            <!--FIM DO BLOCO: NAME  -->
            <!--INICIO DO BLOCO: E-MAIL  -->
            <label for="email" class="form-control">
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                v-model="registerForm.email"
                placeholder="Coloque seu melhor e-mail"
                />
            </label>
            <!--FIM DO BLOCO: E-MAIL-->
            <!--INICIO DO BLOCO: PASSWORD-->
            <label for="password" class="form-control">
              <input
                type="password"
                name="password"
                id="password"
                class="form-control mb5"
                v-model="registerForm.password"
                placeholder="Coloque sua senha!">
            </label>
            <!--FIM DO BLOCO: PASSWORD  -->
            <!--INICIO DO BLOCO: BOTAO SUMIT-->
            <Center>
                <button @click="submitRegisterUser()" class="btn btn-primary w-75 my-4">
                      Entrar
                </button>
            </Center>
            <!--FIM DO BLOCO: BOTAO SUMIT-->
              <p class="center">
                  Já tem uma conta cadastrada?
                  <router-link to="/login"> Login aqui!</router-link>
              </p>
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
      registerForm: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    registerSubmitUserForm() { },
    async submitRegisterUser() {
      return { };
    },
  },
};
</script>

<style scoped>
    form{
        margin-top: 70px;
        height: auto;
        padding-top: 100px !important;
    }
</style>
