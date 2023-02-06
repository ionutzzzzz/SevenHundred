// Accordion 
function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  // Click on the "Jeans" link on page load to open the accordion for demo purposes
  document.getElementById("myBtn").click();
  
  var k = 0;
  function call(){
    k++;
    if(k % 2 == 0)
    {
      w3_close();
    }
    else
    {
      w3_open();
    }
  }

  // Open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    // document.getElementById("navbarToggleExternalContent9").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("navbarToggleExternalContent9").style.display = "none";
  }

  document.querySelector('.first-button').addEventListener('click', function () {
    document.querySelector('.animated-icon1').classList.toggle('open');
  });
