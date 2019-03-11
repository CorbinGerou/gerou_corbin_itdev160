(function () {
var user ="Professor Hunsicker";
var salutation ="Hello, ";
var greeting=(salutation+user);

document.getElementById('greeting');
document.writeln(greeting);
}());

(function () {
var price='1299';
var studentDiscount='.20';
var studentPrice=price-(price*studentDiscount);

document.getElementById('student-price');
document.writeln(studentPrice);
}());
