$(document).ready(function(){
  // $('#hidden-nav').hide();

  $('#menu-toggle').click(function(){
    // $('#hidden-nav').show();
    document.getElementById("hidden-nav").style.width = "100%";
  });

  // menu animation
  $('#nav-container').on('click', function(){
    this.classList.toggle("change");
    $('#hidden-nav').show();

  });

  $('#closebtn').click(function(){

    document.getElementById("hidden-nav").style.width = "0%";
    $('#nav-container')[0].classList.remove("change");
    // $('#hidden-nav').hide();
  });


  var replays = document.getElementsByClassName('replay-btn');

  $('#replay-btn').hide();

  var videoEnded = document.getElementById('cinemagraph').onended;

  if (videoEnded){
    $('#replay-btn').show();
    console.log('shown');
  };



  $('#trans-btn').on('click', function(){

    this.classList.toggle("spanish");

    if (this.classList.value.includes("spanish")){
      this.innerHTML = "ES";
    } else {
      this.innerHTML = "EN";
    }


  });


});
