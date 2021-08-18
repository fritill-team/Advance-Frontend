<template>
  <form class="exam">
    <question-wrapper>
			<answer-wrapper>
				<Checkbox/>
			</answer-wrapper>
		</question-wrapper>
  </form>
</template>

<script>
import QuestionWrapper from "./components/QuestionWrapper.vue";
import AnswerWrapper from "./components/AnswerWrapper.vue";
import Checkbox from "./components/Checkbox.vue";
export default {
  name: "Exam",
  components: {
    QuestionWrapper,
    AnswerWrapper,
		Checkbox
  },
  setup() {
    return {};
  },
};
</script>
