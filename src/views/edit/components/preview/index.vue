<template>
  <div class="preview-layout" @dragOver="dragOver">
    <div id="nav">
      <navs />
    </div>
    <div class="content" @drop="drop">
      <!-- 预览 -->
      <div v-show="currentType === 'view'" class="view-type">
        <div v-for="(item, index) in components" :key="index" :id="item.id"></div>
      </div>
      <!-- 源码 -->
      <div v-show="currentType === 'code'" class="code-type">
        <!-- {{ sourceCode }} -->
        <highlightjs language="html" :code="sourceCode" />
        <pre v-highlightjs="sourceCode"><code class="html"></code></pre>
        <!-- <pre><code class="html">{{ sourceCode }}</code></pre> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { templateToDom } from '@components/template';
import mount from '@components/mount';
import guid from '@utils/guid';
import navs from './components/navs.vue'

export default {
  name: 'PreviewLayout',
  components: {navs},
  data() {
    return {
      componentsList: [],
      activeUI: 'atom',
    };
  },
  computed: {
    ...mapGetters(['components', 'currentComponent', 'currentType']),
    sourceCode() {
      let template = '<template>';
      this.components.forEach(element => {
        template += element.template
      });
      return `${template}</template>`
    },
  },
  watch: {
    components: {
      handler: function(val, oldVal) {
        console.log(val.length === oldVal.length);
        if(val.length === oldVal.length) {
          mount(this.currentComponent.id, this.currentComponent);
        }
      },
      deep: true
    }
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
    drop(e) {
      const info = JSON.parse(e.dataTransfer.getData('info')) || {};
      info.id = guid();
      let component = Object.assign(templateToDom(info), { id: info.id });
      this.updateCurrentComponent(component)
    },
    updateCurrentComponent(component) {
      this.$store.dispatch('updateCurrentComponent', component).then(() => {
        mount(this.currentComponent.id, this.currentComponent);
      })
      
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
