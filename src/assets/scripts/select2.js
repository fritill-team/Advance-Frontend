$(document).ready(function () {
  $('.select2').select2({
    tags: "true",
    placeholder: "Select an option",
    allowClear: true
  });
  function formatData (data) {
    if (!data.id) { return data.text; }
    var $result= $(
      '<span><img class="image image--profile" src="../assets/images/get_img.jpg"/> ' + data.text + '</span>'
    );
    return $result;
  };
  
  $("#SelectPeriode").select2({
    templateResult: formatData,
    templateSelection: formatData
  
  });
  // $('.question__type').select2()
});
