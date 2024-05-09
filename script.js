   // Display each num
   function display(num){
    result.value += num;
}

// Cl / clearing the value to default
function clearAll(){
    result.value =""
}

function del(){
    result.value = result.value.slice(0,-1)
}

function equal(){
    try {
        result.value = eval(result.value)
    } catch (error) {
       result.value = 'Error'
       setTimeout(() => {
            clearAll();
       }, 1000); 
    }
    
}