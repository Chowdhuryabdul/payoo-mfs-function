document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    const addedAmount = getInputValueById('added-amount-id')
    const addMoneyPin = getInputValueById('add-money-pin')
    // console.log('add money', addedAmount, addMoneyPin);
    if(isNaN(addedAmount)){
        alert ('failed to add money')
        return /* - it means the function will stop here */
    }
    if(addMoneyPin === 1234){
    //    const existingAMount = document.getElementById('existing-amount').innerText    
    const existingBalance = getTextFieldById('existing-amount')
    const updatedAmount = existingBalance + addedAmount
    // console.log(updatedAmount);
    document.getElementById('existing-amount').innerText = updatedAmount
    // add to transaction section 
        const p = document.createElement('p')
        p.innerText = `Added: ${addedAmount} Tk. New Balance: ${updatedAmount}`
        console.log(p);

        // should be a common function 
        document.getElementById('transaction-container').appendChild(p)
    }else{
        alert ('your user or pin number is incorrect')
    }
})