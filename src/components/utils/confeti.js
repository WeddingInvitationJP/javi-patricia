import confetti from "canvas-confetti";

export function launchConfetti() {
  confetti({
    particleCount: 100,
    zIndex: 40000,
    spread: 70,
    origin: { y: 0.6 },
  });
}
