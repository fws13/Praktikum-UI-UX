function cekLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    const validUser = "fathuddin wicaksono";
    const validPass = "icak13";

    if (user === validUser && pass === validPass) {
        alert("Login Sukses");
        window.location.href = "sukses.html"; 
    } else {
        alert("Login Gagal");
        document.getElementById("password").value = "";
    }
}