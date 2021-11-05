import React, { useState } from "react";

export default function Home() {
  const [state, setState] = useState(true);
  function changeState() {
    setState(() => {
      setState(!state);
    });
  }

  return (
    <div className="bg-gray-300 w-screen h-screen text-black flex flex-col item-center justify-start">
      <button
        onClick={changeState}
        className="w-18 h-16 bg-black text-white text-xl p-3 rounded mr-3 mt-3"
      >
        Toggle
      </button>
      {state && (
        <div className="text-center w-18 p-3 rounded mr-3 mt-3 h-16 bg-indigo-600 text-white text-2xl font-medium">
          Visible
        </div>
      )}
    </div>
  );
}
