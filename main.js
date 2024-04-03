var typed = new Typed(".text", {
  strings: ["UI/UX Designer", "Web site Developer", ".NET Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
  
 
});
document.querySelector('.text').style.color = 'cyan'; 

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.navbar a');

  for (const link of links) {
    link.addEventListener('click', clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const topLink = document.querySelector('.top');

  topLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


