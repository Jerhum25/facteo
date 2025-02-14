import React, { useEffect, useState } from "react";
import "react-barcode-scanner/polyfill";
import { LuPenLine } from "react-icons/lu";
import { MdFlashOff } from "react-icons/md";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router-dom";
import GenericButton from "../../components/GenericButton/GenericButton";
import beepSound from "../../sounds/bip.mp3";
import "./ObjectScan.scss";

function ObjectScan({ onScan }) {
  const [data, setData] = useState("Aucun code scanné");

  function playBeep() {
    const beep = new Audio(beepSound);
    beep.play();
  }

  useEffect(() => {
    const storedCodes = JSON.parse(localStorage.getItem("scannedCodes")) || [];
    setData(storedCodes);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="objectScanContainer">
      <GenericButton icon={<MdFlashOff />} />
      <GenericButton icon={<LuPenLine />} />
      <BarcodeScannerComponent
        onUpdate={(err, result) => {
          if (result) {
            setData(result.text);
            playBeep();
            localStorage.setItem("objectNumber", result.text);
            navigate("/ObjectDetails");

            if (onScan) {
              onScan(result.text);
            }
          }
        }}
      />
      <GenericButton text="remise groupée" />;{/* <p>Résultat : {data}</p> */}
    </div>
  );
}

export default ObjectScan;
