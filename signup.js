

  document.getElementById("signup").addEventListener("submit",()=>{
    signup();
  });
function signup(){
  event.preventDefault();
  const mobile=document.getElementById("mobile").value;
  const email=document.getElementById("email").value;
  const name=document.getElementById("name").value;
  const password=document.getElementById("password").value;
 if(mobile.length!=10){
  Check("Number must be 10 digits");
  return;
 }
 if(password.length<5||password.length>10){
  Check("Password must be in 5 to 10 charcters");
  return;
 } 
 let data={
        "email":email ,
        "name":  name,
        "password":password ,
        "mobile":mobile
    }
    console.log(data);
    document.getElementById("email").value ='';
    document.getElementById("name").value ='';
    document.getElementById("password").value ='';
    document.getElementById("mobile").value ='';
    fetch('http://localhost:9999/user/signup',{
     method:'POST',
     headers:{
         'Content-Type':'application/json'
     },
     body:JSON.stringify(data)
   }).then(res=>{
     return res.json()
   })
   .then(data=> { window.location.href="Login.html" ;})
   .catch(error => console.log(error));

}




   
   
function Check(dat){
  let myalert= document.getElementById("myalert");
  myalert.innerText=dat;
  myalert.style=" visibility: visible;"
  setTimeout(()=>{
    myalert.style=" visibility: hidden;"
  },5000);
  
 }