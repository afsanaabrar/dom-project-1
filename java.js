
const tt=document.getElementById('id')
tt.addEventListener('click',function(){
    const tp=document.getElementById('h3')
    tp.style.color=main()
    tp.style.fontSize='30px'
    document.body.style.backgroundColor=main()
})


function main(){
    // const tt=document.getElementById('h3')
 const red= Math.floor(Math.random()*255)
 const green=Math.floor(Math.random()*255)
 const blue=Math.floor(Math.random()*255)
 return `rgb(${red},${green},${blue})`
}

// add btn class in button

tt.classList.add('btn')

