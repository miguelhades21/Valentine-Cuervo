// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Babyyy",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Holi, tengo una pregunta para ti...",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🩵','⭐​','💝','🩵','⭐​'],                        // Heart emojis
        bears: ['🐻','🐣','⭐​','🐥','🐱​','🖤']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "¿Do you like me?🥺",                               // First interaction
            yesBtn: "Sí",                                             // Text for "Yes" button
            noBtn: "No",                                              // Text for "No" button
            secretAnswer: "Bueno, reformulo..."                       // Secret hover message
        },
        second: {
            text: "¿Cuánto me quieres?​👉​👈​",                         // For the love meter
            startText: "¿Así?",                                       // Text before the percentage
            nextBtn: "So... 🤓​​"                                       // Text for the next button
        },
        third: {
            text: "¿Quieres celebrar San Valentín conmigo este 14 de febrero?🌹",  // The big question!
            yesBtn: "¡Sí!",                                                        // Text for "Yes" button
            noBtn: "No..."                                                         // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW, ¡¿tanto me quieres?! 🩵🥰🩵🥰🩵",  // Shows when they go past 5000%
        high: "Oh... cute :) 🩵",              // Shows when they go past 1000%
        normal: "🤗"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        message: "¡Ahora tenemos una cita!🎉🩵🤍",
        title: "⭐ Yo también te quiero mucho ⭐",
        emojis: "⭐🩵🤗🤍⭐"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#2D51A5",      // Color 3
        backgroundEnd: "#78C0E0",        // Color 1
        buttonBackground: "#0E0E52",     // Color 5
        buttonHover: "#0E0E52",          // Color 5
        textColor: "#0E0E52"             // Color 5
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "12s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "60px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.7s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.20        // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dvm97cssx/video/upload/v1770492589/RAYE_-_WHERE_IS_MY_HUSBAND_radio_hits_beats__TheMP3.Info_p2uss8.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
