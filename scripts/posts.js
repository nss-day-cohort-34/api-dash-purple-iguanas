const whereToPutHTML = document.querySelector("#post-list");

const postFetcher = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then((arrayOfPosts) => {
            for (let i=0; i < 20; i++) {
            //for (const post of arrayOfPosts) {
            const convertedPost = postConverter(arrayOfPosts[i])
            displayPostInDOM(convertedPost)
        }
        })
}

const postConverter = (postObject) => {
    return `
        <section class="post">
            <h1 class="post__title">${postObject.title}</h1>
            <h2 class="post__body">${postObject.body}</h2>
        </section>
    `
}

const displayPostInDOM = (postHTMLRepresentation) => {
    whereToPutHTML.innerHTML += postHTMLRepresentation;
}

postFetcher();