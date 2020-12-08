<template>
  <div>
    <mtd-tabs v-model="activeNav">
      <mtd-tab-pane
        v-for="(item, index) in config"
        :key="index"
        :label="item.label"
        :value="item.value"
      ></mtd-tab-pane>
    </mtd-tabs>
  </div>
</template>

<script>
export default {
  name: "Navs",
  data() {
    return {
      config: [
        {
          label: "预览",
          value: 'view'
        },
        {
          label: "CODE",
          value: 'code'
        },
      ],
      activeNav: 'view'
    };
  },
  watch: {
      activeNav(val) {
          this.$store.dispatch('updateType', val)
      }
  }
};
</script>

<style>
</style>