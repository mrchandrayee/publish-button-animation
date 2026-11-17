# Publish Button Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/publish-button-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable HTML/CSS/JavaScript reconstruction of the uploaded **5.07-second** screen recording (720 × 1280, 30 fps).

## Run
1. Extract `publish-button-animation.zip`.
2. Open `index.html` in Chrome, Edge, Firefox or Safari.
3. Click either **Publish** button.
4. It transitions through **Loading** (spinner) to **Done** (check icon).
5. Click a completed button again to replay the animation. Each button has its own state.

No npm install, bundler, backend or API key is required.

Optional local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## What is visible in the video

The screen is a dark navy page with a centered two-line title:
**Publish Button / Animation**

Below it is a wide, pale blue-grey demonstration panel split vertically:
- Left half: very light surface with a dark charcoal Publish button.
- Right half: near-black surface with a white Publish button.

Both buttons have a small cloud-upload icon and label. The video demonstrates the states:
- **Publish** — initial state.
- **Loading** — cloud transitions away and an upload/loading indicator appears.
- **Done** — a checkmark appears and the label changes.

The left and right buttons animate independently. The video also shows three source-preview cards below the handle `@_code_and_chill_`:
- `index.html`
- `styles.css`
- `app.js`

## Source extraction note

The video shows a small code-preview strip, not a full source editor. Most code characters are too small to transcribe reliably at this resolution. The HTML/CSS/JS source panels in this reconstruction explain the visible structure and behavior, but they are not claimed to be exact copies of the original snippets or the original repository.

## Implemented functionality
- Two independently interactive Publish buttons.
- Dark-on-light and light-on-dark button treatments.
- Cloud upload icon, loading spinner and success checkmark.
- State transition: Publish → Loading → Done.
- Click a completed button to replay.
- Disabled state while publishing to prevent duplicate clicks.
- Keyboard activation with Enter and Space.
- Responsive layout for smaller screens.
- Reduced-motion preference support.

## Files
- `index.html` — title, split demo panel, buttons and code-preview panels.
- `styles.css` — page styling, button states, spinner animation and responsive rules.
- `app.js` — independent button state machine and click/keyboard handling.
- `README.md` — observations and run guide.

## Limitations
This is a frontend animation demo. The “publish” action is simulated; no file upload, publishing endpoint, server request, authentication or database is connected. The code-preview cards are explanatory reconstructions because the source text in the recording is too small to read with confidence.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
