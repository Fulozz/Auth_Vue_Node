<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form class="text-center"
                        v-on:submit.prevent="loginSubmitUserForm()">
                        <h1  class="p-5">Login</h1>
                    <!--INICIO DO BLOCO: E-mail -->
                        <label class="form-control" for="email">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="form-control"
                                placeholder="Digite seu email"
                                v-model="loginForm.email"
                                />
                        </label>
                    <!--FIM DO BLOCO: E-mail -->
                    <!--INICIO DO BLOCO: PASSWORD  -->
                        <label class="form-control" for="password" style="height: auto!important">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="form-control"
                                placeholder="Digite sua senha"
                                v-model="loginForm.password"
                                />
                            </label>
                    <!--FIM DO BLOCO: PASSWORD-->
                    <!--INICIO DO BLOCO: BOTAO SUMIT-->
                    <Center>
                        <button @click="submitLoginUser" class="btn btn-primary w-75 my-4">
                            Entrar
                        </button>
                    </Center>
                    <!--FIM DO BLOCO: BOTAO SUMIT-->
                    <p class="center">
                                Não tem uma conta cadastrada?
                        <router-link to="/register"> Cadastre aqui!</router-link>
                    </p>
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
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: true,
    };
  },
  methods: {
    loginSubmitUserForm() { },
    async submitLoginUser() {
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
