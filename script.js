let selectedCount = 0;
let picks = [];
let chosenDate = new Date(); // Initialize with current date
let currentCarouselIndex = 0; // For the image carousel

const cardMeanings = [
  { title: "The Moonwalker", event: "Apollo 11 Moon Landing – Jul 20, 1969", message: "You walk where silence reigned. Your steps echo in eternity." },
  { title: "The Signal", event: "Sputnik Launch – Oct 4, 1957", message: "The first whisper to the stars. You awaken the age of space." },
  { title: "The Voyager", event: "Voyager 1 Enters Interstellar Space – Aug 25, 2012", message: "You carry humanity's message into the eternal void." },
  { title: "The Seer", event: "James Webb Space Telescope Launch – Dec 25, 2021", message: "You pierce the veil of time with cosmic clarity." },
  { title: "The Abyss", event: "First Black Hole Image – Apr 10, 2019", message: "From darkness, you bring form. Clarity emerges from mystery." },
  { title: "The Watcher", event: "Hubble Space Telescope Launch – Apr 24, 1990", message: "You reveal the hidden universe, one galaxy at a time." },
  { title: "The Thunder", event: "Falcon Heavy Maiden Launch – Feb 6, 2018", message: "Your thunder shakes the stars. Ambition finds new fuel." },
  { title: "The Choir", event: "TRAPPIST-1 Planet Discovery – Feb 22, 2017", message: "You find harmony in a distant solar choir." },
  { title: "The Wanderer", event: "Curiosity Rover Lands on Mars – Aug 6, 2012", message: "You roam alien sands with the heart of a scientist." },
  { title: "The Outrider", event: "New Horizons Pluto Flyby – Jul 14, 2015", message: "You unveil frozen secrets at the edge of our reach." },
  { title: "The Echo", event: "Gravitational Waves Detected – Feb 11, 2016", message: "You hear spacetime hum. A new sense is born." },
  { title: "The Surveyor", event: "TESS Launch – Apr 18, 2018", message: "You map the stars’ children with unmatched devotion." },
  { title: "The Perseverant", event: "Perseverance Rover Lands on Mars – Feb 18, 2021", message: "You seek ancient life with steel and soul." },
  { title: "The Torchbearer", event: "Artemis I Launch – Nov 16, 2022", message: "You carry legacy and ignite a future lunar path." },
  { title: "The Messenger", event: "Dragon Capsule First ISS Dock – May 31, 2012", message: "You unite Earth and orbit in commercial flight." },
  { title: "The Mirror", event: "JWST Mirrors Align – Mar 2022", message: "You focus galaxies into blooming clarity." },
  { title: "The Listener", event: "First Exoplanet Discovered – Oct 6, 1995", message: "You prove we are not alone in cosmic architecture." },
  { title: "The Record", event: "Voyager Golden Record Launch – Sep 5, 1977", message: "Your voice carries greetings across eons." },
  { title: "The Survivor", event: "Opportunity Rover Begins Mission – Jan 25, 2004", message: "You survive storms with solar will and wonder." },
  { title: "The Sculptor", event: "Spirit Rover Lands on Mars – Jan 4, 2004", message: "You carve knowledge into red stone." },
  { title: "The Farewell", event: "Apollo 17 Last Moon Landing – Dec 11, 1972", message: "Your prints are the last on lunar dust—so far." },
  { title: "The Pioneer", event: "Chandrayaan-3 Soft Moon Landing – Aug 23, 2023", message: "You gently touch the ancient lunar south." },
  { title: "The Breaker", event: "First Human in Space – Apr 12, 1961", message: "You left Earth as one of us, and returned changed." },
  { title: "The Shatterer", event: "First Woman in Space – Jun 16, 1963", message: "You shattered gravity’s limits and silence’s bounds." },
  { title: "The Collector", event: "Hayabusa2 Returns Asteroid Sample – Dec 5, 2020", message: "You hold stardust, older than Earth itself." },
  { title: "The Sentinel", event: "Parker Solar Probe Launch – Aug 12, 2018", message: "You dive into fire, chasing the source of light." },
  { title: "The Stormwatcher", event: "Juno Arrives at Jupiter – Jul 4, 2016", message: "You unravel storms and spin with giants." },
  { title: "The Underdog", event: "Mars Orbiter Mission (India) – Sep 24, 2014", message: "You reach red soil with budget and brilliance." },
  { title: "The Dreamer", event: "First Private Orbital Launch (SpaceX) – Sep 28, 2008", message: "You rewrite the rules with sparks and startup dreams." },
  { title: "The Dawn", event: "JWST First Images Released – Jul 12, 2022", message: "You unveil time’s deepest tapestry." },
  { title: "The Firewalker", event: "BepiColombo Launch to Mercury – Oct 20, 2018", message: "You carry ancient heat into modern minds." },
  { title: "The Emissary", event: "Luna 2 Moon Impact – Sep 14, 1959", message: "You struck the Moon with purpose, not destruction." },
  { title: "The Architect", event: "ISS Assembly Begins – Nov 20, 1998", message: "You knit nations into a habitat above." },
  { title: "The Net", event: "Starlink Begins Global Internet Era – May 23, 2019", message: "You connect the world through orbit." },
  { title: "The Passenger", event: "First Space Tourist (Dennis Tito) – Apr 28, 2001", message: "You proved space is for dreamers too." },
  { title: "The X-Eye", event: "Chandra X-Ray Observatory Launch – Jul 23, 1999", message: "You reveal violence and beauty in X-ray vision." },
  { title: "The Flyer", event: "Ingenuity Flies on Mars – Apr 19, 2021", message: "You take the first powered flight on another world." },
  { title: "The Orbiter", event: "Solar Orbiter Launch – Feb 10, 2020", message: "You dance around fire to draw the Sun’s secrets." },
  { title: "The Icer", event: "Rosetta Comet Landing – Nov 12, 2014", message: "You touch ice and time, riding a cosmic snowball." },
  { title: "The Resonator", event: "LIGO Upgrade Completes – 2019", message: "You sharpen your ears to spacetime’s whispers." },
  { title: "The Breath", event: "Exoplanet Atmosphere Detected – Jul 2001", message: "You sniff distant skies and detect life’s breath." },
  { title: "The Breaker II", event: "Deep Impact Hits Comet – Jul 4, 2005", message: "You crack celestial shells for cosmic chemistry." },
  { title: "The Guide", event: "First GPS Satellite Launch – Feb 22, 1978", message: "You guide Earth’s steps from above." },
  { title: "The Crew", event: "First Commercial Crew Launch – May 30, 2020", message: "You turn astronauts into passengers of tomorrow." },
  { title: "The Embrace", event: "Cassini Enters Saturn Orbit – Jul 1, 2004", message: "You embrace the ringed giant in perfect orbit." },
  { title: "The Reflection", event: "First Image of Earth from Moon – 1966", message: "You reflect our lonely beauty from afar." },
  { title: "The Finder", event: "Kepler Begins Mission – Mar 7, 2009", message: "You find planets hidden in starlight flickers." },
  { title: "The Bloom", event: "Webb Sunshield Deployment – Jan 4, 2022", message: "You unfold like a flower in vacuum’s chill." },
  { title: "The Horizon", event: "Apollo 8 Orbits the Moon – Dec 24, 1968", message: "You send back Earthrise—hope framed in darkness." },
  { title: "The Whisper", event: "First Object on Venus – Dec 15, 1970", message: "You whisper from a burning world." },
  { title: "The Cartographer", event: "ESA’s Gaia Maps the Milky Way – Dec 2013", message: "You draw the stars with divine precision." },
  { title: "The Pulse", event: "Insight Measures Marsquakes – Nov 26, 2018", message: "You hear the Red Planet breathe." },
  { title: "The Shard", event: "Asteroid Bennu Sample Return – Sep 24, 2023", message: "You capture fragments of ancient formation." },
  { title: "The Flame", event: "JWST Infrared Firsts – Aug 2022", message: "You light up dust and stars in infant glow." },
  { title: "The Twin", event: "Voyager 2 Crosses Interstellar Boundary – Nov 5, 2018", message: "You chase your twin into the void." }
  
];


