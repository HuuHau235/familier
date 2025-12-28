📱 FAMILY EMOTIONS

A mobile application that helps family members share and track their daily emotions ❤️

🎯 Project Goals

Runs on Android & iOS

Suitable for all family members

Simple, warm, and friendly user interface

Clean, readable, and easy-to-learn codebase

Easy to scale as the application grows

Ready for team collaboration with GitHub

🧱 Tech Stack

Expo (Managed Workflow)

React Native

TypeScript

Expo Router – file-based routing

Axios – API communication

AsyncStorage – local data storage

ESLint + Prettier – code quality & formatting

🚀 How to Run the Project
1️⃣ Clone the repository
git clone https://github.com/USERNAME/cam-xuc-gia-dinh.git
cd cam-xuc-gia-dinh

2️⃣ Install dependencies
npm install

3️⃣ Start the app
npm start


👉 Then you can:

Press a → Android Emulator

Press i → iOS Simulator

Or use Expo Go to scan the QR code

🗂️ Project Structure (VERY IMPORTANT)
cam-xuc-gia-dinh/
│
├── app/                     # 📱 Screens (Expo Router)
├── components/              # 🧩 Reusable UI components
├── hooks/                   # 🪝 Custom hooks
├── services/                # 🌐 API layer
├── store/                   # 🧠 Shared state
├── theme/                   # 🎨 Colors & styling
├── types/                   # 🧾 TypeScript types
├── utils/                   # 🔧 Helper functions
├── assets/                  # 🖼️ Images, icons
│
├── app.json
├── tsconfig.json
├── .gitignore
└── README.md

📱 app/ – Screens (Expo Router)

👉 Each file inside app/ represents one screen

app/
├── index.tsx        # Home
├── splash.tsx       # Splash / Welcome
├── login.tsx        # Login
├── register.tsx     # Register
├── add-emotion.tsx  # Add Emotion
├── profile.tsx      # Profile / Family
└── _layout.tsx      # Shared layout

📌 Rules

❌ Do not put reusable components here

❌ Do not hard-code data

✅ Business logic → hooks

✅ UI → components

🧩 components/ – Reusable UI Components
components/
├── common/
│   ├── AppButton.tsx
│   ├── AppInput.tsx
│   └── AppText.tsx
│
└── emotion/
    └── EmotionCard.tsx

👉 Use when:

UI appears on multiple screens

Buttons, inputs, cards, text, etc.

📌 Principles:

Receive data via props

❌ No API calls

❌ No complex business logic

🪝 hooks/ – Custom Hooks
hooks/
└── useEmotion.ts

👉 Use when:

Logic is reused in multiple places

You want screens to stay clean and readable

Examples:

Fetch emotion lists

Handle form submission logic

🌐 services/ – API Layer
services/
└── api.ts

👉 Contains only:

Axios configuration

Backend API functions

📌 Never call APIs directly inside screens

🧠 store/ – State Management
store/
└── emotion.store.ts

👉 Used for:

State shared across multiple screens

Start simple (useState)

Easy to upgrade later (Zustand / Redux)

🎨 theme/ – Theme & Styling
theme/
├── colors.ts
└── spacing.ts

👉 Why:

Avoid hard-coded colors in components

Quickly change the app’s theme globally

🧾 types/ – TypeScript Types
types/
└── emotion.ts

👉 Contains:

Interfaces

Shared types

📌 Benefits:

Safer code

Better IDE autocomplete

🔧 utils/ – Helper Functions
utils/
└── storage.ts

👉 Used for:

AsyncStorage helpers

Data formatting

Small reusable utility functions