# Oporajito

**Learn a skill. Teach a skill. No money needed — just neighbors.**

Oporajito is a concept web app for hyperlocal skill-sharing in Bangladesh. Neighbors list
the skills they can teach and the skills they want to learn, then connect with people nearby
to swap knowledge for free — no tuition fees, no coaching centers.

This repo is a **front-end prototype**: a clickable mockup of the core user flow, built to
demonstrate the product concept and UI/UX before backend development.


---

## Preview


```md
![Home screen](<img width="1407" height="899" alt="Screenshot 2026-08-02 024516" src="https://github.com/user-attachments/assets/f7e7cb0f-4f90-44a6-b9ad-11baf69e50a5" />
)
![Chat screen](<img width="1405" height="894" alt="Screenshot 2026-08-02 024557" src="https://github.com/user-attachments/assets/7dcbf229-e830-4a15-a496-271219e40059" />
)
```

## Features

- **Phone-based login flow** — mobile number entry + OTP verification screen
- **Skill search & discovery** — search bar, skill tags, and district filters to find nearby neighbors
- **Neighbor cards** — ratings, distance, and skills offered at a glance
- **In-app chat** — inbox and live message thread between neighbors, keeping phone numbers private
- **Profile** — bio, skills taught / skills wanted, star ratings, and reviews
- Mobile-first design, presented in a phone-frame layout

## Tech stack

- **React** (Vite)
- **React Router** for navigation
- Plain CSS with a custom design-token system (no UI framework)
- All data is local mock data — no backend, database, or real SMS integration (yet)

## Getting started

**Requirements:** [Node.js](https://nodejs.org) (LTS) and npm.

```bash
git clone https://github.com/Ga-lib/oporajito-prototype.git
cd oporajito-prototype
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Try the flow

1. **Login** — enter any phone number → *Send verification code*
2. **OTP** — enter any 6 digits → *Verify & continue*
3. **Home** — search a skill, filter by district or tag, tap *Request* on a neighbor
4. **Chats** — open a conversation and send a message
5. **Profile** — view/edit bio and skills, see ratings and reviews

## Project structure

```
src/
  components/   Reusable UI (nav bar, neighbor card, star rating)
  data/         Mock data (users, neighbors, conversations)
  pages/        Screens (Login, Otp, Home, Profile, ChatList, ChatThread)
  App.jsx       Routes + phone-frame app shell
  index.css     Design tokens & global styles
```

## Roadmap

- Backend API (FastAPI) with real phone OTP auth (Firebase)
- MongoDB for user profiles, skills, and reviews
- Real-time chat
- District-wide skill matching and notifications

## Author

Built by [Ga-lib](https://github.com/Ga-lib).