document.addEventListener('DOMContentLoaded', () => {
    const splash = document.querySelector('.splash');
    const homepage = document.querySelector('.homepage');
    const cardReadingSection = document.querySelector('.card-reading-section');
    const selectDateSection = document.querySelector('.select-date-section');
    const aboutSection = document.querySelector('.about-section');
    const miniGamesSection = document.getElementById('mini-games-section');


    const drawInstruction = document.getElementById('drawInstruction');
    const currentDateInstruction = document.getElementById('currentDateInstruction');
    const cardContainer = document.getElementById("cardContainer");

    const readingBtn = document.getElementById('readingBtn');
    const shuffleDeckBtn = document.getElementById('shuffleDeckBtn');
    const revealButton = document.getElementById('revealButton');
    const surpriseMeBtn = document.getElementById('surpriseMeBtn');

    const datePickerInput = document.getElementById('date-picker');
    const moonPhaseEmoji = document.getElementById('moonPhaseEmoji');
    const moonPhaseName = document.getElementById('moonPhaseName');

    const aboutBtnHomepage = document.getElementById('aboutBtn');

    const todayReadingLinks = document.querySelectorAll('[id^="todayReadingLink"]');
    const selectDateLinks = document.querySelectorAll('[id^="selectDateLink"]');
    const miniGamesLinks = document.querySelectorAll('[id^="miniGamesLink"]');
    const aboutNavLinks = document.querySelectorAll('[id^="aboutLinkNav"]');
    const homeLogoLinks = document.querySelectorAll('[id^="homeLogoLink"]');

    const discoverReadingBtn = document.getElementById('discoverReadingBtn');

    const carouselTrack = document.getElementById('carouselTrack');
    const carouselImgs = document.querySelectorAll('.carousel-img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselDotsContainer = document.getElementById('carouselDots');

    const playCelestialMatchBtn = document.getElementById('play-celestial-match-btn');
    const playIntuitionTestBtn = document.getElementById('play-intuition-test-btn');
    const playWordScrambleBtn = document.getElementById('play-word-scramble-btn');
    const backToHomeFromGamesBtn = document.getElementById('back-to-home-from-games');

    const celestialMatchGame = document.getElementById('celestial-match-game');
    const resetMatchBtn = document.getElementById('reset-match-btn');
    const backToMenuFromMatchBtn = document.getElementById('back-to-menu-from-match');
    const playAgainMatchBtn = document.getElementById('play-again-match-btn');
    
    
    const intuitionTestGame = document.getElementById('intuition-test-game');
    const backToMenuFromIntuitionBtn = document.getElementById('back-to-menu-from-intuition');
    const playAgainIntuitionBtn = document.getElementById('play-again-intuition-btn');


    homepage.classList.add('hidden');
    selectDateSection.classList.add('hidden');
    cardReadingSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    miniGamesSection.classList.add('hidden');

    setTimeout(() => {
        splash.classList.remove('visible');
        setTimeout(() => {
            splash.classList.add('hidden');
            homepage.classList.remove('hidden');
            homepage.classList.add('visible');
        }, 500);
    }, 2000);

    function transitionPage(fromPage, toPage, callback = () => {}) {
        fromPage.classList.remove('visible');
        setTimeout(() => {
            fromPage.classList.add('hidden');
            toPage.classList.remove('hidden');
            toPage.classList.add('visible');
            callback();
        }, 500);
    }

    const bgMusic = document.getElementById('bg-music');

    // Attempt to play music automatically (might be blocked by browsers)
    bgMusic.play().catch(error => {
        console.log("Autoplay was prevented:", error);
        // If autoplay fails, prompt user interaction to play music
        document.body.addEventListener('click', () => {
            bgMusic.play().catch(error => {
                console.error("Failed to play music on click:", error);
            });
        }, { once: true });
    });

    if (readingBtn) {
        readingBtn.addEventListener('click', () => {
            chosenDate = new Date();
            transitionPage(homepage, cardReadingSection, () => updateCardSectionUI());
        });
    }

    if (aboutBtnHomepage) {
        aboutBtnHomepage.addEventListener('click', (e) => {
            e.preventDefault();
            transitionPage(homepage, aboutSection, () => initializeCarousel());
        });
    }

    todayReadingLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            chosenDate = new Date();
            let currentPage = document.querySelector('.visible');
            transitionPage(currentPage, cardReadingSection, () => updateCardSectionUI());
        });
    });

    selectDateLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let currentPage = document.querySelector('.visible');
            transitionPage(currentPage, selectDateSection, () => updateMoonPhaseDisplay(chosenDate));
        });
    });

    miniGamesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let currentPage = document.querySelector('.visible');
            transitionPage(currentPage, miniGamesSection, () => showMiniGamesMenu());
        });
    });

    aboutNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let currentPage = document.querySelector('.visible');
            transitionPage(currentPage, aboutSection, () => initializeCarousel());
        });
    });

    homeLogoLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let currentPage = document.querySelector('.visible');
            transitionPage(currentPage, homepage);
        });
    });

    // Initialize Pikaday
    if (datePickerInput) {
        const picker = new Pikaday({
            field: datePickerInput,
            format: 'YYYY-MM-DD',
            minDate: new Date('1950-01-01'),
            onSelect: function() {
                chosenDate = picker.getDate();
                updateMoonPhaseDisplay(chosenDate);
                transitionPage(selectDateSection, cardReadingSection, () => updateCardSectionUI());
            }
        });
    }

    if (shuffleDeckBtn) shuffleDeckBtn.addEventListener('click', startShuffle);
    if (revealButton) revealButton.addEventListener('click', triggerReveal);
    if (surpriseMeBtn) {
        surpriseMeBtn.addEventListener('click', () => {
            const minDateTime = new Date("1950-01-01").getTime();
            const maxDateTime = new Date().getTime();
            const randomTime = minDateTime + Math.random() * (maxDateTime - minDateTime);
            chosenDate = new Date(randomTime);
            updateMoonPhaseDisplay(chosenDate);
            transitionPage(selectDateSection, cardReadingSection, () => updateCardSectionUI());
        });
    }

    

    if (discoverReadingBtn) {
        discoverReadingBtn.addEventListener('click', () => {
            chosenDate = new Date();
            transitionPage(aboutSection, cardReadingSection, () => updateCardSectionUI());
        });
    }

    function showMiniGamesMenu() {
        document.querySelector('.mini-games-menu').classList.remove('hidden');
        if (celestialMatchGame) celestialMatchGame.classList.add('hidden');
        if (intuitionTestGame) intuitionTestGame.classList.add('hidden');
    }

    if (playCelestialMatchBtn) {
        playCelestialMatchBtn.addEventListener('click', () => {
            document.querySelector('.mini-games-menu').classList.add('hidden');
            celestialMatchGame.classList.remove('hidden');
            initCelestialMatch();
        });
    }

    if (playIntuitionTestBtn) {
        playIntuitionTestBtn.addEventListener('click', () => {
            document.querySelector('.mini-games-menu').classList.add('hidden');
            intuitionTestGame.classList.remove('hidden');
            initIntuitionTest();
        });
    }
    
    if (backToMenuFromMatchBtn) {
        backToMenuFromMatchBtn.addEventListener('click', () => {
            celestialMatchGame.classList.add('hidden');
            showMiniGamesMenu();
        });
    }

    if (backToMenuFromIntuitionBtn) {
        backToMenuFromIntuitionBtn.addEventListener('click', () => {
            intuitionTestGame.classList.add('hidden');
            showMiniGamesMenu();
        });
    }

    if (backToHomeFromGamesBtn) {
        backToHomeFromGamesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            transitionPage(miniGamesSection, homepage);
        });
    }

    function updateCardSectionUI() {
        updateDateInstruction(chosenDate);
        drawInstruction.textContent = "DRAW THREE CARDS THAT CALL OUT TO YOU";
        cardContainer.innerHTML = "";
        revealButton.style.display = "none";
    }

    function calculateMoonPhase(date) {
        const knownNewMoon = new Date('2000-01-06T12:00:00Z');
        const msPerDay = 24 * 60 * 60 * 1000;
        const synodicMonth = 29.53058867;
        const daysSinceNewMoon = (date.getTime() - knownNewMoon.getTime()) / msPerDay;
        const phaseDays = daysSinceNewMoon % synodicMonth;
        const normalizedPhaseDays = phaseDays < 0 ? phaseDays + synodicMonth : phaseDays;

        if (normalizedPhaseDays < 1.84566) return { name: "New Moon", emoji: "🌑" };
        if (normalizedPhaseDays < 5.53699) return { name: "Waxing Crescent", emoji: "🌒" };
        if (normalizedPhaseDays < 9.22831) return { name: "First Quarter", emoji: "🌓" };
        if (normalizedPhaseDays < 12.91963) return { name: "Waxing Gibbous", emoji: "🌔" };
        if (normalizedPhaseDays < 16.61096) return { name: "Full Moon", emoji: "🌕" };
        if (normalizedPhaseDays < 20.30228) return { name: "Waning Gibbous", emoji: "🌖" };
        if (normalizedPhaseDays < 23.99361) return { name: "Last Quarter", emoji: "🌗" };
        if (normalizedPhaseDays < 27.68493) return { name: "Waning Crescent", emoji: "🌘" };
        return { name: "New Moon", emoji: "🌑" };
    }



    function updateMoonPhaseDisplay(date) {
        if (moonPhaseEmoji && moonPhaseName) {
            const phase = calculateMoonPhase(date);
            moonPhaseEmoji.textContent = phase.emoji;
            moonPhaseName.textContent = phase.name;
        }
    }
    updateMoonPhaseDisplay(chosenDate);

    function initializeCarousel() {
        if (carouselDotsContainer) {
            carouselDotsContainer.innerHTML = '';
            carouselImgs.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => moveToSlide(index));
                carouselDotsContainer.appendChild(dot);
            });
            updateCarousel();
        }
    }

    function moveToSlide(index) {
        if (index < 0) index = carouselImgs.length - 1;
        else if (index >= carouselImgs.length) index = 0;
        currentCarouselIndex = index;
        updateCarousel();
    }

    function updateCarousel() {
        if (carouselTrack) {
            const offset = -currentCarouselIndex * 100;
            carouselTrack.style.transform = `translateX(${offset}%)`;
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentCarouselIndex);
            });
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => moveToSlide(currentCarouselIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => moveToSlide(currentCarouselIndex + 1));
});

