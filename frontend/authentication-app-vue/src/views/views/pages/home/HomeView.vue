<template>
    <div class="home">
        <HomeComponent />
    </div>
</template>

<script>
import HomeComponent from '@/components/authComponents/home/HomeComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
  },
};
</script>
