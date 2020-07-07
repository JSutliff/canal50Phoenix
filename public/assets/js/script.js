// const { post } = require("../../../routes/htmlRoutes");

document.getElementById("toggleMenu").addEventListener("click", function () {
  console.log("clicky");
  document.getElementById("toggler").checked = false;
});

function postData() {
  let userNameInputElem = document.getElementById("userName");
  let userEmailInputElem = document.getElementById("userEmail");
  let userMessageInputElem = document.getElementById("userEmailMessage");
  let userNameInput = userNameInputElem.value;
  let userEmailInput = userEmailInputElem.value;
  let userMessageInput = userMessageInputElem.value;
  userNameInputElem.value = "";
  userEmailInputElem.value = "";
  userMessageInputElem.value = "";
  const data = { userNameInput, userEmailInput, userMessageInput };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("/phoenix-tv-ads", options);
}

document
  .getElementById("contactBtn")
  .addEventListener("click", function (event) {
    let modalBg = document.getElementById("modal-overlay");
    let modalBody = document.getElementById("modal");
    postData();

    event.preventDefault();
    modalBg.classList.remove("hide-modal");
    modalBody.classList.remove("hide-modal");

    setTimeout(function () {
      modalBg.classList.add("hide-modal");
      modalBody.classList.add("hide-modal");
    }, 2500);
  });
