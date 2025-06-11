// in this page we will common and shared function which will be used in all other pages 

// console.log('utilities will be added');
// function getInputFieldValurById(){
//     console.log('we will get value by id');
//     const addMoney = document.getElementById('added-amount').value;
//     return addMoney; /* we are sending this one in the add-addMoney.js file where we will call this function */
// }

function getInputFieldValurById(id){ /* by this id paremeter we are telling him what to bring and we can call differetn id by this parameter */
    const inputValue = document.getElementById(id).value 
    return inputValue;
}
