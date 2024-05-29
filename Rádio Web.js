let isPoweredOn = false;
let isPlaying = false;
let currentTrack = 0;
let textCycleInterval;
let currentTextIndex = 0;

const tracks = [
    {
        src: "Track01.mp3",
        title: "I Miss You",
        artist: "Haddaway",
        album: "Haddaway",
        art: "Haddaway.jpeg"
    },
    {
        src: "Track02.mp3",
        title: "Right Here Waiting",
        artist: "Richard Marx",
        album: "Repeat Offender",
        art: "Repeat Offender.jpeg"
    },
    {
        src: "Track03.mp3",
        title: "I Will Always Love You",
        artist: "Whitney Houston",
        album: "The Bodyguard",
        art: "The Bodyguard.jpeg"
    },
    {
        src: "Track04.mp3",
        title: "Stuck on You",
        artist: "Lionel Richie",
        album: "Can't Slow Down",
        art: "Can't Slow Down.jpeg"
    },
    {
        src: "Track05.mp3",
        title: "Nunca Te Olvidaré",
        artist: "Enrique Iglesias",
        album: "Cosas del Amor",
        art: "Cosas del Amor.jpeg"
    },
{
        src: "Track06.mp3",
        title: "Hero",
        artist: "Mariah Carey",
        album: "Music Box",
        art: "Music Box.jpeg"
    },
    {
        src: "Track07.mp3",
        title: "Glory of Love",
        artist: "Peter Cetera",
        album: "Glory of Love",
        art: "Glory of Love.jpeg"
    },
    {
        src: "Track08.mp3",
        title: "Rebel In Me",
        artist: "Jimmy Cliff",
        album: "Images",
        art: "Images.jpeg"
    },
    {
        src: "Track09.mp3",
        title: "Un-Break My Heart",
        artist: "Toni Braxton",
        album: "Secrets",
        art: "Secrets.jpeg"
    },
    {
        src: "Track10.mp3",
        title: "Aïcha",
        artist: "Gilbert",
        album: "D'Amour",
        art: "D'Amour.jpeg"
    },
{
        src: "Track11.mp3",
        title: "Heaven",
        artist: "Bryan Adams",
        album: "Heaven",
        art: "Heaven.jpeg"
    },
    {
        src: "Track12.mp3",
        title: "All by Myself",
        artist: "Celine Dion",
        album: "All by Myself",
        art: "All by Myself.jpeg"
    }
];

function togglePower() {
    const display = document.getElementById('display');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const playPauseButton = document.getElementById('playPauseButton');
    const audioPlayer = document.getElementById('audioPlayer');
    const albumArt = document.getElementById('albumArt');
    
    isPoweredOn = !isPoweredOn;
    
    if (isPoweredOn) {
        display.textContent = `Rádio Ligada. Aperte o Play!`;
        prevButton.disabled = false;
        nextButton.disabled = false;
        playPauseButton.disabled = false;
        audioPlayer.src = tracks[currentTrack].src;
        albumArt.src = tracks[currentTrack].art;
        albumArt.style.display = 'block';
        startTextCycle();
        playPauseButton.textContent = '▶️';
    } else {
        display.textContent = "Rádio Desligada";
        prevButton.disabled = true;
        nextButton.disabled = true;
        playPauseButton.disabled = true;
        audioPlayer.pause();
        audioPlayer.src = "";
        albumArt.style.display = 'none';
        isPlaying = false;
        playPauseButton.textContent = '▶️';
        clearInterval(textCycleInterval);
    }
}

function togglePlayPause() {
    if (!isPoweredOn) return;

    const playPauseButton = document.getElementById('playPauseButton');
    const display = document.getElementById('display');
    const audioPlayer = document.getElementById('audioPlayer');
    
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        playPauseButton.textContent = '⏸️';
        audioPlayer.play();
        updateDisplayText();
    } else {
        playPauseButton.textContent = '▶️';
        audioPlayer.pause();
        display.textContent = `Pausado: ${tracks[currentTrack].title} - ${tracks[currentTrack].artist} (${tracks[currentTrack].album})`;
    }
}

function nextTrack() {
    if (!isPoweredOn) return;

    currentTrack = (currentTrack + 1) % tracks.length;
    playCurrentTrack();
}

function prevTrack() {
    if (!isPoweredOn) return;

    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    playCurrentTrack();
}

function playCurrentTrack() {
    const audioPlayer = document.getElementById('audioPlayer');
    const albumArt = document.getElementById('albumArt');
    audioPlayer.src = tracks[currentTrack].src;
    albumArt.src = tracks[currentTrack].art;
    if (isPlaying) {
        audioPlayer.play();
    }
    updateDisplayText();
}

function startTextCycle() {
    clearInterval(textCycleInterval);
    textCycleInterval = setInterval(() => {
        if (!isPoweredOn || !isPlaying) return;
        const display = document.getElementById('display');
        const track = tracks[currentTrack];
        const texts = [
            `Tocando: ${track.title}`,
            `Artista: ${track.artist}`,
            `Álbum: ${track.album}`
        ];
        display.textContent = texts[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }, 5000); // alterna a cada 5 segundos
}

function updateDisplayText() {
    currentTextIndex = 0;
    startTextCycle();
}

document.getElementById('audioPlayer').addEventListener('ended', () => {
    nextTrack();
    if (isPlaying) {
        document.getElementById('audioPlayer').play();
    }
});
//Pedir Música pelo WhatsApp
function enviarWhatsApp() {
    var numeroWhatsApp = "53981488141";
    // Substitua pelo número de telefone desejado
    var musicaInput = document.getElementById('musica').value;
    if (musicaInput.trim() === "") {
        alert("Por favor, digite o nome da música.");
        return;
}   
    var mensagemWhatsapp = "Olá, gostaria de ouvir a música: " + musicaInput;
    var linkWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagemWhatsapp);
    window.open(linkWhatsApp, '_blank');
}
