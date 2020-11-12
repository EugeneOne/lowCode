<template>
  <div class="preview-layout" @dragOver="dragOver">
    <div id="nav">
      <!-- <div draggable="true" @dragstart="dragstart" data-name="TST">TST</div>
      <div @dragstart="dragstart" draggable="true" data-name="button">
        <mtdm-button type="primary">基础按钮</mtdm-button>
      </div>
      <div @dragstart="dragstart" draggable="true" data-name="tag">
        <mtdm-tag size="middle" theme="primary">标签</mtdm-tag>
      </div> -->
    </div>
    <div class="content" @drop="drop">
      <div v-for="(item, index) in components" :key="index" :id="item.id"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { templateToDom } from '@components/template';
import mount from '@components/mount';
import guid from '@utils/guid';

export default {
  name: 'PreviewLayout',
  data() {
    return {
      componentsList: [],
      activeUI: 'atom',
    };
  },
  computed: {
    ...mapGetters(['components', 'currentComponent']),
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
    dragstart(e) {
      let componentName = e.target.getAttribute('data-name');
      let info = {
        name: componentName,
        type: this.activeUI,
        ui: 'mtd',
      };
      e.dataTransfer.setData('info', JSON.stringify(info));
      console.log(e.dataTransfer.getData('info'));
    },
    drop(e) {
      const info = JSON.parse(e.dataTransfer.getData('info')) || {};
      info.id = guid();
      let component = Object.assign(templateToDom(info), { id: info.id });
      this.$store.dispatch('addComponents', component);
      // this.componentsList.push(component);
      mount(component.id, component);
    },
    draw() {
      // //挂载及更新视图中组件的位置信息
      // let components = JSON.parse(JSON.stringify(this.$store.state.components));
      // components
      //   .filter((component) => !component.parentId)
      //   .forEach((component) => {
      //     mount(component.info.id, component).then((vm) => {
      //       let el = document.getElementById(component.info.id);
      //       component.position = {
      //         offsetLeft: el.offsetLeft,
      //         offsetRight: el.offsetLeft + el.clientWidth,
      //         offsetTop: el.offsetTop,
      //         offsetBottom: el.offsetTop + el.clientHeight,
      //       };
      //       //每次重新挂载后dom变动，更新scoped style
      //       this.addUserStyle();
      //     });
      //   });
      // setTimeout(() => {
      //   this.components = components;
      // }, 0);
      document.querySelector('');
    },
  },
};
</script>
<style lang="scss">
.preview-layout {
  #nav > div {
    padding: 30px;
    margin-bottom: 20px;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: center;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .content {
    height: 300px;
    width: 100%;
    border: 2px solid #000;
  }
}
</style>
