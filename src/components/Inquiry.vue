<template>
<div>
  <h2>Inquiry</h2>
  <form action="">
    <dl>
      <dt><label for="name">お名前</label></dt>
      <dd><input id="name" type="text" v-model="eventData.name"></dd>
      <dd><pre>{{eventData.name}}</pre></dd>
    </dl>
    <dl>
      <dt><label for="kana">ふりがな</label></dt>
      <dd>
        <input
          id="kana" 
          type="text"
          v-model.lazy="eventData.kana"
        >
      </dd>
      <dd>{{eventData.kana}}</dd>
    </dl>
    <dl>
      <dt><label for="mail">メールアドレス</label></dt>
      <dd><input type="text" id="mail" v-model.lazy="eventData.mail"></dd>
      <dd>{{eventData.mail}}</dd>
    </dl>
    <dl>
      <dt><label>参加人数</label></dt>
      <dd><input type="number" v-model.number="eventData.number"></dd>
      <dd>{{eventData.number}}/{{typeof eventData.number}}</dd>
    </dl>
    <dl>
      <dt>興味のある項目</dt>
      <dd>
        <input type="checkbox" id="IT" v-model="eventData.interest" value="IT"><label for="IT">IT</label><br>
        <input type="checkbox" id="Design" v-model="eventData.interest" value="Design"><label for="Design">Design</label><br>
        <input type="checkbox" id="Management" v-model="eventData.interest" value="Management"><label for="Management">Management</label>
      </dd>
      <dd>{{eventData.interest}}</dd>
    </dl>
    <dl>
      <dt>出身地</dt>
      <dd>
        <input type="radio" v-model="eventData.region" value="東京"><label for="">東京</label><br>
        <input type="radio" v-model="eventData.region" value="千葉"><label for="">千葉</label><br>
        <input type="radio" v-model="eventData.region" value="茨城"><label for="">茨城</label><br>
      </dd>
      <dd>{{eventData.region}}</dd>
    </dl>
    <dl>
      <dt><label>主催者</label></dt>
      <dd><input type="text" v-model.trim="eventData.host"></dd>
      <dd><pre>{{eventData.host}}</pre></dd>
    </dl>
    <dl>
      <dt><label for="isPrivate">非公開</label></dt>
      <dd><input type="checkbox" id="isPrivate" v-model="eventData.isPrivate"></dd>
      <dd>{{eventData.isPrivate}}</dd>
    </dl>
    <dl>
      <dt>お問い合わせ項目</dt>
      <dd>
        <select name="" id="" v-model="eventData.komoku">
          <option value="">選択して下さい</option>
          <option :value="contactKomoku" v-for="contactKomoku in contactKomokus" :key="contactKomoku">{{contactKomoku}}</option>
        </select>
      </dd>
      <dd>{{eventData.komoku}}</dd>
    </dl>
    <dl>
      <dt><label for="detail">お問い合わせ内容</label></dt>
      <dd><textarea id="detail" v-model="eventData.detail"></textarea></dd>
      <dd><pre>{{eventData.detail}}</pre></dd>
    </dl>
  </form>
</div>  
</template>


<script>
export default {
  activated(){
    //alert("activated");
  },
  deactivated(){
    //alert("deactivated")
  },
  data:function(){
    return{
      contactKomokus : ["費用","セミナー","コンサル","ブランディング"],
      eventData:{
        name:"",
        kana:"ふりがな",
        mail:"",
        number:0,
        host:"",
        detail:"",
        isPrivate:false,
        interest:[],
        region:"",
        komoku:""
      }
    }
  },
  methods:{
  }

}
</script>


<style scoped>
form dl{
  padding:10px 0;
  border-bottom :1px solid #ddd;
}
</style>