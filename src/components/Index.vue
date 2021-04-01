<template>
  <div>
    <p>{{ frontTitle }}</p>の
    <p>{{ backTitle }}</p>

    <button v-if="hoge" @click="changeFrontTitle()">押せ！1</button>
    <button v-else @click="stop()">ストップ</button>

    <button @click="changeBackTitle()">押せ！2</button>

    <!-- v-ifで見えなくする -->
    <a @click="makeTweet">ツイートする</a>
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
      hoge: true,
      aaa: "",

      createdUrl: "",
      tweetDefault: "https://twitter.com/intent/tweet?text="
    };
  },
  name: "Index",
  props: {
    msg: String
  },
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
      this.aaa = setInterval(() => {
        this.randomFrontTitle();
      }, 100);
      this.hoge = !this.hoge;
    },
    changeBackTitle: function() {
      setInterval(() => {
        this.randomBackTitle();
      }, 100);
    },
    makeTweet: function() {},
    stop: function() {
      console.log("test");
      clearInterval(this.aaa);
      this.hoge = !this.hoge;
    }
  }
};
</script>

<style scoped>
</style>
