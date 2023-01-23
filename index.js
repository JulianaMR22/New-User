let header_button = document.getElementById("header_button");
let container_user = document.getElementById("second_container");
let btn_cancel = document.getElementById("btn_cancel");

header_button.addEventListener("click", function(){
container_user.classList.remove("close_user");
container_user.classList.add("open_user")
})
btn_cancel.addEventListener("click", function () {
  container_user.classList.add("close_user");
  container_user.classList.remove("open_user");
});