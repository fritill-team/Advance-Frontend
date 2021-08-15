<template>
  <div class="question-wrapper">
    <h3 class="question" v-text="question" />
    
  </div>
  <ul class="hints">
    <li v-text="hint" />
  </ul>
</template>

<script>
  export default {
    name: 'QuestionWrapper',
    props: ['question', 'hint'],
    components: {

    }
  }
</script>