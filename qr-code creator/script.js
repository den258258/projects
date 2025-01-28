// img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;

const wrapper = document.querySelector(".wrapper"),
form = wrapper.querySelector(".form"),
input = wrapper.querySelector(".form input"),
btn = wrapper.querySelector(".form button"),
img = wrapper.querySelector(".qr-code img");
let currenValueInput;

form.addEventListener('submit', (Event) =>{
    Event.preventDefault();

    const inputValue = input.value.trim();
    if (!inputValue || inputValue === currenValueInput) return;
    currenValueInput = inputValue

    btn.textContent = "Идет сосдание,СОЗИДАЙТЕ"

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;

    img.addEventListener("load", () => {
        wrapper.classList.add("active");
        btn.textContent = "Сгенерировать код"
    })
    
    img.addEventListener("error",() => {
        alert("ошибка")
        location.reload();
    })

})

input.addEventListener('input', function() {
    if(!this.value.trim() && wrapper.classList.contains("active")){
        wrapper.classList.remove("active");
    }
})