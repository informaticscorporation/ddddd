const islogged = false

function showFormLogin() {
    const container = document.getElementById("container");
    container.innerHTML = "";
    const form = document.createElement("input");
    const btn_2 = document.createElement("button");
    btn_2.id = "btn2";
    btn_2.textContent = "logout";
    container.appendChild(form);
    container.appendChild(btn_2);
    const btnLogout = document.getElementById("btn2");
    btnLogout.addEventListener("click", logout);
}

function logout() {

    const container = document.getElementById("container");
    container.innerHTML = "" 
    const btn_1 = document.createElement("button");
    btn_1.id = "btn_1";
    btn_1.textContent = "login";
    container.appendChild(btn_1);
    const btnLogin = document.getElementById("btn_1");
    btnLogin.addEventListener("click", showFormLogin);
}


function Toogle() {
    if(islogged == true) {
        showFormLogin()

    } else {
        logout()

    } 
}

Toogle()
