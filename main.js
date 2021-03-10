var yearBirth;

function age()
{
    yearBirth = prompt('Your year birth:')
    var yourAge = 2021 -yearBirth;
    console.log('Your age: ' + yourAge);
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('Your age: ' + yourAge);
    h1.setAttribute("id","out-put");
    h1.appendChild(answer);
    document.getElementById("result-box").innerHTML = '';
    document.getElementById('result-box').appendChild(h1);
}
function reset()
{
    document.getElementById("result-box").innerHTML = '';
}

