<template>
  <div id="app" @dragOver="dragOver">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      components: [],
      activeUI: 'atom',
    };
  },
  mounted() {
    document.body.ondragover = (e) => {
      e.preventDefault();
    };
    document.body.ondrop = (e) => {
      // this.removePlaceholder()
      e.preventDefault();
    };
  },
  methods: {
    dragOver(e) {
      e.preventDefault();
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
