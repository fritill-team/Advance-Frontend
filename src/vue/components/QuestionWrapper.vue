<template>
  <div class="question-wrapper">
    <div class="question-header">
      <div class="field-wrapper field-wrapper--no-message mt-0">
        <label class="text-field__label">Course Title*</label>
        <div class="text-field__content">
          <input class="text-field__input" type="text" placeholder="Insert your course title." name="title" data-purpose="edit-course-title" maxlength="" id="main[title1]" value=""/>
        </div>
      </div>
      <select class="question-type form-select form-select-lg" aria-label=".form-select-lg example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
		<slot/>
    <ul class="hints">
      <li>this is hint</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'QuestionWrapper',
    setup(props){

    }
  }
</script>
