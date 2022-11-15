

function change(){
    var rangeRe=document.getElementById("red").value;
    var rangeGr=document.getElementById("green").value;
    var rangeBl=document.getElementById("blue").value;

    var color=`rgb(${rangeRe} , ${rangeGr} , ${rangeBl})`;
    document.body.style.backgroundColor=color
    document.getElementById("result").value = color

}