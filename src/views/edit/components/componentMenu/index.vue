<template>
  <div class="component-menu">
    <ul class="ui-type">
      <li>MTD</li>
      <li>*</li>
      <li>*</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentMenu',
  data() {
    return {
      componentsList: [
        {
          icon: 'mtdicon mtdicon-time-o',
          title: '一级菜单',
          id: '3',
          route: '/components/sidebar/3',
        },
        {
          icon: 'mtdicon mtdicon-calendar-o',
          title: '一级菜单',
          id: '4',
          route: '/components/sidebar/4',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.component-menu {
  height: 100%;
  @include flexCenter;
  .ui-type {
    flex-direction: column;
    @include flexDom(center, flex-start);
  }
}
</style>
