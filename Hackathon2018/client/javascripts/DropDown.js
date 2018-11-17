/* when the user clicks on the button, 
toggle between hiding and showing the dropdown content*/
function buttonClick(e){
    document.getElementById(e.parentElement.children[1].id).classList.toggle("show");
}

//Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')){

        var dropdowns = document.getElementsByClassName("dropdown-content");

        for(var i =0;i<dropdowns.length;i++){

            var openDropdown = dropdowns[i];

            if(openDropdown.classList.contains('show')){

                openDropdown.classList.remove('show');
            }
        }
    }
}