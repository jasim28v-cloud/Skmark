// ☁️ MNAENCA 2026 - Sky Blue Luxury Configuration
// Firebase: gsde-8561e | Cloudinary: dshgbhw4h
// ✨ PREMIUM: Notifications + Compact Grid + Delete Videos + Slide Animation

const firebaseConfig = {
    apiKey: "AIzaSyAz_0Sv28XCO6_6p8UD89tpcz-li9hoXrA",
    authDomain: "gsde-8561e.firebaseapp.com",
    databaseURL: "https://gsde-8561e-default-rtdb.firebaseio.com",
    projectId: "gsde-8561e",
    storageBucket: "gsde-8561e.firebasestorage.app",
    messagingSenderId: "392289592817",
    appId: "1:392289592817:web:4fb1d3eb94975b1d9b9050",
    measurementId: "G-08HN23967R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "dshgbhw4h";
const UPLOAD_PRESET = "sf34_gn";

// ☁️ MNAENCA Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #0c4a6e, #0369a1, #0284c7)",
    "linear-gradient(135deg, #082f49, #0c4a6e, #0369a1)",
    "linear-gradient(135deg, #164e63, #155e75, #0e7490)",
    "linear-gradient(135deg, #1e3a8a, #2563eb, #3b82f6)",
    "linear-gradient(135deg, #0284c7, #38bdf8, #7dd3fc)",
    "linear-gradient(135deg, #0a1628, #0f2847, #0369a1)"
];

// ☁️ App Info
const APP_NAME = "MNAENCA";
const APP_VERSION = "2026.2";
const PRIMARY_COLOR = "#0ea5e9";
const SECONDARY_COLOR = "#38bdf8";

console.log('☁️ %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #0ea5e9; font-size: 16px; font-weight: bold;');
