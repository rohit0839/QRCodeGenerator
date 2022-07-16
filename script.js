function genQR()
{
    var myImg = document.getElementById("img")
    var myText = document.getElementById("qrText").value;
    var mySize = document.getElementById("size").value;
    var qrAPI = "https://quickchart.io/qr?text="+myText+"&size="+mySize+"&margin=2"
    if(myText!="")
    {
        myImg.src = qrAPI
    }
    else
    {
        alert("Oh! Please enter some text :)")
    }
}