<template>
<div class="myGood">
  <h2>{{ blogTitle }} ｜ いいね：{{ number }}</h2>
  <button @click="addLikeNumber">いいね</button>
  <div class="header-bottom">
    <slot v-bind:postDate="postDate">
      <time>日付なし｜これはフォールバックコンテンツ</time>
    </slot>
  </div>
</div>
</template>

<script>
export default {
  data:function(){
    return {
      number : 0,
      postDate : "2018/2/3"
    }
  },
  props:{
    blogTitle:{
      default:"名無しのゴンベ"
    }
  },
  methods:{
    addLikeNumber:function(){
      this.$emit("myLikeNumber");
      return this.number++;
    }
  }
}
</script>

<style scoped>
.myGood{
  background:#f5f5f5;
  padding:20px;
  margin-bottom:20px;
}
.myGood .header-bottom{
  padding-bottom: 5px;
  margin:10px 0;
  border-bottom: 1px solid #bbb;
}
</style>