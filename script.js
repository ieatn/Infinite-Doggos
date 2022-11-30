const btn = document.getElementById('btn')
const img = document.getElementById('img')

btn.addEventListener('click', getDog)

async function getDog() {
    const res = await fetch('https://random.dog/woof.json')
    const data = await res.json()
    if (data.url.includes('.mp4')) {
        getDog()
    } else {
        img.innerHTML = `<img src="${data.url}" alt="" />`
    }
}
