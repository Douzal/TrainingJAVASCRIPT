function initComportementPage() {

    var zpm = document.querySelectorAll('.plusMoins')[0];
    // console.log(zpm);
    zpm.addEventListener('click', function() {
    
        // var body = document.getElementsByTagName('body')[0];
        var hide = document.querySelector(".hide");
        var hide2 = document.querySelectorAll(".hide")[0];

        if(hide.style.display == 'none') {
            hide.style.display ='block';
        } else {
            hide.style.display = 'none';
        }
    });

    zpm.addEventListener('click', function() {
        // changer le logo
        if(zpm.innerHTML== "[---]") {
            zpm.innerHTML="[+++]";
        } else {
            zpm.innerHTML="[---]";
        }
    });
}