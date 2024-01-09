const gonderBtn = document.getElementById("gonder");
const resetBtn = document.getElementById("reset");
let userForm = document.getElementById("userForm");

userForm.addEventListener("submit", formHandler);
resetBtn.addEventListener("click", deleteAllItems); // Değişiklik burada

function deleteAllItems(event) {
  event.preventDefault();
  userList.innerHTML = "";
}

function formHandler(event) {
  event.preventDefault();
  const userName = document.getElementById("username");
  const score = document.getElementById("score");

  if (userName.value && score.value) {
    addItem(userName.value, score.value);
  }
  score.value = "";
  userName.value = "";
}

const userList = document.getElementById("userList");

function addItem(userName, score) {
  let new_li = document.createElement("li");
  new_li.innerHTML = `
        ${userName} <span class="badge bg-primary rounded-pill">${score} </span>
        <button class="deletebtn" onclick="deleteItem(this)">X</button>
    `;

  new_li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  userList.appendChild(new_li);
}

function deleteItem(button) {
  const listItem = button.closest("li");
  if (listItem) {
    listItem.remove();
  }
}
