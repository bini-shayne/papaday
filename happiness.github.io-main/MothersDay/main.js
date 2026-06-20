onload = () =>{
    const startScreen = document.getElementById("start-screen");
    const bgMusic = document.getElementById("bgMusic");

    bgMusic.play().then(() => {
        startScreen.style.display = "none";
        document.body.classList.remove("container");
    }).catch(() => {
        startScreen.addEventListener("click", () => {
            bgMusic.play();
            startScreen.style.opacity = "0"; 
            setTimeout(() => startScreen.style.display = "none", 800); 
            document.body.classList.remove("container"); 
        });
    });
};

function showLetter(content) {
    const modal = document.getElementById("letter-modal");
    const text = document.getElementById("letter-text");
    const image = document.getElementById("letter-image");
    
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(content);
    
    if (isImage) {
        text.style.display = "none";
        image.src = content;
        image.style.display = "block";
    } else {
        text.style.display = "block";
        text.innerText = content;
        image.style.display = "none";
    }
    modal.style.display = "flex";
}

function closeLetter() {
    const modal = document.getElementById("letter-modal");
    modal.style.display = "none";
}