function updateDateInstruction(date) {
    if (date instanceof Date && !isNaN(date)) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('currentDateInstruction').textContent = date.toLocaleDateString('en-US', options).toUpperCase();
    } else {
        document.getElementById('currentDateInstruction').textContent = "DATE NOT AVAILABLE";
    }
}

function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle-particle');
        const size = Math.random() * 8 + 4;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        const initialX = centerX + (Math.random() - 0.5) * rect.width * 0.2;
        const initialY = centerY + (Math.random() - 0.5) * rect.height * 0.2;
        sparkle.style.left = `${initialX}px`;
        sparkle.style.top = `${initialY}px`;
        const endX = (Math.random() - 0.5) * 100;
        const endY = (Math.random() - 0.5) * 100;
        sparkle.style.setProperty('--x', `${endX}px`);
        sparkle.style.setProperty('--y', `${endY}px`);
        document.body.appendChild(sparkle);
        sparkle.addEventListener('animationend', () => sparkle.remove());
    }
}

function startShuffle() {
  const container = document.getElementById("cardContainer");
  container.classList.remove("reveal-mode");
  container.innerHTML = "";
  selectedCount = 0;
  picks = [];
  document.getElementById("revealButton").style.display = "none";
  document.getElementById('drawInstruction').textContent = "DRAW THREE CARDS THAT CALL OUT TO YOU";
  for (let i = 0; i < 8; i++) {
    const card = document.createElement("div");
    card.className = "card shuffle-in";
    const inner = document.createElement("div");
    inner.className = "card-inner";
    const front = document.createElement("div");
    front.className = "card-front";
    const back = document.createElement("div");
    back.className = "card-back";
    inner.append(front, back);
    card.appendChild(inner);
    container.appendChild(card);
    card.style.animationDelay = `${i * 0.05}s`;
    card.addEventListener("click", () => selectCard(card, inner, back));
    setTimeout(() => card.classList.remove("shuffle-in"), 600 + i * 100);
  }
}

