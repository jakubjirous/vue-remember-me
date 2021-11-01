<template>
  <ul>
    <learning-resource
      v-for="(resource, index) in resources"
      :key="index"
      :description="resource.description"
      :link="resource.link"
      :title="resource.title"
    >
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource';

export default {
  name: 'StoredResource',
  components: {
    'learning-resource': LearningResource,
  },
  props: {
    resources: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 40rem;
}
</style>
