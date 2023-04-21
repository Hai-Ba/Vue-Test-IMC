<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AcapLogo from './components/icons/AcapLogo.vue';
</script>

<template>
  <!-- Header -->
  <header class="app_bg_color">
    <a class="logo" href="/">
      <AcapLogo />
    </a>
    <input type="checkbox" id="side_menu" class="side_menu">
    <label class="hamb" for="side_menu">
      <span class="hamb_line"></span>
    </label>
    <div class="navbar_wrapper">
      <RouterLink to="/">Feature</RouterLink>
      <RouterLink to="/faq">FAQ</RouterLink>
      <RouterLink to="/upload">Upload</RouterLink>
      <RouterLink to="/api">API</RouterLink>
      <RouterLink to="/price">Price</RouterLink>
      <RouterLink to="/pcaps">View Pcaps</RouterLink>
      <RouterLink to="/price">🔒 My Pcaps</RouterLink>
      <RouterLink to="/signin">Sign In</RouterLink>
    </div>
  </header>

  <div class="content">
    <router-view v-slot="{ Component, route }">
      <!-- Use any custom transition and  to `fade` -->
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer_wrapper">
      <RouterLink to="/">Contact</RouterLink>
      <RouterLink to="/faq">Privacy</RouterLink>
      <RouterLink to="/upload">Terms</RouterLink>
      <RouterLink to="/api">Refund Policy</RouterLink>
    </div>
    <div class="contact_us">
      <div>If you have some other questions, contact us.</div>
      <div class="social_icon">
        <div><a class="yt_icon"></a></div>
        <div><a class="gm_icon"></a></div>
        <div><a class="fb_icon"></a></div>
      </div>
    </div>
    <p style="color: #ccc;">©<a href="/">A-Packets</a> All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
@import url(./assets/styles/header.css);
@import url(./assets/styles/footer.css);
@import url(./assets/styles/content.css);
</style>
