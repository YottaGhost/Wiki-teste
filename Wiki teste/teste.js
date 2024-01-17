var caminho = decodeURIComponent(window.location.search.substring(1));


function Change(id){
    var image = document.getElementById("myimage");
image.src = "image" +id+ ".jpg";
console.log(id);
console.log("image"+id+".jpg");
console.log(image.src);
console.log(caminho);
}