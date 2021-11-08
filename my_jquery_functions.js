let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
}


$(document).ready(function(){
    //  When user clicks on tab, this code will be executed
    $("#nav-list li").click(function() {
        //  First remove class "active" from currently active tab
        $("#nav-list li").removeClass('active');

        //  Now add class "active" to the selected/clicked tab
        $(this).addClass("active");

        //  Hide all tab content
        $(".tabcontent").hide();

        //  Here we get the href value of the selected tab
        var selected_tab = $(this).find("a").attr("href");

        //  Show the selected tab content
        $(selected_tab).fadeIn();

        //  At the end, we add return false so that the click on the link is not executed
        return false;
    });
});