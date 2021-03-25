var userName = prompt('What is your name');
alert('welcome ' + userName);
console.log(userName);

var littleQuiz = prompt('what is 5 + 6 =');
if(littleQuiz === '11'){
    alert('here is extra fries for you :D')
    document.write('<img src="french-fries.jpg"/>')
}
    else{
        alert('no extra fries for you :x')
    }