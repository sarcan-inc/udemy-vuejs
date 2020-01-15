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


<style lang="less">
  header{
    h1{
      padding: 10px;
      background-color:blue;
      font-size: 20px;
      color: #fff;
    }
    .blogmeta{
      dl{
        dt,dd{
          display:inline-block;
        }
        dd{
          &::before{
            content:"|"
          }
        }
      }
    }
  }//header
</style>