function selectCard(card, inner, back) {
  const btn = document.getElementById("revealButton");
  const cardContainer = document.getElementById("cardContainer");
  if (cardContainer.classList.contains("reveal-mode") && inner.classList.contains("flipped")) {
      const cardTitle = back.querySelector('h3')?.textContent || '';
      const cardEvent = back.querySelectorAll('p')[0]?.textContent || '';
      const cardMessage = back.querySelectorAll('p')[1]?.textContent || '';
      const textToSpeak = `The card of ${cardTitle}. Event: ${cardEvent}. Message: ${cardMessage}`;
      speakText(textToSpeak);
      return;
  }
  if (card.classList.contains("selected")) {
    card.classList.remove("selected");
    selectedCount--;
    picks = picks.filter(p => p.card !== card);
    if (selectedCount < 3) btn.style.display = "none";
  } else if (selectedCount < 3) {
    card.classList.add("selected");
    selectedCount++;
    picks.push({ card, inner, back });
    if (selectedCount === 3) btn.style.display = "block";
  }
}

function triggerReveal() {
    document.getElementById("revealButton").style.display = "none";
    const container = document.getElementById("cardContainer");
    container.classList.add("reveal-mode");
    document.getElementById('drawInstruction').textContent = "The Reveal!";

    // Pick 3 unique random card meanings
    const available = [...cardMeanings];
    const selectedMeanings = [];
    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * available.length);
        selectedMeanings.push(available.splice(index, 1)[0]);
    }

    // Remove all unselected cards from the DOM
    document.querySelectorAll(".card").forEach(card => {
        if (!card.classList.contains("selected")) {
            card.remove(); // Remove unselected cards
        }
    });

    // Re-append the selected cards in order to the container
    picks.forEach((p, i) => {
        container.appendChild(p.card); // This ensures order and side-by-side layout

        // Flip and assign meanings as before
        setTimeout(() => {
            p.inner.classList.add("flipped");
            p.back.innerHTML = `
                <h3>${selectedMeanings[i].title}</h3>
                <p>${selectedMeanings[i].event}</p>
                <p>${selectedMeanings[i].message}</p>
            `;
        }, 400 + (i * 100));
        createSparkles(p.card);
    });

    // Show the daily interpretation after the reveal
    setTimeout(() => {
        showDailyInterpretation(selectedMeanings);
    }, 1000);
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech Synthesis API not supported.");
  }
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;
let gameStartTime;

