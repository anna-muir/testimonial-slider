const testimonials = document.querySelectorAll('.testimonial')
const nextButton = document.getElementById('next')
const backButton = document.getElementById('prev')

const circles = document.querySelectorAll('.circle')


// const circle = document.getElementById('1')

// const slide = document.getElementById('slide-one')




index = 0;


// Go to next testimonial and highlight appropriate circle
const nextTestimonial = () => {
    if (index <= testimonials.length) {
        removeActive()
        // removeActiveCircle()
        const item = testimonials[index + 1]
        // const circle = circles[index + 1]
        // circle.classList.add('active-circle')
        item.classList.add('active')
        index++

        if (index === 3) {
            nextButton.disabled = true;
        }

        if (index > 0) {
            backButton.disabled = false;
        }


    }
    console.log(index)


}




// Go to prev testimonial and highlight appropriate circle
const previousTestimonial = () => {
    if (index <= testimonials.length) {
        removeActive();
        // removeActiveCircle();
        index--
        // const circle = circles[index]
        // circle.classList.add('active-circle')
        const item = testimonials[index]
        item.classList.add('active')

    }
    console.log('index next is', testimonials[index])
    // console.log('index prev is', indexPrev)

    if (index < 3) {
        nextButton.disabled = false;
    }

    if (index === 0) {
        backButton.disabled = true;
    }

}





// Remove all active classes
const removeActive = () => {
    testimonials.forEach((item) => {
        item.classList.remove('active')
    })
}

// Remove all active circle classes
const removeActiveCircle = () => {
    circles.forEach((item) => {
        item.classList.remove('active-circle')
    })
}



//Event listeners for next and back buttons
nextButton.addEventListener('click', nextTestimonial)
backButton.addEventListener('click', previousTestimonial)


// circles

// const circle = document.getElementById('1')

// const slide = document.getElementById('slide-one')

// const click = () => {
//     removeActive()
//     slide.classList.add('active')
//     removeActiveCircle()
//     circle.classList.add('active-circle')
//     index = 1
//     console.log(index)






// }



// Circle code

// const circleOne = document.getElementById('cir-1')
// const circleTwo = document.getElementById('cir-2')
// const circleThree = document.getElementById('cir-3')
// const circleFour = document.getElementById('cir-4')

// const circles = document.querySelectorAll('.circle')


// console.log(circles)

// const selectSlide = () => {
//     Array.from(circles).forEach((item, index) => {

//         if (item.id == index) {
//             console.log(item)
//         }

//     })
// }

// circles[0].addEventListener('click', selectSlide)














