const items = document.querySelectorAll("[data-watch]");

const options = {
   threshold: 0.2,
}

const callback = (entries) => {
   entries.forEach(entry => {
      entry.isIntersecting ? entry.target.classList.add("active") : entry.target.classList.remove("active");
   });
}

const observer = new IntersectionObserver(callback, options);

items.forEach(item => {
   observer.observe(item);
});