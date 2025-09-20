import { useReducer, useState } from "react";
import "./App.css";
import IncrementDecrement from "./components/IncrementDecrement";
import Counter from "./components/Counter";
import videoDB from "./data/data";
import Resource from "./components/Resource";
import UseMemo from "./components/UseMemo";
import UseCallBack from "./components/UseCallBack";
import UseRef from "./components/UseRef";
import AppVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");

  function videoReducer(videos, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, []);

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`}>
            <button
              onClick={() =>
                setMode(mode === "darkMode" ? "lightMode" : "darkMode")
              }
            >
              Mode
            </button>
            <AppVideo editableVideo={editableVideo}></AppVideo>

            <VideoList editVideo={editVideo}></VideoList>

            <Counter></Counter>
            <IncrementDecrement></IncrementDecrement>

            <Resource></Resource>

            <UseMemo></UseMemo>

            <UseCallBack></UseCallBack>

            <UseRef></UseRef>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