const celestialSymbols = [
    { name: 'Sun', emoji: '☀️' }, { name: 'Moon', emoji: '🌕' },
    { name: 'Star', emoji: '⭐' }, { name: 'Comet', emoji: '☄️' },
    { name: 'Galaxy', emoji: '🌌' }, { name: 'Saturn', emoji: '🪐' },
    { name: 'Nebula', emoji: '✨' }, { name: 'Meteor', emoji: '🌠' }
];

function createMatchCard(symbol) {
    const card = document.createElement('div');
    card.classList.add('match-card');
    card.dataset.name = symbol.name;
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
    const cardFront = document.createElement('div');
    cardFront.classList.add('match-card-front');
    const cardBack = document.createElement('div');
    cardBack.classList.add('match-card-back');
    cardBack.textContent = symbol.emoji;
    cardInner.append(cardFront, cardBack);
    card.appendChild(cardInner);
    card.addEventListener('click', flipCard);
    return card;
}

function initCelestialMatch() {
    const matchGrid = document.querySelector('.match-grid');
    const matchGameOutcome = document.getElementById('match-game-outcome');
    matchGrid.innerHTML = '';
    matchGameOutcome.classList.add('hidden');
    const boardSymbols = [...celestialSymbols, ...celestialSymbols];
    boardSymbols.sort(() => 0.5 - Math.random());
    document.getElementById('match-score').textContent = 0;
    document.getElementById('total-pairs').textContent = celestialSymbols.length;
    boardSymbols.forEach(symbol => matchGrid.appendChild(createMatchCard(symbol)));
    resetBoard();
    const cards = document.querySelectorAll('.match-grid .match-card');
    lockBoard = true;
    cards.forEach(card => card.querySelector('.card-inner').classList.add('flipped'));
    setTimeout(() => {
        cards.forEach(card => card.querySelector('.card-inner').classList.remove('flipped'));
        lockBoard = false;
        gameStartTime = new Date();
    }, 2500);
}

