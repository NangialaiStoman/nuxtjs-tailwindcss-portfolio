<script setup>
import { useMainStore } from "~/store/index";
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";

const mainStore = useMainStore();

const copyrightDate = computed(() => mainStore.copyrightDate);
const socialProfiles = computed(() => mainStore.socialProfiles);

onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
  <div class="container mx-auto">
    <div
      class="pt-20 pb-8 mt-20 border-t-2 sm:pt-30 border-primary-light dark:border-secondary-dark"
    >
      <!-- Footer social links -->
      <div class="flex flex-col items-center justify-center mb-12 sm:mb-20">
        <p
          class="mb-5 text-3xl font-general-semibold sm:text-4xl text-primary-dark dark:text-primary-light"
        >
          Follow me
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socialProfiles"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100"
          >
            <i :data-feather="social.icon" class="w-6 h-6 sm:w-8 sm:h-8"></i>
          </a>
        </ul>
      </div>

      <!-- Footer copyright -->
      <FooterCopyright />
    </div>
  </div>
</template>

<style scoped></style>
