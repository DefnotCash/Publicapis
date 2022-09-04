const UserDetails = async() => {
    let fetchUserData = await fetch("https://randomuser.me/api")
    let UserData = await fetchUserData.json();
    let finalData = UserData.results;
    let result = finalData.map(display=>`<img src="${display.picture.large}"><br><br> Firstname: ${display.name.first} <br> Lastname: ${display.name.last}`)
    return document.body.innerHTML = result.join("")
}
UserDetails();
