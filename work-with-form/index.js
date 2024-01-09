let userForm = document.getElementById("userForm");

let resetBtn = document.getElementById("reset");
let gonderBtn = document.getElementById("gonder");

userForm.addEventListener("submit", formHandler);


function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.getElementById("username");
  const SCORE = document.getElementById("score");

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    
  }
  
}

const userList = document.getElementById("userList");

const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
        ${userName} <span class="badge bg-primary rounded-pill">${score} </span>
    `;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userList.appendChild(liDOM);
};
