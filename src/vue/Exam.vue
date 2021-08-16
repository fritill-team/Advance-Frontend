<template>
  <form class="exam">
    <question-wrapper
      question="what is your name?"
      hint="my name is mohammed">
    </question-wrapper>
  </form>
</template>

<script>

  import QuestionWrapper from "./components/QuestionWrapper.vue";

  export default {
    name: 'Exam',
    components: {
      QuestionWrapper
    },

  }
</script>
