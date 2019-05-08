// function declaration
function formatName(params) {
    
}

// add 2 params
function formatName(firstName, lastName) {
    console.log(firstName);
    console.log(lastName);

// console.log(lastName + ' ' + firstName);
// save to server or send back to where function is being called
// return lastName + ' ' + firstName;

    var formattedName= lastName + ' ' + firstName;

// check to see if name is in local already if yes then dont override, if not save

    console.log(localStorage.getItem('userFullName'));
    if (!localStorage.get('userFullName')){
    localStorage.setItem('userFullName', formattedName);
    return formattedName;
    }

}// params b/c waiting for values

var userFirstName = 'Emily';
var userLastName = 'Fielding';

// name(userFirstName, userLastName); // arguments b/c these hold values
// name(userLastName, userFirstName);
// console.log(userLastName, userFirstName);



// function expression
var createUserObj = function(firstName, lastName) {
    var userObj = {
        name: formatName(firstName, lastName),
        age: null
    };

    return userObj; 
}(userFirstName, userLastName); // last set of () to evaluate function expression imediately after creation

// console.log(createUserObj);


// constructor way not commonly used. ususaly for one line that needs to be called right away

var concatenate = new Function('x', 'y', 'return x + y');
// console.log(concatenate('Emily', 'Fielding'));



