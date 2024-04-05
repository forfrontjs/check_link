let ul = document.querySelector('ul')
let btn = document.querySelector('button')
let inp = document.querySelector('input')

let arr = []
let showlink=()=>{
    ul.innerHTML = ''
    arr.forEach((el)=>{
        if(el.startsWith('https://www.')){
            ul.innerHTML += `<li>${el.slice(el.indexOf('.')+1, el.indexOf('.com'))}</li>`
        }
        else if(el.startsWith('https://')){
            ul.innerHTML += `<li>${el.slice(el.indexOf('/')+2, el.indexOf('.'))}</li>`
        }
    })


}
btn.addEventListener('click', ()=>{
    if(!inp.value.startsWith('https') || !inp.value.startsWith('http')){
        alert('link is not correct')
    }
    arr = [...arr,inp.value]
    inp.value = ''
    showlink()
})

