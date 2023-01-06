
const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // Clear results
    results.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}"
        `
    })
}