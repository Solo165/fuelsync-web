# FuelSync Web

The public-facing web app for FuelSync — landing page, interactive document map, and prototype embed.

## Structure

```
src/
├── pages/
│   ├── Landing.jsx     ← Home page (fuelsync.vercel.app)
│   ├── Docs.jsx        ← Interactive document map (/docs)
│   └── Prototype.jsx   ← Expo prototype embed (/prototype)
├── components/
│   └── Nav.jsx         ← Top navigation
├── App.jsx             ← Router
├── main.jsx            ← Entry point
└── index.css           ← Global styles + CSS variables
```

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173

### 3. Run Expo prototype alongside (in a separate terminal)
```bash
cd ../mealmatch
npx expo start --web
```
The prototype page at /prototype will connect to http://localhost:8081 automatically.

## Deploy to Vercel

### One-time setup
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — just click Deploy
4. Your site is live at fuelsync.vercel.app (or your custom domain)

### Every update after that
```bash
git add .
git commit -m "your message"
git push
```
Vercel auto-deploys on every push. No extra steps.

## Connecting the live Expo prototype

Once you deploy your Expo app for web (separate deployment), update this line in `src/pages/Prototype.jsx`:

```jsx
const EXPO_URL = 'http://localhost:8081'  // ← change to your deployed Expo web URL
```

Then redeploy.

## Adding new documents to the map

Open `src/pages/Docs.jsx` and add a new entry to the `DOCS` array:

```js
{
  num:'11', title:'Your New Doc', color:'#7B5FFF', tier:'Foundation',
  status:'Complete', statusColor:'#7B5FFF',
  sub:'One line description',
  summary:'2-3 sentence summary for investors.',
  sections:[
    { h:'Section heading', p:'Paragraph content.' },
    { h:'Another section', ul:['Point one', 'Point two'] }
  ]
}
```

Then add the index to the correct tier in the `TIERS` array.
