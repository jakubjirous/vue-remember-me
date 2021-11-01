<template>
  <the-header title="Remember Me"></the-header>
  <stored-resource :resources="storedResources"></stored-resource>
</template>

<script>
import StoredResource from './components/learning-resources/StoredResource';
import TheHeader from './components/layouts/TheHeader';

export default {
  name: 'App',
  components: {
    StoredResource,
    TheHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