function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.querySelector('.card-inner').classList.add('flipped');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedPairs++;
    document.getElementById('match-score').textContent = matchedPairs;
    resetBoard();
    if (matchedPairs === celestialSymbols.length) {
        const timeInSeconds = Math.round((new Date() - gameStartTime) / 1000);
        document.getElementById('time-taken').textContent = timeInSeconds;
        document.getElementById('match-game-outcome').classList.remove('hidden');
    }
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.querySelector('.card-inner').classList.remove('flipped');
        secondCard.querySelector('.card-inner').classList.remove('flipped');
        resetBoard();
    }, 1200);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

document.getElementById('reset-match-btn').addEventListener('click', initCelestialMatch);
document.getElementById('play-again-match-btn').addEventListener('click', initCelestialMatch);

// ===================================================================
// ===== INTUITION TEST GAME LOGIC (NEWLY ADDED) =====================
// ===================================================================

let intuitionGameLocked = false;
const intuitionSymbols = {
    winner: '⭐', // Lucky star
    loser: '☄️'  // Unlucky comet
};

function createIntuitionCard(isWinner) {
    const card = document.createElement('div');
    card.classList.add('intuition-card');
    card.dataset.winner = isWinner; // Store if it's the winning card

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('intuition-card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('intuition-card-back');
    cardBack.textContent = isWinner ? intuitionSymbols.winner : intuitionSymbols.loser;

    if (isWinner) {
        card.classList.add('winner'); // Add a class for special styling
    }

    cardInner.append(cardFront, cardBack);
    card.appendChild(cardInner);

    card.addEventListener('click', selectIntuitionCard);
    return card;
}

function initIntuitionTest() {
    const intuitionCardsContainer = document.querySelector('.intuition-cards');
    const intuitionOutcome = document.getElementById('intuition-game-outcome');
    const playAgainBtn = document.getElementById('play-again-intuition-btn');

    intuitionCardsContainer.innerHTML = '';
    intuitionOutcome.classList.add('hidden');
    playAgainBtn.classList.add('hidden');
    intuitionGameLocked = false;

    // Create an array representing the cards [winner, loser, loser]
    let cardsSetup = [true, false, false];
    // Shuffle the array to randomize the winner's position
    cardsSetup.sort(() => Math.random() - 0.5);

    cardsSetup.forEach(isWinner => {
        intuitionCardsContainer.appendChild(createIntuitionCard(isWinner));
    });
}

function selectIntuitionCard() {
    if (intuitionGameLocked) return;
    intuitionGameLocked = true; // Lock the game after a choice is made

    const wasWinner = this.dataset.winner === 'true';
    const allCards = document.querySelectorAll('.intuition-card');
    const intuitionOutcome = document.getElementById('intuition-game-outcome');
    const playAgainBtn = document.getElementById('play-again-intuition-btn');

    // Flip all cards to show the result
    allCards.forEach(card => card.classList.add('flipped'));

    // Display the outcome message
    setTimeout(() => {
        intuitionOutcome.innerHTML = wasWinner
            ? '<h3>You Won!</h3><p>Your intuition led you to the light.</p>'
            : '<h3>Try Again</h3><p>The cosmos chose a different path this time.</p>';
        intuitionOutcome.classList.remove('hidden');
        playAgainBtn.classList.remove('hidden');
    }, 700); // Wait for the flip animation to mostly complete
}

// Event Listeners for Intuition Test Controls
document.getElementById('play-again-intuition-btn').addEventListener('click', initIntuitionTest);