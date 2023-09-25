function score(){
    document.getElementById("first").innerText =
    Number(document.getElementById("one").value) + Number(document.getElementById("two").value) + Number(document.getElementById("three").value)


    document.getElementById("sec").innerText =
    Number(document.getElementById("four").value) + Number(document.getElementById("five").value) + Number(document.getElementById("six").value)


    document.getElementById("third").innerText =
    Number(document.getElementById("seven").value) + Number(document.getElementById("eight").value) + Number(document.getElementById("nine").value)

document.getElementById("forth").innerHTML =
Number(document.getElementById("ten").value)+Number(document.getElementById("eleven").value)+Number(document.getElementById("twelve").value)
}

function average(){
     document.getElementById("average").innerHTML = 
     (Number(document.getElementById("first").innerText) + 
      Number(document.getElementById("sec").innerText)   + 
      Number(document.getElementById("third").innerText) + 
      Number(document.getElementById("forth").innerHTML)) /4
}

function grade(){
  var b = (Number(document.getElementById("first").innerText) + Number(document.getElementById("sec").innerText) + Number(document.getElementById("third").innerText) + Number(document.getElementById("forth").innerHTML)) / 4
if   (b <= 34 ){
   document.getElementById("grade").innerHTML= "f9";
}else if( b > 34 && b <= 49){
    document.getElementById("grade").innerText= "c3";
}else if(b > 49 && b <= 69){
  document.getElementById("grade").innerText= "B2";
}
else if (b > 69 && b <= 100) {
  document.getElementById("grade").innerHTML = "A1";
  
}
}



// function remark(){
//     if (document.getElementById('average').innerHTML >= 60){
//      document.getElementById("remark").innerHTML = " Congratulation " +
//      document.getElementById("inp").value + " you passed."
//     }

//   else if(document.getElementById("average").innerHTML  >=50){
//     document.getElementById("remark").innerHTML = " Congratulation " +
//      document.getElementById(" inp").value + " you tired."
//   }

//   else 
//       document.getElementById("remark").innerHTML = " Sorry " +
//      document.getElementById("inp").value + " you failed." 
// }

function remark(){
  if (document.getElementById('grade').innerHTML == "f9") {
    document.getElementById("remark").innerHTML = " sorry " +
          document.getElementById("inp").value + " you failed."
         }

  else if (document.getElementById('grade').innerHTML == "c3") {
    document.getElementById("remark").innerHTML = " Congratulation " +
          document.getElementById("inp").value + " you passed."
         }

  else if (document.getElementById('grade').innerHTML == "B2") {
    document.getElementById("remark").innerHTML = " Congratulation " +
          document.getElementById("inp").value + " you PASSED."
          }
  
        else if (document.getElementById('grade').innerHTML == "A1") {
            document.getElementById("remark").innerHTML = " CONGRATULATIONS " +
                  document.getElementById("inp").value + " YOU PASSED."
                 }
          }


