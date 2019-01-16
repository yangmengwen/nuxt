// import Vue from 'vue'
// Vue.prototype.$integerSort = (arr) => arr.sort((a,b) =>{
//     return (a-b)
// })
// import sort from 'sort'
// Vue.use(sort)
export default ({app},inject) => {
    app.sort = (arr) => arr.sort();
    inject('integerSort',arr => arr.sort((a,b) =>{return (a-b)}))
}