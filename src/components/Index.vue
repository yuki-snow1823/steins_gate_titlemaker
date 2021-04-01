<template>
  <div>
    <p>{{ frontTitle }}</p>の<p>{{ backTitle }}</p>
    <button @click="test()">押せ！1</button>
    <button @click="changeBackTitle()">押せ！2</button>
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
    }
  },
  name: "Index",
  props: {
    msg: String
  },
  methods: {
    changeFrontTitle: function() {
      console.log("呼び出された");
      this.frontTitle = this.frontWords[Math.floor(Math.random() * this.frontWords.length)]
    },
    test: function() {
      console.log("hoge");
      setInterval(this.changeFrontTitle(), 100);
    },
    changeBackTitle: function() {
      console.log("test");
      this.backTitle = this.backWords[Math.floor(Math.random() * this.backWords.length)]
    }
  }
};
</script>

<style scoped>

</style>
