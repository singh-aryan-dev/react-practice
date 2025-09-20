import ThemeContext from "../context/ThemeContext";
import "./PlayButton.css";
import { useContext, useState } from "react";
function PlayButton({ message, children, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  const theme = useContext(ThemeContext);
  function handleClick(e) {
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }

  return (
    <button className={theme} onClick={handleClick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
}
export default PlayButton;
