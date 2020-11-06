<template>
  <div id="app" @dragOver="dragOver">
    <div id="nav">
      <div draggable="true" @dragstart="dragstart" data-name="TST">TST</div>
      <div>
        <mtd-button type="primary" draggable="true" @dragstart="dragstart" data-name="button"
          >基础按钮</mtd-button
        >
      </div>
    </div>
    <div class="content" @drop="drop">
      <!-- <div v-for="(component, index) in components" :key="index" v-html="component.template"></div> -->
      <div v-for="(item, index) in components" :key="index" :id="item.id"></div>
    </div>
  </div>
</template>
<script>
import { templateToDom } from './components/template';
import mount from './components/mount';
import guid from './utils/guid';

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
    dragstart(e) {
      let componentName = e.target.getAttribute('data-name');
      let info = {
        name: componentName,
        type: this.activeUI,
        ui: 'MTD',
      };
      e.dataTransfer.setData('info', JSON.stringify(info));
    },
    drop(e) {
      const info = JSON.parse(e.dataTransfer.getData('info')) || {};
      info.id = guid();
      let component = Object.assign(templateToDom(info), { id: info.id });
      this.components.push(component);
      mount();
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
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
</style>
