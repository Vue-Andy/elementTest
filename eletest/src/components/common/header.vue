<template>
  <div>
    <span>
      vue-elementUI test
    </span>
----
    <span v-for="item in user" :key="item.id">
      {{item.name}}
    </span>
----
    <!-- <slot>默认内容</slot>
    <slot name='first'></slot>
    <slot name='second'></slot> -->

    <slot :data="user"></slot>
  </div>
</template>

<script>
export default {
  name:'headerCon',
  data(){
    return {
      user: [
        {name: 'Jack', sex: 'boy'},
        {name: 'Jone', sex: 'girl'},
        {name: 'Tom', sex: 'boy'}
      ]
    }
  }
}
</script>

<style>

</style>


