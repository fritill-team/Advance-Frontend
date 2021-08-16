<template>
  <div class="question-wrapper">
    <div class="question-header">
      <h3 class="question" v-text="question" />
      
    </div>
    
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