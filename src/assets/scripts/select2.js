$(function () {
  $('.select2').each(function () {
    // $(this).next().addClass('field')
    $('.select2-selection').addClass('field')
    $(this).select2({
      tags: "true",
      placeholder: "Select an option",
      allowClear: false,
    });
  })

  function formatData(data) {
    if (!data.id) {
      return data.text;
    }
    var $result = $(
      '<span><img class="image image--plan" src="../assets/images/get_img.jpg"/> ' + data.text + '</span>'
    );
    return $result;
  };

  $("#SelectPeriode").select2({
    templateResult: formatData,
    templateSelection: formatData

  });
  // $('.question__type').select2()
});
