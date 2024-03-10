const toogleMenuBtn = document.getElementById('toogleMenu')
const myPage = document.querySelector('body')
const menuModal = document.querySelector('.menu')

let isOpen = false
toogleMenuBtn.addEventListener('click', ()=>{
    isOpen = !isOpen
    menuModal.classList.toggle('hidden')
    toogleMenuBtn.classList.toggle('crossIcon')
    toogleMenuBtn.src = isOpen ? 'https://imgs.search.brave.com/Ml39iQ6maqUym8cxqSlodCImz13h2fGcolkEzKpEVGQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vbWlz/Y2VsbGFuZW91cy9t/ZWRpdW0tdGhpbi1s/aW5lYXItaWNvbi9j/cm9zcy0yMy5wbmc' : "https://cdn4.iconfinder.com/data/icons/flat-black/512/menu.png"
    
})