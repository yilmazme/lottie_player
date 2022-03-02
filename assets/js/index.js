const myForm = document.getElementById("myForm");
const player = document.getElementById("player");



myForm.addEventListener("submit", (e) => {

  e.preventDefault();
  const data = {
     text1 : document.querySelector("#text1").value.toUpperCase(),
     text2 : document.querySelector("#text2").value.toUpperCase(),
     text3 : document.querySelector("#text3").value.toUpperCase(),
     text4 : document.querySelector("#text4").value.toUpperCase(),
     text5 : document.querySelector("#text5").value.toUpperCase(),
     text6 : document.querySelector("#text6").value.toUpperCase(),
  };

  fetch("https://api-thor.leadport.app/api/Sip/changeVideo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(data => {
        changeVideo(JSON.stringify(data))
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// for onload

window.addEventListener("load", ()=>{
    const data = {
        text1 : document.querySelector("#text1").value,
        text2 : document.querySelector("#text2").value,
        text3 : document.querySelector("#text3").value,
        text4 : document.querySelector("#text4").value,
        text5 : document.querySelector("#text5").value,
        text6 : document.querySelector("#text6").value,
      };
    
      fetch("https://api-thor.leadport.app/api/Sip/changeVideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(data => {
            changeVideo(JSON.stringify(data))
        })
        .catch((error) => {
          console.error("Error:", error);
        });

})

function changeVideo(url){

    let attributeArray = [
        {
          name: "id",
          value: "lottie-player",
        },
        {
          name: "src",
          value: url,
        },
        {
          name: "background",
          value: "transparent",
        },
        {
          name: "speed",
          value: 1,
        },
        {
          name: "style",
          value: "width: 600px; height: 800px; margin: auto; ",
        },
        {
          name: "loop",
          value: "",
        },
        {
          name: "controls",
          value: "",
        },
        {
          name: "autoplay",
          value: "",
        },
      ];

    let lottiePlayer = document.getElementById("lottie-player");
    lottiePlayer.remove();
    let newPlayer = document.createElement("lottie-player");
  
    attributeArray.forEach((element) => {
      newPlayer.setAttribute(element.name, element.value);
    });
  
    player.appendChild(newPlayer);
}


