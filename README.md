# Podcast mini-app
Mini app for listening to podcasts.

## Getting Started

### Install

Download the repo.

```bash
git clone https://github.com/GermanPaul/podcast-mini-app.git
cd podcast-mini-app
```

Install dependencies.

```bash
pnpm install
```

Create a new `.env` file in the root directory and save the desired configuration variables.
```bash
VITE_PODCASTS_API_URL=https://itunes.apple.com
VITE_CORS_PROXY=https://corsproxy.io
VITE_PODCASTS_GENRE_ID=1310
VITE_PODCASTS_LIMIT=100
```

### Run
Serve with hot reload at <http://localhost:5173>.

```bash
pnpm run dev
```

### Test

Run unit tests.
```bash
pnpm run test
```

### Build

Create an application bundle suitable for deployment via a static hosting service.
```bash
pnpm run build
```
