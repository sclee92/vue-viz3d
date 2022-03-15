<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
console.log("import - start");
import VIZWide3D from "../VIZCore/VIZCore";    

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
      return {
        title: ''
      }
    },
  beforeCreate () {
      console.log("beforeCreate");
  },
  computed: {
      titleComputed() {
        console.log('I change when this.property changes.')
        return this.property
      }
    },
  created () {
    console.log("created");
    //can use Data(this.title, this.titleComputed ...), events(vm.$on, vm.$once, vm.$off, vm.$emit)
    //don't use $el
  },
  beforeMount() {
    console.log(`this.$el doesn't exist yet, but it will soon!`)
  },
  mounted() {
    console.log(this.$el.textContent) // can use $el
    this.$nextTick(function () {
      // 모든 화면이 렌더링된 후 실행합니다.
    })

    
    let view = document.getElementById("view");
    //console.log(view);
    //console.log(moduleFactory);
    view.className = 'VIZCore';
    let vizcore = new VIZWide3D(view);
    //console.log(vizcore);
    let initresult = vizcore.__proto__.Init();
    console.log("vIZCore Init : " + initresult);
    if(initresult)
    {
      var files = [];

        // Add Model File...
        files.push("http://localhost:64875/VIZCore/Model/toycar.vizw");
        // Call Method : Add Model
        vizcore.View.Model.Add(files);
    }
    
  },
  updated() {
    this.$nextTick(function () {
      // 모든 화면이 렌더링된 후 실행합니다.
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


   
</style>
