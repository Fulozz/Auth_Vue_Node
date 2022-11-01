<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form class="text-center border border-primary p-5"
                        v-on:submit.prevent="loginSubmitUserForm()">
                    <!--INICIO DO BLOCO: E-mail -->
                    <div class="form-group">
                        <label for="email">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="form-control mb-5"
                                placeholder="Digite seu email"
                                v-model="loginForm.email"
                                />
                        </label>
                    </div>
                    <!--FIM DO BLOCO: E-mail -->
                    <!--INICIO DO BLOCO: PASSWORD  -->
                    <div  class="form-group">
                        <label for="password">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                class="form-control mb-5"
                                placeholder="Digite sua senha"
                                v-model="loginForm.password"
                                />
                            </label>
                        </div>
                    <!--FIM DO BLOCO: PASSWORD-->
                    <p class="center">
                                Não tem uma conta cadastrada?
                        <router-link to="/register"> Cadastre Aqui!</router-link>
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
