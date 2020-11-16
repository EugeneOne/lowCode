<template>
  <div class="edit-layout">
    <mtd-container class="edit-container">
      <mtd-header>Header</mtd-header>
      <mtd-container>
        <mtd-aside width="150px">
          <component-menu />
        </mtd-aside>
        <mtd-main>
          <preview />
        </mtd-main>
        <mtd-aside width="150px">
          <attributes-menu />
        </mtd-aside>
      </mtd-container>
    </mtd-container>
  </div>
</template>

<script>
import Preview from './components/preview';
import AttributesMenu from './components/attributesMenu';
import ComponentMenu from './components/componentMenu';

export default {
  name: 'EditLayout',
  components: { Preview, AttributesMenu, ComponentMenu },
};
</script>

<style lang="scss">
.edit-layout {
  .edit-container {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
