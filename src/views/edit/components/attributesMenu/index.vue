<template>
  <div class="attributes-menu">
    <div v-for="(item, index) in configList" :key="item.name + index" class="config-cell">
      <div class="config-item">
        <p>{{ item.name }}</p>
        <mtd-select :value="item.value" style="width: 200px" @change="updateConfigList($event, index)">
          <mtd-option
            v-for="(config, configIndex) in item.enum"
            :key="item.name + configIndex"
            :value="config"
          />
        </mtd-select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { templateToDom } from '@components/template';
import { _clonedeep } from '@utils/utils';

export default {
  name: 'AttributesMenu',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['currentComponent']),
    configList() {
      return this.currentComponent.config;
    }
  },
  methods: {
    updateConfigList(val, index) {
      let currentComponent = _clonedeep(this.currentComponent);
      currentComponent.config[index].value = val;
      currentComponent = templateToDom(currentComponent);
      this.$store.dispatch('updateCurrentComponent', currentComponent);
    }
  }
};
</script>

<style lang="scss">
.attributes-menu {
  padding: 20px 30px;
  .config-item {
    margin-block: 30px;
    text-align: left;
    > p{
      margin-bottom: 10px;
    }
  }
}
</style>
