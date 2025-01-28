let connectionBtn = document.querySelector('.connection_btn')
let modal = document.querySelector('.modal')
let close = document.querySelector('.modal_btn')
let price = document.getElementById('price')
let new2 = document.getElementById('new2')
let percent = document.getElementById('percent')
let years = document.getElementById('years')
let allIn = document.getElementById('allIn')
let allBtn = document.querySelector('.all_btn')
let modalCon = document.querySelector('.modal-content')
connectionBtn.addEventListener('click',formFunc)
function formFunc(){
    modal.style.display = 'block';
}

close.addEventListener('click', closeForm)
function closeForm(){
    modalCon.innerHTML = '';
    let newDiw = document.createElement('div');
    newDiw.classList.add('modalText')   
    newDiw.textContent = 'Спасибо, что выбрали нас с вами скоро свяжутся'
    modalCon.append(newDiw);
    

    setTimeout(function() {
        let modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }, 3000);
    
}


allBtn.addEventListener('click', function () {
    let effectiveLoanAmount = parseFloat(price.value) - parseFloat(new2.value) || 0;
    let monthlyInterestRate = (parseFloat(percent.value) / 12) / 100 || 0;
    let numberOfPayments = parseFloat(years.value) * 12 || 0;

    let monthlyPayment = calculateMonthlyPayment(effectiveLoanAmount, monthlyInterestRate, numberOfPayments);
    allIn.value = `${monthlyPayment}`;
});

function calculateMonthlyPayment(effectiveLoanAmount, monthlyInterestRate, numberOfPayments) {
    let monthlyPayment = 0;

    if (monthlyInterestRate > 0) {
        monthlyPayment = (effectiveLoanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    }

    return monthlyPayment.toFixed(2);
}


