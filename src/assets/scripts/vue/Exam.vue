<template>
  <div>
    <h1>{{title}}</h1>
    <question-wrapper/>
  </div>
</template>

<script>
  import QuestionWrapper from './components/QuestionWrapper.vue' ;
  export default {
    name: 'Exam',
    data() {
      return { title: "test exam page with vue" }
    },
    components: {
      QuestionWrapper
    }
  }
</script>
