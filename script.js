import fetch from "node-fetch"
fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
        data.map((cat) => {
            console.log(cat.url)
            let image1 = document.getElementById("img1")
            image1.src = cat.url
            let image2 = document.getElementById("img2")
            image2.src = cat.url
            let image3 = document.getElementById("img3")
            image3.src = cat.url
            let image4 = document.getElementById("img4")
            image4.src = cat.url
        })

    })
