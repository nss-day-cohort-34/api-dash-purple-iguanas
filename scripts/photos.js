imgDOMLocation = document.querySelector("#imgList")
imgSelector = document.querySelector(".img")


const fetchPhoto = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(photos => photos.json())
        .then((parsedPhotos) => {
            for (let i = 0; i < 50; i++) {
            const convertedPhoto = photoConverter(parsedPhotos[i])
            displayPhoto(convertedPhoto)
            }
        })
}

const displayPhoto = (photoHTML) => {
    imgDOMLocation.innerHTML += photoHTML
}
    

const photoConverter = (photoObject) => {
    return `
        <section class = "img__container">
            <a href="${photoObject.url}">
                <img class="img" src="${photoObject.thumbnailUrl}"></img>
            </a>
            <p>${photoObject.title}</p>
        </section>
    `
}


fetchPhoto()




// 'click', () => {
//     console.log("clicked")
// })