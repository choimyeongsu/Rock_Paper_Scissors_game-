var img=document.getElementById("img");
var imgArray= new Array();
imgArray[0]="paper.png";
imgArray[1]="rock.png";
imgArray[2]="scissors.png";


function showImage()
{
    img.src=imgArray[0];    
}
function showImage2()
{
    img.src=imgArray[1];
}
function showImage3()
{
    img.src=imgArray[2];
}


const imagetime = setInterval(()=>{
    img.src=imgArray[0]; 
    img.src=imgArray[1];
    img.src=imgArray[2];
},3000);

//showImage();
console.log(imgArray);