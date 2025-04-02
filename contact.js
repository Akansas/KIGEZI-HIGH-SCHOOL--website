document.addEventListener("DOMContentLoaded",function(){
    fetch("header.html")
    .then(Response=>Response.text())
    .then(data=>Document.body.insertAdjacentHTML("afterbegin",data));
    fetch("footer.html")
    .then(Response=>Response.text())
    .then(data=Document.body.insertAdjacentHTML("beforeend",data));
})
function validateForm( ){
    const name=
    document.getElementById('name').value;
    const email=
    document.getElementById('email').value;
    const message=
    document.getElementById('message').value;

    if(!name||!email||!message){
        alert("Please fill in all fields before submittion")
        return false;
    }
}