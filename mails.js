const _ = require('lodash');

const collections = [
    {}, 15, "hello@test.pl", null, ['aaa', 'bbb', 5], 'admin@gmail.com', undefined, 'a34@yahoo.com', '321@a', '321.pl'
];

function validateEmail(email) {
        let mails = email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        console.log(mails);
}

function onlyString(arr) {
    strArr = arr.toString();
    validateEmail(strArr);
}

onlyString(collections);

