<template>
  <main>
    <CommonHeader headerText="練習ブログ" :totalNumber="number">
      <p>たとえばなんですけど、なんでもいいんですけど</p>
      <template v-slot:author="slotData">
        <dt>author:{{slotData.user.author}}</dt>
      </template>
      <template v-slot:company="slotData">
        <dd>company：{{slotData.user.company}}</dd>
      </template>
      <p>こんにちははじめましてこのブログは練習です</p>
    </CommonHeader>

    <!-- コンポーネントを動的に変更する -->
    <nav>
      <ul>
        <li @click="currentComponent='Inquiry'">Inquiry</li>
        <li @click="currentComponent='About'">About</li>
      </ul>
    </nav>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <LikeNumber blogTitle="blogtitle" @myLikeNumber="number += 1"></LikeNumber>
    <LikeNumber blogTitle="テキスト送るときは普通の属性" @myLikeNumber="number += 1" v-slot:default="slotData">
      <time>{{todayYMD}} | 投稿日：{{slotData.postDate}}</time>
    </LikeNumber>
    <LikeNumber @myLikeNumber="number += 1"></LikeNumber>
    <LikeNumber @myLikeNumber="number += 1"></LikeNumber>
  </main>
</template>

<script>
import LikeNumber from "./components/LikeNumber.vue";
import About from "./components/About.vue";
import Inquiry from "./components/Inquiry.vue";

export default {
  data: function() {
    return {
      number: 14,
      currentComponent: "Inquiry"
    };
  },
  computed: {
    todayYMD: function() {
      const getDate = new Date();
      return (
        getDate.getFullYear() +
        "/" +
        getDate.getMonth() +
        1 +
        "/" +
        getDate.getDate()
      );
    }
  },
  components: {
    LikeNumber: LikeNumber,
    About: About,
    Inquiry: Inquiry
  }
};
</script>

<style scoped>
main {
  background-color: #eee;
}
nav ul li {
  display: inline-block;
  margin: 0 5px;
  padding: 5px 20px;
  background: #ddd;
  text-align: center;
  cursor: pointer;
}
nav ul li:hover {
  background: #eee;
}
</style>

