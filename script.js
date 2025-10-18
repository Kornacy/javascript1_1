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
      var regex2 = /[^0-9]/;
      if (regex.test(phone)) {
          document.getElementById("ex2_content").textContent = "Numer nie może zawierać liter";
      }
      else if (regex2.test(phone)) {
        document.getElementById("ex2_content").textContent = "Numer nie może zawierać znaków specjalnych";
      }
      else if (phone.length != 9) {
        document.getElementById("ex2_content").textContent = "Długość numeru musi być równa 9";
      }
      else {
        document.getElementById("ex2_content").textContent = "Numer telefonu jest poprawny";
      }
    })
})();