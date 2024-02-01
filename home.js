let a=document.getElementById('signup')
let b=document.getElementById('mycontainer')
let c=document.getElementById('signin')

a.addEventListener('click',()=>{
    b.classList.add('active')
})

c.addEventListener('click',myfn)

function myfn(){
    b.classList.remove('active')
}