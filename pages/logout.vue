<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    localStorage.removeItem("_token");
    return (location.href = "/");
  },
};
</script>