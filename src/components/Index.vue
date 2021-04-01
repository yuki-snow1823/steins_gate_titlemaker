<template>
  <div>
    <h1 class="app-name">シュタインズゲートっぽい<br/>タイトルメーカー</h1>

    <p class="main-title">{{ frontTitle }}</p>の
    <p class="main-title">{{ backTitle }}</p>

    <div class="button__wrapper">
      <a class="button" v-if="switchFTitleBtn" @click="changeFrontTitle()">先頭タイトル変更</a>
      <a class="stop_button button" v-else @click="stopChangeFront()">STOP!</a>
    </div>

    <div class="button__wrapper">
      <a class="button" v-if="switchBTitleBtn" @click="changeBackTitle()">後方タイトル変更</a>
      <a class="stop_button button" v-else @click="stopChangeBack()">STOP!</a>
    </div>

    <!-- v-ifで見えなくする -->
    <a :href="tweetUrl">ツイートする！（してください）</a>
    <div class="name__wrapper">
      <span>
        created by
        <a href="https://twitter.com/yuki82511988">yuki</a>
        <br />
      </span>
    </div>

    <div>
      <a href="https://github.com/yuki-snow1823">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontTitle: "境界面上",
      backTitle: "シュタインズゲート",
      frontWords: ["永劫回帰", "支離滅裂", "輪廻転生", "晴耕雨読", "鶏鳴狗盗"],
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
.app-name {
  color: #8f383f;
}
.main-title {
  font-size: 24px;
}
.button__wrapper {
  margin-bottom: 32px;
}
.stop_button {
  padding: 12px 77px !important;
}

.name__wrapper {
  margin: 24px 0;
}

.name__wrapper > p {
  margin-bottom: 14px;
}

.button {
  display: inline-block;
  padding: 12px 36px;
  text-decoration: none;
  background: #cae3f0;
  color: rgb(192, 189, 158);
  font-weight: bold;
  border-bottom: solid 4px #8494b6;
  border-radius: 3px;
}
.button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px); /*下に動く*/
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); /*影を小さく*/
  border-bottom: none;
}

@media (max-width: 540px) {
  .app-name {
    font-size: 24px;
  }
}
</style>
