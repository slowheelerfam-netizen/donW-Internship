import React, { useState, useEffect } from "react";

const Countdown = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = expiryDate - now;

      if (distance <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [expiryDate]);

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        padding: "5px 12px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold",
        zIndex: 5,
        backdropFilter: "blur(4px)",
      }}
    >
      {timeLeft}
    </div>
  );
};

export default Countdown;
