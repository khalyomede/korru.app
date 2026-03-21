const vibrate = (duration: VibratePattern): void => {
    if ("vibrate" in navigator && (typeof navigator.vibrate === "function")) {
        navigator.vibrate(duration);
    }
};

export default vibrate;
