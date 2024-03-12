function login(){
    var user = $("#user").val();
    var password = $("#password").val();

    if(user && password && user === "admin" && password ==="admin"){
        const user = {
            name: user,
            entryDate: new Date(),
            id: Math.floor(Math.random() * 100000),
        }

        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "../STORE/index.html"
        console.log("Deu boa")
    }else{
        document.getElementById("error-modal").style.display = "flex";
        document.getElementById("user").style.border = "2px solid ";
        document.getElementById("password").style.border = "2px solid ";
    }
}

function CloseError(){
    document.getElementById("error-modal").style.display = "none";
    document.getElementById("user").style.border = "2px solid ";
    document.getElementById("password").style.border = "2px solid ";
}

function showPassword(){
    var inputPassword = document.querySelector("#password");

    if(inputPassword.getAttribute("type") === "password"){
        inputPassword.setAttribute("type", "text");
    }
}

function format(item){
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minutes: "numeric",
        second: "numeric",
    
    }
}

    return item.toLocaleString("pt-BR", options)

