const menuElement = document.querySelector('#menu')
// go get me some food from API
fetch('https://codice-boca.web.app/menu')
    .then(myRes => myRes.json())
    .then(menuItems => {
        let html = ''
        menuItems.forEach(recipe => {
        let htmlSegment = `<div class="menu-item">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        </div>`

        html += htmlSegment
    })
    menuElement.innerHTML = html
 })
    // console.log(data)
    .catch(err => console.error(err))