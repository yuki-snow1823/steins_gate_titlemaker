<template>
  <div>
    <p>{{ frontTitle }}</p>の
    <p>{{ backTitle }}</p>
    <button @click="changeFrontTitle()">押せ！1</button>
    <button @click="changeBackTitle()">押せ！2</button>
    <a href="https://twitter.com/intent/tweet?text=ツイート本文
">押してね</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontTitle: "境界面上",
      backTitle: "シュタインズゲート",
      frontWords: ["永劫回帰", "支離滅裂", "輪廻転生", "晴耕雨読"],
      backWords: ["エムブレム", "ドリーム", "ブリザード", "ニライカナイ"]
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
      setInterval(() => {
        this.randomFrontTitle();
      }, 100);
    },
    changeBackTitle: function() {
      setInterval(() => {
        this.randomBackTitle();
      }, 100);
    },
  }
};
</script>

<style scoped>
</style>
