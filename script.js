window.onload = function() {

    const btn = document.getElementById("mybtn");
    const text = document.getElementById("demo");
    
    const btn1 = document.getElementById("mybtn1");
    const text1 = document.getElementById("demo1");

    document.getElementById("mybtn").onclick = function() {
        document.getElementById("demo").innerHTML='Content Changed through InnerHtml Property';
    };

    document.getElementById("mybtn1").onclick=function() {
        document.getElementById("demo1").innerHTML='Hello Jithu From Brave Browser';
    };


    btn.onclick = function() {
        if(text.style.display === "none"){
            text.style.display = "block";
        } else {
            text.style.block = "none";
        }
    };


    btn1.onclick = function() {
        if(text1.style.display === "none"){
            text1.style.display = "block";
        } else {
            text1.style.display = "none";
        }
    }

    document.getElementById("txt").innerHTML="This is p tag";

};

document.getElementById("btn2").onclick = function() {
    alert("Hello from External javascript!");
}

