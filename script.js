function enterSite(){
    let name = document.getElementById("name").value.trim();
    if(!name){
        alert("Naam daal do sweetheart 😘");
        return;
    }
    localStorage.setItem("username", name);
    window.location.href = "surprise.html"; 
}
