
  function resetForm(){
    document.getElementById("topText").value="";
    document.getElementById("bottomText").value="";
    document.getElementById("imageURL").value="";
  }
  function removeMeme(event){
    var resultClass = document.getElementById("main");
    resultClass.removeChild(event.target.parentNode.parentNode);
}
  function display(event){
    event.preventDefault();
    console.log("hi");
    var firstTxt = document.getElementById("topText").value;
    var lastTxt = document.getElementById("bottomText").value;
    var url = document.getElementById("imageURL").value;
    
    var resultClass = document.getElementById("main");
   
    var newImage = document.createElement("img");
    var newText1 = document.createElement("p");
    var newText2 = document.createElement("p");
    var removeBtn = document.createElement("button");
    var removeText = document.createElement("p");
    
    newImage.src = url;
    newImage.setAttribute("class", "img-thumbnail");
    
    newText1.innerHTML =  firstTxt;
    newText1.setAttribute("class", "nText1");
    newText2.innerHTML = lastTxt;
    newText2.setAttribute("class", "nText2")
    
    removeBtn.setAttribute("class", "remove");
    removeBtn.setAttribute("onClick", "removeMeme(event)");
    removeText.innerHTML = "Remove Meme"
    removeBtn.appendChild(removeText);

    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "result")
    newDiv.appendChild(newImage);
    newDiv.appendChild(newText1);
    newDiv.appendChild(newText2);
    newDiv.appendChild(removeBtn);

    resultClass.appendChild(newDiv);  
    resetForm();
  }

  var doc = document.getElementById("myForm");
  if(doc){
    doc.addEventListener("submit", display);
    
  
}
  