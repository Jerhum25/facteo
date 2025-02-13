// import React, { useEffect, useState } from "react";
// // import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import { useNavigate } from "react-router-dom";
// import beepSound from "../../sounds/bip.mp3";
// import "./ObjectScan.scss";
// function ObjectScan({ onScan }) {

// const [data, setData] = useState("Aucun code scanné");

//   function playBeep() {
//     const beep = new Audio(beepSound);
//     beep.play();
//   }

//   useEffect(() => {
//     const storedCodes = JSON.parse(localStorage.getItem("scannedCodes")) || [];
//     setData(storedCodes);
//   }, []);
//   const navigate = useNavigate();
//   return (
//     <div className="objectScan">
//       <h2>Scanner de Code-Barres</h2>
//       {/* <BarcodeScannerComponent
//         onUpdate={(err, result) => {
//           if (result) {
//             setData(result.text);
//             playBeep();
//             localStorage.setItem("objectNumber", result.text);
//             navigate("/ObjectDetails");

//             if (onScan) {
//               onScan(result.text);
//             }
//           }
//         }}
//       /> */}
//       <p>Résultat : {data}</p>
//     </div>
//   );
// }

// export default ObjectScan;
