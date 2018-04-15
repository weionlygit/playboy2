window.onload=function(){
    /**
     * 导航按钮的点击显示与隐藏
     * @type {HTMLElement | null}
     */
    var clickNav =document.getElementById("nav");
    var showNavpage =document.getElementById("nav-page");

    clickNav.onclick=function(){
        // showNavpage.className="nav-page show";

        if(showNavpage.className==="nav-page hide"){
            showNavpage.className="nav-page show";
        }
        else{
            //赋值与判断不一样
            showNavpage.className="nav-page hide";
        }

    }


}