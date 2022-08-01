let selectedColor = 'white'
let colorChoice= document.querySelectorAll('.color-choice')
for (let i=0; i<colorChoice.length; i++){
    colorChoice[i].addEventListener ('click', function(){
        selectedColor = colorChoice[i].id
    })
}

const painting = document.querySelector('.painting')
painting.addEventListener ('click', function(e){
    e.target.style.backgroundColor = selectedColor
})
