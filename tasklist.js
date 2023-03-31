$(document).ready(function () {
  // Add task
  $("#add-task").click(function () {
    var task = $("#new-task").val();
    if (task != "") {
      $("#task-list").append(
        "<li>" + task + '<button class="delete-task">X</button></li>'
      );
      $("#new-task").val("");
    }
  });

  // Remove task
  $(document).on("click", ".delete-task", function () {
    $(this).parent().remove();
  });
});
