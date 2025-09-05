let isloggedin = false

const login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "lemong" || username === "lemong@gmail.com") {
        if (password === "lemong") {
            isloggedin = true
            localStorage.setItem("islogin", true);
            window.location.href = "index.html";
        } else {
            alert("Wrong password");
        }
    }
    
    else {
        alert("Username is invalid");
    }
    return false;
}

const rightDiv = document.querySelector(".navbar .right");
const about = rightDiv.querySelector("p");

if (localStorage.getItem("islogin") === "true") {
    const profileP = document.createElement("p");
    const profileA = document.createElement("a");
    profileA.href = "profile.html";              
    profileA.textContent = "profile";    
    profileP.appendChild(profileA);

    rightDiv.insertBefore(profileP, about);

    const logoutP = document.createElement("p");
    const logoutA = document.createElement("a");
    logoutA.href = "index.html";
    logoutA.textContent = "Logout";
    logoutA.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem("islogin", "false");
        window.location.href = "index.html";
    });
    rightDiv.insertBefore(logoutP, about.nextSibling);
    logoutP.appendChild(logoutA);

} else {
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.href = "login.html";
    a.textContent = "Login"; 
    p.appendChild(a);

    rightDiv.insertBefore(p, about);
}
