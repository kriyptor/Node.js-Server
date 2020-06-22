//==================URL node core module==================//

const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

///Host (root domain)
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Add param
myUrl.searchParams.append('ABC', '2798');
console.log(myUrl.searchParams);
//Serialized URL
console.log(myUrl.href);

//Loop through param
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));