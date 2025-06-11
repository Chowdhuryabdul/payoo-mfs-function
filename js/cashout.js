document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashedOutAmount = getInputValueById('cash-out-id');
    const chasedOutPin = getInputValueById('cash-out-pin');
    // console.log(chasedOutPin, cashedOutAmount);

    if(isNaN(cashedOutAmount)){
        alert ('Failed to cash out')
        return
    }
    if(chasedOutPin === 1234){
        const existingAmount = getTextFieldById('existing-amount');
        const updatedAmount = existingAmount - cashedOutAmount;
        // console.log(updatedAmount);
        document.getElementById('existing-amount').innerText = updatedAmount
        // add to transaction history 
        /* const p = document.createElement('p')
        p.innerText = `Withdrawn Amount: ${cashedOutAmount} Tk. Remaining Balance: ${updatedAmount}`;
        document.getElementById('transaction-container').appendChild(p)
        console.log(p); */
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300')
        div.innerHTML = `
        <h4 class= "text-2xl font-bold">Cash Out</h4>
        <p>${cashedOutAmount} withdrawn. New Balance ${updatedAmount}</p>
        `
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert ('Your account or pin code is wrong')
    }
})