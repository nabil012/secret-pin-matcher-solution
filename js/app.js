function modifyPin (){
    const displayPin = Math.round(Math.random()*10000)
    const displayPinString =  displayPin + ''
    if(displayPinString.length == 4){
        return displayPin
    }
    else{
      
        return modifyPin ()
    }
}
function getPin(){
const pin = modifyPin()
document.getElementById('display-pin').value = pin


}
document.getElementById('key-pad').addEventListener('click',function(event){
const numbersInput = document.getElementById('numbers-input')
const keyNumber = event.target.innerText;
if(isNaN(keyNumber)){
    if(keyNumber == 'C'){
numbersInput.value = ''
    }
}
else{
  
const numberInputInText = numbersInput.value
const newNumber = numberInputInText + keyNumber
numbersInput.value = newNumber
}
})

function submitBtn (){

    const pin  = document.getElementById('display-pin').value
    const typeNumbers = document.getElementById('numbers-input').value
    const notifySuccess = document.getElementById('notify-success')
    const notifyFail = document.getElementById('notify-failed')
    if(pin == typeNumbers){
        
        notifySuccess.style.display ='block'
        notifyFail.style.display ='none'
    }
    else{
       
        notifyFail.style.display ='block'
        notifySuccess.style.display ='none'
    }
}
