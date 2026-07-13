function displayCharacter() {

    let username = document.getElementById("username").value;
    let weapon = document.getElementById("weapon").value;
    let health = document.getElementById("health").value;
    let points = document.getElementById("points").value;

    document.getElementById("output").innerHTML =
        "<strong>User Name:</strong> " + username + "<br>" +
        "<strong>Weapon:</strong> " + weapon + "<br>" +
        "<strong>Health/Damage:</strong> " + health + "<br>" +
        "<strong>Point Total:</strong> " + points;
}