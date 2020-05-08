const slidecaptions = document.querySelectorAll(".carousel-indicators li");

for (let a = 0; a < slidecaptions.length; a++) {
    console.log(a);
    slidecaptions[a].addEventListener("click", () => {
        console.log(a);
        for (let i = 0; i < array.length; i++) {
            slidecaptions[i].className = "";
        }

        slidecaptions[a].className = 'active';
    
    });
}