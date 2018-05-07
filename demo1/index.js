$("document").ready(function() {
    console.log("hello");
    let selectedHeights = [167,306,237,214,99];
        $("dl").on('click',function(e){
            
            var dls = $('div dl')
            let index = $('div dl').index(e.currentTarget)
            
            var dd = $(".item"+(index+1))[0];
            if (e.currentTarget.style.height === "31px") {
                e.currentTarget.style.height = selectedHeights[index]+"px";
                e.currentTarget.style.backgroundColor = "green";
                dd.style.visibility = "visible";
            }else {
                e.currentTarget.style.height = "31px";
                dd.style.visibility = "hidden";
                e.currentTarget.style.backgroundColor = "greenyellow";
            }
        })
        $(".current").on("mouseenter",function(e) {
            console.log("hello"+e)
        })
})