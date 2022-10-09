


function login(){
event.preventDefault();
  
     let data={
         "email":document.getElementById("email").value ,
         "password": document.getElementById("password").value
        
     }
    
     document.getElementById("email").value='';
     document.getElementById("password").value='';
   
     fetch('http://localhost:9999/user/login',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then(res=>{  
      console.log(res.status);    
      return res.json()
    })
    .then(data=>{Check(data)})
    .catch(error => console.log(error)
    );
 }
 let logins=document.getElementById("login")
 logins.addEventListener("submit",()=>{
  login();
 });

 function Check(dat){
  console.log(dat)
  if(dat.status){
  let myalert= document.getElementById("myalert");
  myalert.innerText=dat.status;
}
else{
  myalert.innerText="Successfully loged in"
}
  myalert.style=" visibility: visible;"
  setTimeout(()=>{
    myalert.style=" visibility: hidden;"
  },5000);

 }