function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

  document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('.title');
    const names = ['Samir Gaire', 'ガイレ サミル' , 'samirgaire10'];
    let currentIndex = 0;

    setInterval(() => {
      nameElement.style.opacity = '0'; // Start fade out
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % names.length; // Switch name
        nameElement.textContent = names[currentIndex];
        nameElement.style.opacity = '1'; // Fade back in
      }, 1000); // Match the fade-out duration (1s)
    }, 3000); // Full cycle of fade-out, switch, and fade-in (3s total)
  });
