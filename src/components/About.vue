<template>
  <div>
    <h2>About</h2>
    <p>{{title | upperCase}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "welcome to tokyo"
    };
  }
};
</script>
