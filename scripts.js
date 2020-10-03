const counter = document.querySelector(".counterButton");

// 👇🏻 مكان النقاط count قم بتعيين القيمة صفر إلى المتغير
let count = 6

counter.addEventListener("click", incrementCounter);

/******************************************************
 *  هي أداة تقوم بتكرار الكود الذي incrementCounter()  *
 *  تكتبه داخلها كلما ضغطت على الزر                    *
 ******************************************************/

function incrementCounter() {
  // 👇🏻 بواحد مكان النقاط count قم بزيادة قيمة
  count+1
  counter.innerHTML = count;
  // "تسوي 1 اطبع "جيد count إن كانت قيمة العداد أو
  if (count == 1) {
    document.getElementById("status").innerHTML = "جيد";
  }
  else if (count > 6 && count < 1){
    document.getElementById("status").innerHTML = " جيد جدا"
  } 
  else if (count >= 6){
    document.getElementById("status").innerHTML = "رائع"
  }
  // "أكبر من 1 وأقل من 6 اطبع "جيد جداً count إن كانت قيمة العداد أو
  // "أكبر من أو تساوي 6 اطبع "رائع count إن كانت قيمة العداد أو
}
