<template>
  <div class="filterNav">
    <input
      v-model="filterText"
      placeholder="Filtrer par titre ou auteur"
      @input="applyFilter"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: "", 
    };
  },
  methods: {
    applyFilter() {
      this.$emit("filter", this.filterText);
    },
  },
};
</script>

<style scoped>
.filterNav {
  margin-bottom: 20px;
}
input {
  padding: 8px;
  width: 100%;
  max-width: 300px;
  border: 1px solid  rgb(231, 230, 230);
  border-radius: 4px;
}
</style>