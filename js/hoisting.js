//  funtions defined by declarations are hoisted to the top

funcDeclaration();

function funDeclaration() {
    console.log('im inside a function declaration');
}


//  function expressions are not hoisted they remain where definded
function funcExpression() {
    console.log('iminside a funtion expression')
}

//  so avoid confusion its best practice to use functions after they are defined