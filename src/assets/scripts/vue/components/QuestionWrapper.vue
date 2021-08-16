<template>
  <div class="question-wrapper">
    <h3 class="question" v-text="question" />
    
    <ul class="hints">
      <li v-text="hint" />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'QuestionWrapper',
    props: ['question', 'hint'],
    components: {

    }
  }
</script>