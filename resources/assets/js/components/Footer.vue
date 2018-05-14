<template>
  <footer class="app-footer">
    <span><a :href="page" target="_BLANK">{{title}}</a> &copy; {{currentYear}} {{desc}}</span>
    <span class="ml-auto">Developed by <a href="https://github.com/jjdelarosa" target="_BLANK">Jeffry Jesus De La Rosa</a></span>
  </footer>
</template>
<script>
export default {
  name: 'c-footer',
    data: () => ({
   
    title: window.config.appName,
    desc: window.config.appDesc,
    page: window.config.appWeb,
    currentYear: (new Date).getFullYear()
  }),
}
</script>
