const buttonYes = document.querySelector('.b_yes')
const buttonNo = document.querySelector('.b_no')
const title = document.querySelector('.title')

buttonYes.addEventListener('click', ()=> {
    title.textContent = 'ДААААААА Я!'
})

buttonNo.addEventListener('click', () => {
    buttonNo.getElementsByClassName.display = 'none'
    title.textContent = 'Ответ негоден!'
    setTimeout(() =>{
        title.textContent = 'Ты дурак?'
    }), 2000
})