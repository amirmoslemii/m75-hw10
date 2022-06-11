// https://dmitripavlutin.com/javascript-promises-then-vs-then-catch/


//اگر پرامیس با موفقیت اجرا بشه هر دو مانند هم اجرا میشوند
Promise.resolve("Hi!").then(success, error);
// log 'Resolved: Hi!'
Promise.resolve("Hi!").then(success).catch(error);
// log 'Resolved: Hi!'
function success(value) {
    console.log("Resolved: ", value);
}
function error(err) {
    console.log("Error: ", err);
}


// اما اگر پرامیس ما ریجکت شود
Promise.resolve("Zzz!").then(rejectSuccess, error);
// Logs 'Invalid success: Zzzzz!'

Promise.resolve("Zzz!").then(rejectSuccess).catch(error);
// Logs 'Invalid success: Zzzzz!'
// Logs 'Error: Invalid!'

function rejectSuccess(invalidValue) {
    console.log("Invalid success: ", invalidValue);
    return Promise.reject("Invalid!");
}
function error(err) {
    console.log("Error: ", err);
}
