export default function AudioButton({ text }) {
  function playAudio() {
    if (!window.speechSynthesis) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 1; // normal speed
    utterance.pitch = 1; // normal pitch
    utterance.volume = 1; // max volume

    window.speechSynthesis.cancel(); // stop previous speech
    window.speechSynthesis.speak(utterance);
  }

  return (
    <button onClick={playAudio} className="btn btn-sm btn-outline-secondary mt-2">
      🔊 Listen
    </button>
  );
}
