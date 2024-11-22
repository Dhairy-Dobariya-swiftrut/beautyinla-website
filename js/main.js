// main.js

$(document).ready(function () {
    // Testimonials Slider
    let index = 0;
    const testimonials = $('#testimonials > div');
    setInterval(() => {
      testimonials.hide();
      $(testimonials[index]).fadeIn();
      index = (index + 1) % testimonials.length;
    }, 3000);
  
    // FAQ Toggle
    $('.faq-item').click(function () {
      $(this).next('.faq-answer').slideToggle();
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".absolute span");
    let currentIndex = 0;
  
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
        indicators[i].classList.toggle("bg-white", i === index);
        indicators[i].classList.toggle("bg-gray-50", i !== index);
      });
      currentIndex = index;
    };
  
    showSlide(0);
  
    document.querySelector("#next-slide").addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });
  
    document.querySelector("#prev-slide").addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });
  });