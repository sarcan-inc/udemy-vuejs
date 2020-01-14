<template>
  <header>
    <h1>{{ headerText }}</h1>
    <div class="description">
      <slot name="default"></slot>
      <slot></slot>
    </div>
    <div class="blogmeta">
      <dl>
        <slot name="author" v-bind:user="user"></slot>
        <slot name="company" v-bind:user="user"></slot>
        <dd>Totalいいね：{{ totalNumber }}</dd>
      </dl>
    </div>
  </header>
</template>

<script>
export default {
  data:function(){
    return{
      user:{
        author : "yoshiomi sato",
        company : "sarcan inc."
      }
    }
  },
  props:["headerText","totalNumber"]
}
</script>


<style scoped>
  header h1{
    padding: 10px;
    background-color:#ddd;
    font-size: 20px;
  }
  header .blogmeta dl dt,
  header .blogmeta dl dd{
    display:inline-block;
  }
  header .blogmeta dl dd::before{
    content:"｜"
  }
</style>