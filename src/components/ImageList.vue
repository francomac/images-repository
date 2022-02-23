<template>
  <div>
    <img v-for="image in allImages" :key="image" :src="image.link" alt="" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",

  computed: mapGetters("images", ["allImages"]),
  methods: mapActions("images", ["fetchImages"]),
  created() {
    this.fetchImages();
  },
};
</script>

<style></style>
