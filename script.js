// const countdownElement = document.getElementById('countdown');
// const countdownSong = document.getElementById('countdown-song');

// // Set the target date and time
// const targetDate = new Date('January 1, 2025 00:00:00').getTime();

// function updateCountdown() {
//   const now = new Date().getTime();
//   const difference = targetDate - now;

//   if (difference <= 0) {
//     countdownElement.textContent = "🎉 Happy New Year 2025! 🎉";
//     countdownSong.play(); // Play the countdown song
//     clearInterval(interval);
//   } else {
//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//   }
// }

// // Update the countdown every second
// const interval = setInterval(updateCountdown, 1000);

// // Preload the song to ensure smooth playback
// countdownSong.load();
