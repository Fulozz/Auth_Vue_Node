<template>
  <section id="app">
    <nav>
      <router-link to="/">Home </router-link>|
      <router-link to="/login">Login </router-link>|
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view />
  </section>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
