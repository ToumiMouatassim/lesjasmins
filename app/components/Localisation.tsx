import { QRCodeCanvas } from "qrcode.react";

export default function HospitalQR() {
  return (
    <div>
      {/* <h2>Localisation de l'hôpital</h2> */}
      <QRCodeCanvas value="https://maps.app.goo.gl/m1KghgNBzxqgmWax5" size={200} />
    </div>
  );
}