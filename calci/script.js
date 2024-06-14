
const buttons = document.querySelectorAll('button');
let dispalyresult= document.getElementById('resultDisplay')

buttons.forEach(button => {
    button.addEventListener('click',(event)=>inputs(event))
});



let allInputs="";

function inputs(event){
    
    dispalyresult.classList.remove('errorColor')
    const clickedBUttton=event.target.value
    if(clickedBUttton!=='='&& clickedBUttton!=='clear'){
        allInputs += event.target.value;
        dispalyresult.value=allInputs
    }
    else if(clickedBUttton=='clear'){
        allInputs=''
        dispalyresult.value=0
    }

    else{
        try{
        const result = math.evaluate(allInputs)
        dispalyresult.value=result
        allInputs= result
    }
    catch(error){
        err='Eroor'
        dispalyresult.value=err
        dispalyresult.classList.add('errorColor')
        allInputs=''
       throw err;
    }
    }
    
    
    console.log(allInputs)
}

