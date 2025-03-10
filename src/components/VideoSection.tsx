
import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const [isYouTubeApiReady, setIsYouTubeApiReady] = useState(false);
  const playerRef = useRef<any>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define the onYouTubeIframeAPIReady function globally
    window.onYouTubeIframeAPIReady = () => {
      setIsYouTubeApiReady(true);
    };

    // Load the YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag?.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    return () => {
      // Clean up
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = () => {};
    };
  }, []);

  // Initialize player once API is ready
  useEffect(() => {
    if (!isYouTubeApiReady) return;

    try {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: "23Bw0RcKT90",
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 1,
          playsinline: 1,
          enablejsapi: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          origin: window.location.origin,
          vq: "hd1080",
        },
        events: {
          onReady: (event: any) => {
            console.log("YouTube player ready");
            event.target.setPlaybackQuality("hd1080");
            event.target.unMute();
            event.target.playVideo();
          },
          onError: (event: any) => {
            console.error("YouTube player error:", event);
          },
        },
      });
    } catch (error) {
      console.error("Error initializing YouTube player:", error);
    }
  }, [isYouTubeApiReady]);

  return (
    <section className="py-24 bg-divine-dark/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={videoContainerRef}
            className="relative w-full overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(155,135,245,0.15)] border border-white/10 transition-all duration-500"
            style={{ aspectRatio: "16/9" }}
          >
            <div id="youtube-player" className="absolute inset-0 w-full h-full"></div>
            
            {/* Fallback for when YouTube API fails to load */}
            {!isYouTubeApiReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="animate-pulse text-divine text-xl">Loading video...</div>
              </div>
            )}
            
            {/* Fallback for when JavaScript is disabled */}
            <noscript>
              <a 
                href="https://www.youtube.com/watch?v=23Bw0RcKT90" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-2xl"
              >
                Click to watch on YouTube
              </a>
            </noscript>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
