Nova.booting((Vue, router, store) => {
  Vue.component('index-text-editor', require('./components/IndexField'))
  Vue.component('detail-text-editor', require('./components/DetailField'))
  Vue.component('form-text-editor', require('./components/FormField'))
})
