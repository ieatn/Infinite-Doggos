const btn = document.getElementById('btn')
const img = document.getElementById('img')

btn.addEventListener('click', getDog)

function getDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json()) 
        .then(data => {
            if (data.url.includes('.mp4')) {
                getDog()
            } else {
                img.innerHTML = `<img src="${data.url}" alt="" />`
            }
        })
}
