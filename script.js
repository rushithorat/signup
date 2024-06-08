function validatePassword(password) {
    
    if (password.length !== 8) {
        return false;
    }
    
    var n = /\d/.test(password);
    var a = /[a-zA-Z]/.test(password);
    var c = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return n && a && c;
}

function verify() {
    var m = document.getElementById('mob').value;
   
    var Passw = document.getElementById('pass').value;

    if (validatePassword(Passw) && (m.length == 13)) 
        {
        window.location.href = "https://www.rss.org/";
    } 
    else if(m.length != 13)
        {
        document.getElementById('invalid').value = "Mobile number should be of 10 digits";
    }
else{
    document.getElementById('invalid').value = "format of password is incorrect";
}
}
function displayCountry() {
    let mobile = document.getElementById("mob").value;
    let country = document.getElementById("country");
    if (mobile.startsWith("+91")) {
        country.textContent = "India   ";
        } else if (mobile.startsWith("+92")){
        country.textContent = "Pakistan  ";
        
    }  else if (mobile.startsWith("+86")){
        country.textContent = "china";
        
    } 
    else if (mobile.startsWith("+1")){
        country.textContent = "America";
        
    } 
    else if (mobile.startsWith("+94")){
        country.textContent = "srilanka";
        
    } 
    else if (mobile.startsWith("+61")){
        country.textContent = "Auatralia";
        
    } 
    else {
        country.textContent = "others";
        
    } 
}

