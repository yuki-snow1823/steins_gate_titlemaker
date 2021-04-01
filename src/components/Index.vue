<template>
  <div>
    <p>{{ frontTitle }}</p>の
    <p>{{ backTitle }}</p>

    <button v-if="switchFTitleBtn" @click="changeFrontTitle()">先頭タイトル変更</button>
    <button v-else @click="stopChangeFront()">STOP!</button>

    <button v-if="switchBTitleBtn" @click="changeBackTitle()">後方タイトル変更</button>
    <button v-else @click="stopChangeBack()">STOP!</button>

    <!-- v-ifで見えなくする -->
    <a :href="tweetUrl">ツイートする！（してください）</a>
    <span>created by <a href="https://twitter.com/yuki82511988">yuki</a></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontTitle: "境界面上",
      backTitle: "シュタインズゲート",
      frontWords: ["永劫回帰", "支離滅裂", "輪廻転生", "晴耕雨読"],
      backWords: ["エムブレム", "ドリーム", "ブリザード", "ニライカナイ"],

      switchFTitleBtn: true,
      switchBTitleBtn: true,
      tmpFrontTitle: "",
      tmpBackTitle: "",

      url: this.tweetUrl,
      tweetDefault: "https://twitter.com/intent/tweet?text="
    };
  },
  name: "Index",
  methods: {
    randomFrontTitle: function() {
      this.frontTitle = this.frontWords[
        Math.floor(Math.random() * this.frontWords.length)
      ];
    },
    randomBackTitle: function() {
      this.backTitle = this.backWords[
        Math.floor(Math.random() * this.backWords.length)
      ];
    },
    changeFrontTitle: function() {
      this.tmpFrontTitle = setInterval(() => {
        this.randomFrontTitle();
      }, 100);
      this.switchFTitleBtn = !this.switchFTitleBtn;
    },
    changeBackTitle: function() {
      this.tmpBackTitle = setInterval(() => {
        this.randomBackTitle();
      }, 100);
      this.switchBTitleBtn = !this.switchBTitleBtn;
    },
    stopChangeFront: function() {
      clearInterval(this.tmpFrontTitle);
      this.switchFTitleBtn = !this.switchFTitleBtn;
    },
    stopChangeBack: function() {
      clearInterval(this.tmpBackTitle);
      this.switchBTitleBtn = !this.switchBTitleBtn;
    }
  },
  computed: {
    tweetUrl: function() {
      console.log("通っている");
      return (
        this.tweetDefault +
        this.frontTitle +
        "の" +
        this.backTitle +
        "&hashtags=シュタゲタイトルメーカー" +
        "&url=https://yuki-snow1823.github.io/steins_gate_titlemaker/"
      );
    }
  }
};
</script>

<style scoped>
</style>
