
import { useEffect, useRef, useState } from "react";

// Add proper YouTube IFrame API typing
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: Record<string, any>;
          events?: Record<string, (event: any) => void>;
        }
      ) => any;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoSection = () => {
  const [isYouTubeApiReady, setIsYouTubeApiReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [useYouTubeAPI, setUseYouTubeAPI] = useState(true); // Track which player to use
  const playerRef = useRef<any>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoIdRef = useRef("7qxEnBR2BwQ");
  const apiLoadingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Define the onYouTubeIframeAPIReady function globally
    window.onYouTubeIframeAPIReady = () => {
      console.log("YouTube API is ready");
      setIsYouTubeApiReady(true);
    };

    // Set a timeout to handle cases where the API might be slow to load
    apiLoadingTimeoutRef.current = setTimeout(() => {
      if (!isYouTubeApiReady) {
        console.log("YouTube API load timeout - using fallback");
        // Using a direct iframe embedding as fallback
        setUseYouTubeAPI(false); // Switch to fallback player
        setIsLoading(false);
      }
    }, 3000); // 3 second timeout

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
      if (apiLoadingTimeoutRef.current) {
        clearTimeout(apiLoadingTimeoutRef.current);
      }
    };
  }, []);

  // Initialize player once API is ready
  useEffect(() => {
    if (!isYouTubeApiReady || !useYouTubeAPI) return; // Don't initialize if we're using fallback

    try {
      console.log("Initializing YouTube player");
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: videoIdRef.current,
        playerVars: {
          autoplay: 1,
          mute: 1, // Start muted to allow autoplay in most browsers
          controls: 1,
          playsinline: 1,
          enablejsapi: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          origin: window.location.origin,
          vq: "hd720", // Start with a lower quality that loads faster
        },
        events: {
          onReady: (event: any) => {
            console.log("YouTube player ready");
            setIsLoading(false);
            event.target.unMute(); // Unmute once ready
            event.target.playVideo();
            
            // Clear the timeout since we've successfully loaded the player
            if (apiLoadingTimeoutRef.current) {
              clearTimeout(apiLoadingTimeoutRef.current);
            }
            
            // Set a higher quality after player is loaded and playing
            setTimeout(() => {
              if (playerRef.current) {
                playerRef.current.setPlaybackQuality("hd1080");
              }
            }, 3000);
          },
          onError: (event: any) => {
            console.error("YouTube player error:", event);
            setIsLoading(false);
            // Switch to fallback on error
            setUseYouTubeAPI(false);
          },
          onStateChange: (event: any) => {
            // Video has started playing
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsLoading(false);
            }
          },
        },
      });
    } catch (error) {
      console.error("Error initializing YouTube player:", error);
      setIsLoading(false);
      // Switch to fallback on error
      setUseYouTubeAPI(false);
    }
  }, [isYouTubeApiReady, useYouTubeAPI]);

  return (
    <section className="py-24 bg-divine-dark/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={videoContainerRef}
            className="relative w-full overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(155,135,245,0.15)] border border-white/10 transition-all duration-500"
            style={{ aspectRatio: "16/9" }}
          >
            {/* YouTube API player container - only show if using API */}
            {useYouTubeAPI && (
              <div id="youtube-player" className="absolute inset-0 w-full h-full"></div>
            )}
            
            {/* Fallback iframe - only show if not using API */}
            {!useYouTubeAPI && !isLoading && (
              <iframe 
                src={`https://www.youtube.com/embed/${videoIdRef.current}?autoplay=1&mute=0&controls=1&playsinline=1&modestbranding=1&rel=0&showinfo=0&origin=${window.location.origin}`}
                title="Mary Magdalene Video" 
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            )}
            
            {/* Loading spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-full border-4 border-divine border-t-transparent animate-spin"></div>
                  <div className="text-divine text-xl font-[Cinzel]">Loading video...</div>
                </div>
              </div>
            )}
            
            {/* Fallback for when JavaScript is disabled */}
            <noscript>
              <a 
                href="https://www.youtube.com/watch?v=7qxEnBR2BwQ" 
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
