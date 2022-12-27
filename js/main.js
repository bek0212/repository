let arr = ['bekzodbek','email','password','hacker']
let pas = [0000,1234,0212]

let inpemail = document.querySelector('.email')
let inpparol = document.querySelector('.parol')
let container = document.querySelector('.container')
let elbtn = document.querySelector('.btn')


container.addEventListener('click', function(){

    for(let i =0; i< arr.length; i++){
        if(inpemail.value == arr[i]){
            inpemail.classList.add('gren')
        }
    }

})
elbtn.addEventListener('click', function(){
    for(let e = 0; e< pas.length; e++){
        if(inpparol.value == pas[e]){
            inpparol.classList.add('parolcha')
        }
    }
})


function salom(){
    for(let i=0; i< arr.length; i++){
        for(let e = 0; e< pas.length; e++){
        if(inpemail.value == arr[i] && inpparol.value == pas[e]){
            alert('siz saytga kirdingiz')
        }
    }
    }

}




