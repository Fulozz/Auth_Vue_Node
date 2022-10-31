<template>
    <div class="Register">
        <RegisterComponent />
    </div>
</template>

<script>
import RegisterComponent from '@/components/authComponents/register/RegisterComponent.vue';

export default {
  name: 'RegisterView',
  components: {
    RegisterComponent,
  },
};
</script>
