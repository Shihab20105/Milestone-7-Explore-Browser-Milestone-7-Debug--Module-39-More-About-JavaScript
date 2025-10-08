/*                      39-8 Error Handling try, catch, throw and finally */

/*
function checkAge(){
    console.log('button clicked');
}




function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    console.log(Bibaria);
    console.log(111111);
    try{

    }
    catch(err){
        console.log('ERROR:', err);
    }
}

Debug console Output:
> Uncaught ReferenceError: Bibaria is not defined                             try-catch.js:14
    at checkAge (try-catch.js:14:17)
    at HTMLButtonElement.onclick (index.html:58:64)







function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    console.log(Bibaria);
    
    try{

    }
    catch(err){
        console.log('ERROR:', err);
    }
    console.log(111111);
}

Debug Console Output:
> Uncaught ReferenceError: Bibaria is not defined                             try-catch.js:38
    at checkAge (try-catch.js:38:17)
    at HTMLButtonElement.onclick (index.html:58:64)
    






function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    try{
        console.log(Bibaria);
    }
    catch(err){
        console.log('ERROR:', err);
    }
    console.log(111111);
}



Debug console Output:
ERROR: ReferenceError: Bibaria is not defined                                 try-catch.js:67
    at checkAge (try-catch.js:64:21)
    at HTMLButtonElement.onclick (index.html:58:64)
111111                                                                        try-catch.js:69
>







function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        console.log(Bibaria);
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'Something wrong';
    }
    finally{
        console.log('All done inside try catch');
    }
    console.log(111111);
}








function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        // console.log(Bibaria);
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'Something wrong';
    }
    finally{
        console.log('All done inside try catch');
    }
    console.log(111111);
}
    







function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        const age = parseInt(ageText)

        if (isNaN(age)){
            console.log('Age not found', age, ageText);
        }
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'Something wrong';
    }
    finally{
        console.log('All done inside try catch');
    }
    console.log(111111);
}
    







function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
        const age = parseInt(ageText)

        if (isNaN(age)){
            throw "Please enter a valid number";
        }
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'Something wrong';
    }
    finally{
        console.log('All done inside try catch');
    }
    console.log(111111);
}
    */







function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try{
        const age = parseInt(ageText);

        if(isNaN(age)){
            throw "Please enter a valid number";
        }
        else if(age < 18){
            throw "Children are not allowed";
        }
        else if(age > 30){
            throw "Elders are not need to come here";
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log('ERROR:', err)
        errorTag.innerHTML = 'ERROR:' + err;
    }
    finally{
        console.log('All done inside try catch');
    }
    console.log(111111);
}