window.onload = () => {
   let btns =  document.getElementsByClassName('proofRegi__Btns__box');
   btns = Array.from(btns);

   console.log(btns);

   btns.forEach(element => {
       element.onclick = () => {
           location.href = 'bankInputRegi.html'
       }
   });
}