<script setup>
import feather from "feather-icons";
import AppHeader from "../components/shared/AppHeader.vue";
import AppFooter from "../components/shared/AppFooter.vue";
import BackToTop from "../components/BackToTop.vue";

onMounted(() => {
  feather.replace();
});
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-secondary-light dark:bg-primary-dark"
  >
    <!-- App header -->
    <AppHeader />

    <!-- Render contents with transition -->
    <!-- TODO: transition component will be removed -->
    <!-- <transition name="fade" mode="out-in"> -->
    <main>
      <slot />
    </main>
    <!-- </transition> -->

    <!-- App footer -->
    <AppFooter />

    <!-- Go back to top when scrolled down -->
    <div
      class="fixed bottom-0 right-0 z-50 flex items-center mb-6 mr-8 space-x-2 sm:space-x-4"
    >
      <BackToTop />
    </div>
  </div>
</template>

<style>

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
