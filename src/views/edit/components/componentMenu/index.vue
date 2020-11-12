<template>
  <div class="component-menu">
    <ul class="ui-type">
      <li :class="{ active: currentUiType === 'mtd' }" @click="checkType('mtd')">
        <!-- <img src="http://awp-assets.sankuai.com/ss/mtd-vue-mobile/doc/img/logo@3x.cdcca49.png" /> -->
        MTD
      </li>
      <li @click="checkType('')">*</li>
      <li @click="checkType('')">*</li>
    </ul>
    <ul class="components-list">
      <li
        @dragstart="dragstart($event, item)"
        draggable="true"
        v-for="(item, index) in componentsConfig[currentUiType]"
        :key="index"
      >
        {{ item.type }}
        <!-- <component :is="currentView"></component> -->
      </li>
      <!-- <li>{{ template }}</li> -->
    </ul>
  </div>
</template>

<script>
import componentsConfig from '@config/components/index';

export default {
  name: 'ComponentMenu',
  data() {
    return {
      template: '<mtd-button type="primary">基础按钮</mtd-button>',
      componentsConfig,
      currentUiType: 'mtd',
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
  methods: {
    checkType(type) {
      this.currentUiType = type;
    },
    dragstart(e, item) {
      let componentName = e.target.getAttribute('data-name');
      let info = item;
      info.ui = this.currentUiType;
      e.dataTransfer.setData('info', JSON.stringify(info));
    },
  },
};
</script>

<style lang="scss">
.component-menu {
  padding: 20px 16px;
  height: 100%;
  @include flexDom(flex-start, space-between);
  .ui-type {
    flex-direction: column;
    @include flexDom(center, flex-start);
    > li {
      height: 50px;
      width: 50px;
      @include flexCenter;
      cursor: pointer;
      &.active {
        background: $primary-color;
        color: #fff;
      }
      > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }
  .components-list {
    flex: 1;
    > li {
      padding: 5px 10px;
    }
  }
}
</style>
