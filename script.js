// Gallery Modal Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const secretSection = document.getElementById('secret');
const lettersCollected = [];

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const letter = item.getAttribute('data-letter');
    const message = item.getAttribute('data-message');
    alert(`Message: ${message}\nLetter: ${letter}`);
    lettersCollected.push(letter);
    if (lettersCollected.length === 4) {
      alert('You’ve unlocked the secret section!');
      secretSection.style.display = 'block';
    }
  });
});

// Gift Button Animation
document.getElementById('gift-button').addEventListener('click', () => {
  alert('Here’s a virtual bouquet of roses just for you! 🌹, and then Dm Halal and ask for the gift');
});


const audio = document.getElementById('background-audio');

// Optional: Add a mute/unmute button
const audioControl = document.createElement('button');
audioControl.innerText = '🔊 Mute';
audioControl.style.position = 'fixed';
audioControl.style.bottom = '20px';
audioControl.style.right = '20px';
audioControl.style.padding = '10px 20px';
audioControl.style.border = 'none';
audioControl.style.borderRadius = '10px';
audioControl.style.background = 'rgba(0, 0, 0, 0.6)';
audioControl.style.color = '#fff';
audioControl.style.cursor = 'pointer';

audioControl.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    audioControl.innerText = '🔊 Mute';
  } else {
    audio.pause();
    audioControl.innerText = '🔈 Unmute';
  }
});

document.body.appendChild(audioControl);




function createFloatingNotes() {
  const messages = ["I love you", "You’re amazing", "Always in my heart", "Forever together"];
  const noteContainer = document.createElement('div');
  noteContainer.classList.add('floating-notes');

  for (let i = 0; i < 10; i++) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerText = messages[Math.floor(Math.random() * messages.length)];
    note.style.left = `${Math.random() * 100}vw`;
    note.style.animationDelay = `${Math.random() * 5}s`;
    noteContainer.appendChild(note);
  }

  document.body.appendChild(noteContainer);
}

createFloatingNotes();


const slides = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
  document.querySelector('.carousel-slide').style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  nextBtn.click();
}, 5000);