
// $(function () {
//   var $chooser = $("#fieldChooser").fieldChooser();
//   var $sourceFields = $("#sourceFields").children();
//   $chooser.getSourceList().add($sourceFields);
// });
$(document).ready(function () {
  var $chooser = $("#fieldChooser").fieldChooser();
  var $sourceFields = $("#sourceFields").children();
  $chooser.getSourceList().add($sourceFields);
});
  