<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p>
      You know that <a href="https://tetris.wiki/TETR.IO#Mechanics" target="_blank" rel="noopener">Tetrio combo table picture</a> is wrong?
    </p>

  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}

</style>
