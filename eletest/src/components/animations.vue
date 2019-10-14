<template>
  <div class="hello">
    <el-button @click='isShow=!isShow'>click me !</el-button>
    <div class="m2">
      <transition name="fade">
        <div v-if="isShow">{{msg}}</div>
      </transition>
    </div>
    <div class="m2">
      <transition name="fade1">
        <div v-if='isShow'>{{msg}}</div>
      </transition>
    </div>
    <div class="m2">
      <transition name="fade2">
        <div v-show='isShow'>{{msg}}</div>
      </transition>
    </div>
    <div class="m2">
      <transition name="fade3">
        <div v-show='isShow'>{{msg}}</div>
      </transition>
    </div>
    <div class="m2">
      <transition name="fade4">
        <div v-show='isShow'>{{msg}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animations',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShow:true
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.m2{width:300px;height:30px;line-height:30px;margin:0 auto;margin-top:50px;}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade1-enter {
  color:bisque;
}
.fade1-enter-active {
  transition:all 2s linear;
  transform:translateX(300px);
}
.fade1-enter-to {
  transform:translateX(0px);
  background:-webkit-linear-gradient(left,green,blue,pink,red);
}
.fade1-leave-active {
  transition:all 2s linear;
}
.fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);
}

.fade2-enter {
  transform:scale(1);
}
.fade2-enter-active {
  transition:all 2s linear;
  transform:scale(2);
}
.fade2-enter-to {
  transform:scale(1);
}
.fade2-leave {
  transform:scale(2)
}
.fade2-leave-active {
  transition:all 2s linear;
}
.fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(2);
}

.fade3-enter {
  transform:rotate(0);
}
.fade3-enter-active {
  transition:all 2s linear;
  transform:rotate(360deg);
}
.fade3-enter-to {
  transform:rotate(0);
}
.fade3-leave {
  transform:rotate(360deg);
}
.fade3-leave-active {
  transition:all 2s linear;
}
.fade3-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform:rotate(360deg);
}

.fade4-enter {
  transform:skew(0deg,0deg);
}
.fade4-enter-active {
  transition:all 2s linear;
  transform:skew(30deg,40deg);
}
.fade4-enter-to {
  transform:skew(0deg,0deg);
}
.fade4-leave {
  transform:skew(0,0);
}
.fade4-leave-active {
  transition:all 2s linear;
}
.fade4-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform:skew(-30deg,-40deg);
}
</style>
