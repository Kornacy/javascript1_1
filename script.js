(function () {
  
  document.getElementById("ex1_button").addEventListener("click", function () {
    var tab=[];
    for(let i = 0; i < 10;i++){
    tab.push(i);
    }
    document.getElementById("ex1_content").innerHTML = tab;
    })
})();