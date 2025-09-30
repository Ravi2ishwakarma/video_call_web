import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react';
import { useParams } from 'react-router-dom';

function VideoRoom() {
  // ✅ Call hook at top level
  const { roomid } = useParams();

  const myMeeting = async (element) => {
    if (!element) return; // Prevents running when ref is null

    const appID = 492479727;
    const serverSecret = "48b70052eb69f58a91866f9f21447f8e";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid, // ✅ use roomid from hook
      Date.now().toString(),
      randomID(5) // make sure you have this helper defined
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'copy link',
          url: `https://video-call-web-six.vercel.app`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  // Render
  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

export default VideoRoom;

// Example helper
function randomID(len) {
  return Math.random().toString(36).substring(2, 2 + len);
}
