let header_button = document.getElementById("header_button");
let container_user = document.getElementById("second_container");
let btn_cancel = document.getElementById("btn_cancel");
let btn_create = document.getElementById("btn_create");
let input_name = document.getElementById("input_name");
let input_second = document.getElementById("input_second");
let input_country = document.getElementById("input_country");
let input_salary = document.getElementById("input_salary");
let input_position = document.getElementById("input_position");
let principal_table = document.getElementById("principal_table");

function closeModal() {
  container_user.classList.add("close_user");
  container_user.classList.remove("open_user");
}

function openModal() {
  container_user.classList.remove("close_user");
  container_user.classList.add("open_user");
}

function clearInputs() {
  input_name.value = "";
  input_second.value = "";
  input_country.value = "";
  input_salary.value = "";
  input_position.value = "";
}

function addNewUser() {
  principal_table.innerHTML += `
        <tr id="row_user">
          <td class="body_table">${input_name.value}</td>
          <td class="body_table">${input_second.value}</td>
          <td class="body_table">${input_country.value}</td>
          <td class="body_table">${input_salary.value}</td>
          <td class="body_table">${input_position.value}</td>
          <td class="body_table_delete" >
            <i class="material-icons icon_delete" onclick= "document.getElementById('row_user').remove()">delete</i>
          </td>
        </tr>
  `;
}

function validateInputs() {
  if (
    input_name.value === "" ||
    input_second.value === "" ||
    input_country.value === "" ||
    input_salary.value === "" ||
    input_position.value === ""
  ) {
    alert("Por favor diligenciar todos los espacios en blanco");
  } else {
    addNewUser();
  }
}

header_button.addEventListener("click", function () {
  openModal();
});
btn_cancel.addEventListener("click", function () {
  closeModal();
});

btn_create.addEventListener("click", function () {
  validateInputs();
  clearInputs();
  closeModal();
});
