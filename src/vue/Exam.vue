<template>
  <form class="exam">
    <question-wrapper />
  </form>
</template>

<script>
import QuestionWrapper from "./components/QuestionWrapper.vue";
import AnswerWrapper from "./components/AnswerWrapper.vue";

export default {
  name: "Exam",
  components: {
    QuestionWrapper,
    AnswerWrapper,
  },
  setup() {
    return {};
  },
};
</script>
