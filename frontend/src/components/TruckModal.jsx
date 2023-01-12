import React from "react";

export default function TruckModal() {
  return (
    <div className="m-2 h-[80vh] w-[90vw] flex flex-wrap bg-slate-200">
      <div className="flex w-full justify-between">
        <div>
          <img
            className="h-60 w-96"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Pompiers_Strasbourg_-_Renault_Midlum-5.JPG/1200px-Pompiers_Strasbourg_-_Renault_Midlum-5.JPG"
            alt="camion"
          />
        </div>
        <div className="w-1/2 flex-col items-end border">
          <h2 className="w-1/3">Recapitulatif</h2>
          <h4 className="">Camion Réservé</h4>
        </div>
      </div>
      <div className="h-52 w-80 flex flex-wrap justify-end">
        <p className="w-1/2 h-full">
          Descriptioo kdid idizi idiizjdidin izdiidjidzi,zin ooooooooooon
        </p>
      </div>
      <div className="w-full h-[20vh] bg-slate-200 mb-4">
        <label htmlFor="message">
          Message :
          <textarea
            className="h-full w-full border focus:text-red-600 shadow-lg"
            placeholder="Type a description of incident..."
            type="text-area"
          />
        </label>
      </div>
    </div>
  );
}
