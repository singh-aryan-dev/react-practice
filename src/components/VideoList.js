import PlayButton from "./PlayButton";
import Video from "./Video";
import useVideos from "../hooks/Videos";
import axios from "axios";
import { useEffect, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({ editVideo }) {
  const url = "https://my.api.mockaroo.com/video.json?key=7e238b50";

  const videos = useVideos();
  const dispatch = useVideoDispatch();
  async function getVideo() {
    const res = await axios.get(url);
    console.log(res.data);
    dispatch({ type: "LOAD", payload: res.data });
  }
  useEffect(() => {
    async function getVideo() {
      const res = await axios.get(url);
      console.log(res.data);
      dispatch({ type: "LOAD", payload: res.data });
    }
    getVideo();
  }, [dispatch]);
  return (
    <>
      {videos.map((video) => (
        <Video
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          key={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={getVideo}>Get Videos</button>
      <div style={{ clear: "both" }}>
        {/* <PlayButton  message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}
        {/* <PlayButton  message="pause-msg" onSmash={()=>alert('Playy')}>Pause</PlayButton> */}
      </div>
    </>
  );
}
export default VideoList;
