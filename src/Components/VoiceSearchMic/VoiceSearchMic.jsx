// src/Components/VoiceSearchMic/VoiceSearchMic.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fab, Tooltip } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: 10,
    right: 8,
    zIndex: 10,
    backgroundColor: "#ff3b3f00 !important",
    color: "#485162",
    width: 40,
    height: 40,
    minWidth: 40,
    padding: 0,
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#ff3b3f",
      transform: "scale(1.1)",
    },
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 22,
  },
  pulse: {
    animation: "$pulse 1.5s infinite",
  },
  "@keyframes pulse": {
    "0%": { boxShadow: "0 0 0 0 rgba(255,90,95,0.6)" },
    "70%": { boxShadow: "0 0 0 12px rgba(255,90,95,0)" },
    "100%": { boxShadow: "0 0 0 0 rgba(255,90,95,0)" },
  },
}));

const CITY_MAP = {
  anthem: "anthem",
  buckeye: "buckeye",
  chandler: "chandler",
  gilbert: "gilbert",
  glendale: "glendale",
  goodyear: "goodyear",
  mesa: "mesa",
  "paradise valley": "paradise-valley",
  peoria: "peoria",
  phoenix: "phoenix",
  "queen creek": "queen-creek",
  "san tan valley": "san-tan-valley",
  scottsdale: "scottsdale",
  tempe: "tempe",
  tolleson: "tolleson",
};

function VoiceSearchMic() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [listening, setListening] = useState(false);

  const startListening = () => {
    if (listening) return;
    setListening(true);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice search not supported in your browser.");
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript.trim().toLowerCase();
      let target = "/locations";

      for (const [key, slug] of Object.entries(CITY_MAP)) {
        if (spoken.includes(key) || spoken.includes(slug.replace(/-/g, " "))) {
          target = `/${slug}`;
          break;
        }
      }

      if (spoken.match(/movie|screen|rental|night|party|dive|cinema/i)) {
        navigate(target);
      } else {
        navigate("/");
      }
    };

    recognition.onerror = (event) => {
      if (event.error === "not-allowed") {
        alert("Microphone access denied. Please allow it in your browser settings.");
      }
      setListening(false);
    };

    recognition.onend = () => setListening(false);

    try {
      recognition.start();
    } catch (err) {
      setListening(false);
    }
  };

  return (
    <Tooltip title={listening ? "Listening..." : "Say your city"} placement="left">
      <Fab
        onClick={startListening}
        className={`${classes.fab} ${listening ? classes.pulse : ""}`}
        aria-label="voice search"
        disabled={listening}
      >
        {listening ? <MicIcon className={classes.icon} /> : <MicOffIcon className={classes.icon} />}
      </Fab>
    </Tooltip>
  );
}

export default VoiceSearchMic;