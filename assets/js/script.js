// document.querySelector('.form-container input[type="submit"]').addEventListener('click',()=>{
//   const input = document.querySelector('.form-container input[type="text"]');
//   if(input.value !== ""){
//     const value = input.value;
//     input.value = "";
//     // on fait la requète
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//       if (this.readyState == 4 && this.status == 200 ){
//
//       }
//     };
//     xhttp.open("GET", "http://192.168.33.12:8080", true);
//     xhttp.send();
//   }
// })


document.querySelector('.choice-container').addEventListener('click',(el)=>{
  if(el.target.dataset.action !== undefined){
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
          if (this.readyState == 4 && this.status == 200 ){
          console.log(this.responseText);
          }
        };
        xhttp.open("GET", "http://192.168.33.12:8080/move/" + el.target.dataset.action, true);
        xhttp.send();
  }
})
