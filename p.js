const whole = document.querySelector(".whole"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll("img"),
    buttons = document.querySelectorAll("i");
let imageIndex = 1,
    intervalId;

const autoSlide = () => {
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};
autoSlide();

const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
    // Stop the automatic slideshow
    clearInterval(intervalId);

    // Calculate the updated image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
};
buttons.forEach((i) => i.addEventListener("click", updateClick));
whole.addEventListener("mouseover", () => clearInterval(intervalId));
whole.addEventListener("mouseleave", autoslide);