<template>
  <Main msg="Tetrio Attack Table"/>
  <p>B2B = {{b2b}}</p>
  <vue-number-input placeholder="Small" size="small" v-model="b2b" :min="0" :max="24" inline controls>B2B</vue-number-input>
  <p>combo</p>
  <div>
  <table class="center">
    <tr :style="black">
      <th v-for="title in titleForTable" :key="title">
          {{title}}
      </th>
    </tr>
    <tr v-for="atkl in tableForB2B()" :key="atkl">
      <td v-for="atk in atkl" :key="atk" :style="getColor(atk)">
        {{atk}}
      </td>
    </tr>
  </table>
  </div>
</template>

<script>
import Main from './components/main.vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';
import tetrioatk from './tetrioatk.js';
export default {
  name: 'App',
  components: {
    Main,
    VueNumberInput
  },
  methods:{
    getColor: function(atk){
      if(Number.isInteger(atk)){
        if (atk >= 40) return this.superAtk;
        else if(atk >= 20) return this.bigAtk;
        else if(atk >= 9) return this.medAtk;
      }
      return this.otherColor;
    },
    tableForB2B: function(){
      var t = [];
      var types = (this.b2b == 0)?this.allatktype:this.b2batktype;
      for(var tidx in types){
        var atkl = [];
        atkl.push(types[tidx]);
        for(var i = 0; i <= 20; i++){
          atkl.push(tetrioatk.calAtk(types[tidx],this.b2b,i));
        }
        t.push(atkl);
      }
      return t;
    }
  },
  data(){
    return {
      black:{
        backgroundColor: "#000000"
      },
      superAtk:{
        backgroundColor: "#990099"
      },
      bigAtk:{
        backgroundColor:"#fc0505" 
      },
      medAtk:{
        backgroundColor:"#f28511"
      },
      otherColor:{
        backgroundColor:"#02779e"
      },
      titleForTable:["ATTACK TYPE",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      b2b:0,
      allatktype:[
        "SINGLE",
        "DOUBLE",
        "TRIPLE",
        "TSPIN_MINI_SINGLE",
        "TSPIN_MINI_DOUBLE",
        "TSPIN_SINGLE",
        "QUAD",
        "TSPIN_DOUBLE",
        "TSPIN_TRIPLE",
      ],
      b2batktype:[
        "TSPIN_MINI_SINGLE",
        "TSPIN_MINI_DOUBLE",
        "TSPIN_SINGLE",
        "QUAD",
        "TSPIN_DOUBLE",
        "TSPIN_TRIPLE",
      ],

    };
  }
}
</script>

<style>
.center {
  margin-left: auto;
  margin-right: auto;
}
table {
  width: 50%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
