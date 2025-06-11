/* document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addedAmount = document.getElementById('added-amount').value ;
    const pinForAddedAmount = document.getElementById('add-money-pin').value;
    if(pinForAddedAmount === '1234'){
        // console.log('add money');
        const existingAmount = document.getElementById('existing-amount').innerText;
        const updatedAmount = parseInt(addedAmount) + parseInt(existingAmount);
        console.log(updatedAmount);
       document.getElementById('existing-amount').innerText = updatedAmount

    }else{
        alert ('your user or pincode is wrong')
    }
}) */


    // document.getElementById('add-money-btn').addEventListener('click', function(event){
    //     event.preventDefault();
    //     // console.log('add money button clicked');
    //     // getInputFieldValurById() /* here i just call the function from the utilities.js file */
    //     // const addMoney =  getInputFieldValurById()
    //     // console.log('add money value' ,addMoney);
    //     // const addedAmount = document.getElementById('added-amount').value ;
    //     // const addedAmountNumber = parseFloat(addedAmount)
    //     const addMoney = getInputFieldValueById('added-amount-id')
    //     const addMoneyPinNumber = getInputFieldValueById ('add-money-pin')
    //     console.log('add money with parameter', addMoney, addMoneyPinNumber);
    // })