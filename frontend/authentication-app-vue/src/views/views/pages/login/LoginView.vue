<template>
    <div class="Login">
        <LoginComponent />
    </div>
</template>

<script>
import LoginComponent from '@/components/authComponents/login/LoginComponent.vue';

export default {
  name: 'LoginView',
  components: {
    LoginComponent,
  },
};
</script>
