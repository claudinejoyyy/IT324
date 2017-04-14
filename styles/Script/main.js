function show() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";

    var pageW = document.getElementById('pageWrap');
    pageW.style.marginLeft = "25%";
    pageW.style.width = "75%";


    var button = document.getElementById("btn");

    button.onclick = function() {
            if (button.style.display == 'none') {
                modal.style.display = "block";
            }
            else {
                modal.style.display = "none";
                pageW.style.marginLeft = "5%";
                pageW.style.width = "100%";
            }
    }
}