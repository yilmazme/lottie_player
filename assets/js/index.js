const myForm = document.getElementById("myForm");
const player = document.getElementById("player");

myForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = new FormData(myForm)

  for(let pair of formData) {
    console.log(`${pair[0]} : ${pair[1]}`);
  }
//   e.preventDefault();

//   let response = await fetch(url, {
//     method: 'POST',
//     body: formData
//   });

//   let result = await response.json();

});


window.addEventListener("dblclick", async (e)=>{
    
    // e.preventDefault();
    let lottiePlayer = document.getElementById("lottie-player");
    lottiePlayer.remove();
    let newPlayer = document.createElement("lottie-player")
    
    attributeArray.forEach(element => {
        newPlayer.setAttribute(element.name, element.value)
    });

    player.appendChild(newPlayer);
})


let attributeArray = [
    {
        name: "id",
        value: "lottie-player"
    },
    {
        name: "src",
        value: "assets/data/data.json"
    },
    {
        name: "background",
        value: "transparent"
    },
    {
        name: "speed",
        value: 1
    },
    {
        name: "style",
        value: "width: 400px; height: 400px; margin: auto; padding: 1rem;"
    },
    {
        name: "loop",
        value: ""
    },
    {
        name: "controls",
        value: ""
    },
    {
        name: "autoplay",
        value: ""
    },
]