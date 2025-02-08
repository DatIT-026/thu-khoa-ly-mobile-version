music = ["sound1"];
document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random() * music.length)]}.mp3`);
