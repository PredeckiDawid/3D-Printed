const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('effect');
    }else{
      entry.target.classList.remove('effect');
    }
  });
});

const resultElements = document.querySelectorAll('.result');
resultElements.forEach((el) => observer.observe(el));
