const form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    
    result.innerHTML= `<span>${(weight / ((height * height) / 10000)).toFixed(2)}</span>`;

})