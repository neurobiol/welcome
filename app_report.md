# welcome: README-driven GitHub Pages site (Vue + Vite + daisyUI)

## What I built (the default option in this zip)

A minimal **Vite + Vue 3** app styled with **Tailwind + daisyUI** that:

1. **Imports your repo’s `README.md`** at build time (`import readmeRaw from "../README.md?raw"`).
2. Converts it to HTML with `marked`.
3. Sanitizes it with `DOMPurify` (so you can safely include Markdown/HTML snippets).
4. Deploys the compiled static site to **GitHub Pages** using an **Actions workflow** on every push to `main`.

### Why this meets your goal
If you edit `README.md` and push, the GitHub workflow rebuilds and redeploys; the website updates to match the new README.

---

## How to use it in your existing repo named `welcome`

1. **Copy the files from this zip into the root of your repo** (same folder where `README.md` sits).
2. Commit + push to `main`.
3. In GitHub: **Settings → Pages → Build and deployment → Source: “GitHub Actions”**.
4. Wait for the workflow `Deploy GitHub Pages` to succeed.

Your site will appear at:
`https://<your-username>.github.io/welcome/`

---

## What you edit going forward

- **Only `README.md`** needs to change for the content to change.
- Put your “links to other apps / websites” directly in `README.md` as:
  - bullet lists
  - tables
  - sections with headings

---

## Options (so you can choose the simplest long-term path)

### Option A (this zip): Vue/Vite site that renders README
**Pros**
- Looks like an “app” and you can add components later.
- daisyUI styling out of the box.
- Safe markdown rendering (sanitized).
- Easy to add a navbar, cards, search, etc.

**Cons**
- Requires a build step (handled by Actions).
- Slightly more files than the pure-Pages approach.

### Option B: Pure GitHub Pages + Jekyll (no Node, no Vue)
You can make GitHub Pages render Markdown directly by having an `index.md` in the Pages source folder.
To keep it “README-driven”, you’d either:
- copy/paste content into `index.md`, or
- run a tiny Action that copies `README.md` → `index.md` before Pages builds.

**Pros**
- Minimal, very few moving parts.
- No Node dependencies.

**Cons**
- Harder to make it feel like an “app” with daisyUI components.
- Less control unless you customize Jekyll theme.

### Option C: Runtime fetch of README (no rebuild needed to update content)
A Vue app can fetch README from GitHub (raw URL) at runtime.
Then your Pages site can stay the same build output while the content always pulls the latest README.

**Pros**
- Content updates without waiting for rebuild.
- Always shows the `main` branch README immediately.

**Cons**
- Depends on external request to `raw.githubusercontent.com` (network + rate limits).
- If you later want private repos, this breaks.

---

## Notes / gotchas

- `vite.config.ts` sets `base: "/welcome/"` because your repo name is **welcome**.
  If you rename the repo, update that base path.
- If you later want multiple pages (e.g., `/apps`, `/about`), we can add Vue Router.
- If you want a **thumbnail / card grid** of your other apps, easiest is to keep a small section in README like:

  ### Apps
  - **App name** — short description — link

and later parse that section into cards.

