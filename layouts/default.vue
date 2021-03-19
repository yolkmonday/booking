<template>
  <div>
    <div v-if="$device.isMobile" class="flex h-screen items-center">
      <div class="w-full text-center">
        <span class="">
          Hanya tersedia versi desktop.
        </span>
      </div>
    </div>
    <div v-if="!$device.isMobile">
        <Nuxt />
    </div>
  
  </div>
</template>

<style>
.container {
  max-width: 1200px;
}
</style>