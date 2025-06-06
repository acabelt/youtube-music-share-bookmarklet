javascript: (function () {
  if (!window.location.hostname.includes("youtube.com")) {
    alert("Please use this on a YouTube or YouTube Music page");
    return;
  }
  try {
    const url = new URL(window.location.href);
    let videoId = "";
    if (url.hostname.includes("music.youtube.com")) {
      videoId = url.searchParams.get("v");
    } else if (
      url.hostname.includes("youtube.com") ||
      url.hostname.includes("youtu.be")
    ) {
      videoId = url.searchParams.get("v") || url.pathname.split("/").pop();
    }
    if (!videoId) {
      throw new Error("Could not find video ID in URL");
    }
    const titleElement =
      document.querySelector("yt-formatted-string.title.ytmusic-player-bar") ||
      document.querySelector("h1.ytd-video-primary-info-renderer") ||
      document.querySelector("h1.title");
    if (!titleElement) {
      throw new Error("Could not find title element");
    }
    const pageTitle = titleElement.textContent.trim();
    const slug = pageTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    const markdown = `${slug}.md\n---\ntitle: "${pageTitle}"\nurl: https://www.youtube.com/watch?v=${videoId}\ndate: ${formattedDate}\n---`;
    navigator.clipboard
      .writeText(markdown)
      .then(() => {
        const message = document.createElement("div");
        message.textContent = "Markdown copied to clipboard!";
        Object.assign(message.style, {
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "#4CAF50",
          color: "white",
          padding: "15px 25px",
          borderRadius: "4px",
          zIndex: "9999",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          fontFamily: "Arial,sans-serif",
          fontSize: "14px",
        });
        document.body.appendChild(message);
        setTimeout(() => {
          document.body.removeChild(message);
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        prompt("Copy this markdown:", markdown);
      });
  } catch (error) {
    console.error("Error:", error);
    alert("Error: " + error.message);
  }
})();
