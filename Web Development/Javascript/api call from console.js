var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I%20am%20shivendra"
undefined
fetch(url)
.then(function responseHandler(response) { return response.json() })
.then (function logJSON(json) { console.log(json)})
Promise {<pending>}
VM996:3 {success: {…}, contents: {…}}contents: {translated: "Testing,  you are", text: "I am shivendra", translation: "yoda"}success: {total: 1}[[Prototype]]: Object
