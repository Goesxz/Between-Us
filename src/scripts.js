document.addEventListener('DOMContentLoaded', () => {
  // Cloud animation
  function createCloud() {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.style.top = `${Math.random() * 50}vh`;
    cloud.style.animationDuration = `${10 + Math.random() * 10}s`;
    cloud.style.animation = `moveClouds ${15 + Math.random() * 5}s linear`;
    
    cloud.addEventListener('animationend', () => {
      cloud.remove();
    });
  }

  // Create clouds at intervals
  setInterval(createCloud, 3500);
  // Create initial cloud

  // Intersection Observer for fade-in animations
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '50px'
    }
  );

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(element => {
    fadeObserver.observe(element);
  });

  // Love Counter
  const startDate = new Date('2024-07-25');

  function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Update counter numbers with animation
    updateCounterElement('days', days);
    updateCounterElement('hours', hours);
    updateCounterElement('minutes', minutes);
    updateCounterElement('seconds', seconds);

    // Update start date display
    const formattedDate = startDate.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    document.getElementById('start-date').textContent = formattedDate;
  }

  function updateCounterElement(id, value) {
    const element = document.getElementById(id);
    const currentValue = parseInt(element.textContent);
    
    if (currentValue !== value) {
      element.classList.add('updating');
      setTimeout(() => {
        element.textContent = value;
        element.classList.remove('updating');
      }, 300);
    }
  }

  // Update counter every second
  setInterval(updateCounter, 1000);
  updateCounter(); // Initial update

  // Dynamic floating hearts
  function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.textContent = '♥';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`;
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  // Create new hearts periodically
  setInterval(createFloatingHeart, 2000);
  
  // Create initial hearts
  for (let i = 0; i < 10; i++) {
    createFloatingHeart();
  }

  // Add Spotify player
  const playlistSection = document.querySelector('#playlists');
  if (playlistSection) {
    const spotifyEmbed = document.createElement('div');
    spotifyEmbed.classList.add('spotify-embed');
    spotifyEmbed.innerHTML = `
      <iframe 
        src="https://open.spotify.com/embed/playlist/6aRD1oTlnvBCEDUDvtGrj7" 
        width="100%" 
        height="380" 
        frameborder="0" 
        allowtransparency="true" 
        allow="encrypted-media">
      </iframe>
    `;
    playlistSection.appendChild(spotifyEmbed);
  }

  // Constantes de configuração
  const CLOUD_CREATION_INTERVAL = 3500; // Intervalo para criar nuvens
  const MIN_CLOUD_DURATION = 10; // Duração mínima da animação (em segundos)
  const MAX_CLOUD_DURATION = 20; // Duração máxima da animação (em segundos)
  const MIN_ANIMATION_TIME = 15; // Tempo mínimo para a animação da nuvem
  const MAX_ANIMATION_TIME = 20; // Tempo máximo para a animação da nuvem

  // Função para criar uma nuvem
  function createCloud() {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');

    // Definir propriedades de estilo de forma dinâmica
    cloud.style.top = `${Math.random() * 50}vh`; // Posição aleatória vertical
    cloud.style.animationDuration = `${MIN_CLOUD_DURATION + Math.random() * (MAX_CLOUD_DURATION - MIN_CLOUD_DURATION)}s`; // Duração aleatória para a animação
    cloud.style.animation = `moveClouds ${MIN_ANIMATION_TIME + Math.random() * (MAX_ANIMATION_TIME - MIN_ANIMATION_TIME)}s linear`;

    // Adicionar a nuvem ao corpo
    document.body.appendChild(cloud);

    // Remover a nuvem quando a animação terminar
    cloud.addEventListener('animationend', () => {
      cloud.remove();
    });
  }

  // Criar nuvens em intervalos regulares
  setInterval(createCloud, CLOUD_CREATION_INTERVAL);

  // Criar a primeira nuvem imediatamente
  createCloud();
});
