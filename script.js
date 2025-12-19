const button=document.getElementById("userbutton");
const display=document.getElementById("display");
const image=document.getElementById("imagecontainer");
const input=document.getElementById("user");

function generateImage(){
    let text=input.value;
    display.textContent="you typed"+" "+text;
    if(text.toLowerCase()==="cat"){
        image.innerHTML="<img src='cat.webp' width='600'>";
    }
    else if(text.toLowerCase()==="dog"){
        image.innerHTML="<img src='dog.avif' width='600'>";
    }
    else{
        image.innerHTML="invalid text";
    }
}


button.addEventListener("click",async function(){
    //generateImage();
    let text = input.value;
    console.log("✅ Button clicked, input =", text);
    display.textContent = "You typed: " + text;


    const response = await fetch("https://api.openai.com/v1/images/generations", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Authorization": "Bearer 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"
     },
     body: JSON.stringify({
       model: "gpt-image-1",
       prompt: text,
       size: "512x512"
     })
   });
   const data = await response.json();
      console.log("Full api response:", data);

      // Extract image URL from response
      const imageUrl = data.data[0].url;

      // Show image
      image.innerHTML = `<img src="${imageUrl}" width="300">`;

      
    });




