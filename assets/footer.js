console.log($("#ContactFooter"));
$("#ContactFooter").submit((e) => {
  e.preventDefault();
  alert("should see");
  $("#ContactFooter").submit();
});
