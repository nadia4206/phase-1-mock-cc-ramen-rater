//constants
const url = 'http://localhost:3000/ramens'
let ramenArr
const ramenMenu = document.querySelector('#ramen-menu')
const img = document.querySelector('#ramen-detail .detail-image')
const ramenName = document.querySelector('#ramen-detail .name')
const restaurant = document.querySelector('#ramen-detail .restaurant')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')


//1. See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects
fetch(url)
.then(response => response.json())
.then((data) => {
    ramenArr = data
    ramenArr.map(displayRamen)
})

    //1.a Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

function displayRamen(ramen) {
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenMenu.append(ramenImg)
 
    //2. Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

    ramenImg.addEventListener('click', () => {
        img.src = ramen.image
        ramenName.textContent = ramen.name
        restaurant.textContent = ramen.restaurant
        rating.textContent = ramen.rating
        comment.textContent = ramen.comment

    })
    
}

//3. Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let body = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.restaurant.value,
        comment: e.target['new-comment'].value
    }

    displayRamen(body)
})