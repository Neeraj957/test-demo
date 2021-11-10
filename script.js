//step 01 :create XHR object/constructor
 var req=new XMLHttpRequest();
 //step 02:open a connection
 req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
 //step 03:initiate a connection
 req.send();
 //step 04:once the data loaded from the server succeffully

req.onload=function(){
//here we are converting
var result=JSON.parse(req.response);

for (i=0; i<result.length; i++){
    console.log(result[i].capital + " is the capital of " + result[i].name);

}
}