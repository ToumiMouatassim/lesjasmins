"use client";
import { useState } from "react";

export default function VideoPopup() {
  const [show, setShow] = useState(true);

  const closePopup = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeStyle} onClick={closePopup}>
          ✕
        </button>

        <h2>Bienvenue à l’Hôpital Privé Les Jasmins</h2>

        <video
            controls
            autoPlay
            muted
            playsInline
            width="100%"
            onEnded={closePopup}
            >
            <source src="/img/Hôpital Privé Les Jasmins - مستشفى الياسمين الخاص.mp4" type="video/mp4" />
            </video>

        <button style={buttonStyle} onClick={closePopup}>
          Entrer sur le site
        </button>
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle: React.CSSProperties = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  width: "600px",
  textAlign: "center",
  position: "relative",
};

const closeStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "15px",
  border: "none",
  background: "transparent",
  fontSize: "20px",
  cursor: "pointer",
};

const buttonStyle: React.CSSProperties = {
  marginTop: "15px",
  padding: "10px 20px",
  background: "#2c7be5",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};