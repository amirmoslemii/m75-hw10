function isValidJSON(str) {
    try {
        JSON.parse(str);
        console.log('this is valid json');
    } catch (e) {
        console.log(e.name);
    }

}
isValidJSON('{"first_name":"amir","last_name":"moslemi","age":21}')