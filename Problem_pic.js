


const image_input = document.querySelector('#image_input');
var uploaded_image = "";


image_input.addEventListener("change", function(){
    // console.log(image_input.value); 
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector(".display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})


const tbuser = document.getElementById("tbuser");
const tbuser_1 = document.getElementById("tbuser_1");
const tbtn_1 = document.getElementById("tbtn_1");
const out1 = document.getElementById("output-1");

function lan(){
    out1.innerHTML = tbuser.value + tbuser_1.value;
    // out1.innerHTML = tbuser_1.value;
}

tbtn_1.addEventListener('click',lan);   


