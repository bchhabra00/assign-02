// Initialize Firebase

var config = {
  apiKey: "AIzaSyCY1fniDnvUa_zFhIESQQmJpT_JzYPGqEE",
  authDomain: "assignment-edaac.firebaseapp.com",
  databaseURL: "https://assignment-edaac.firebaseio.com",
  projectId: "assignment-edaac",
  storageBucket: "assignment-edaac.appspot.com",
  messagingSenderId: "133757080930"
};
firebase.initializeApp(config);


var ref = firebase.database().ref('1st submission').child('users');

document.getElementById('button').addEventListener('click',function(event){
event.preventDefault();
var name = returnvalue('name');
var email= returnvalue('email');
var phoneno = returnvalue('phone');
var comment = returnvalue('comment');
set(name,email,phoneno,comment);

clear();
console.log(name);

});

function set(name,email,phoneno,comment){

 var newref = ref.push();
 newref.set({

   name:name,
   email:email,
   phoneno:phoneno,
   comment:comment,
 })
}

function returnvalue(id){

 return document.getElementById(id).value;
}

function clear(){

 document.getElementById('name').value = '';
 document.getElementById('email').value = '';
 document.getElementById('phone').value = '';
 document.getElementById('comment').value = '';
}




// write data ends here


// read starts here
 document.getElementById('load').addEventListener('click',read);
  //  alert("hello");


function read(){
   ref.on('value',function(data){

       var a = data.val();
       console.log(a);

   });
 };
// read ends here


// remove starts here
 document.getElementById('remove').addEventListener('click',remove);
function remove(){
 var ref = firebase.database().ref('1st submission');

 ref.child('users').remove();

}
// remove ends here



// upadte starts here
 document.getElementById('update').addEventListener('click',update);


function update(){

var ref = firebase.database().ref('1st submission').child('users');






var key =ref.push().key;
var update={};
update[key]={
  name:'rohit',
  email:'rohit322@gmail.com',
  phone:'604-145-5645',
  comment:'hey',
}
var conclusion = ref.update(update);

}


// update ends here