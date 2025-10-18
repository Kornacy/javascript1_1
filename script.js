(function () {
  //1_1.1
  document.getElementById("ex1_button").addEventListener("click", function () {
    var tab=[];
    for(let i = 0; i < 10;i++){
    tab.push(i);
    }
    document.getElementById("ex1_content").textContent = tab;
    })
  //1_1.2
  document.getElementById("ex2_text").addEventListener("input", function ()
    {
      var phone = document.getElementById("ex2_text").value; 
      var regex = /[a-zA-Z]/;
      var regex2 = /[\W]/;;
      if (phone.length != 9) {
        document.getElementById("ex2_content").innerHTML = "Długość numeru musi być równa 9";
      }
      else if (regex.test(phone)) {
          document.getElementById("ex2_content").innerHTML = "Numer nie może zawierać liter";
      }
      else if (regex2.test(phone)) {
        document.getElementById("ex2_content").innerHTML = "Numer nie może zawierać znaków specjalnych";
      }
      else {
        document.getElementById("ex2_content").innerHTML = "Numer telefonu jest poprawny";
      }
    })
})();