import { useState } from "react";

function App() {
  const [message, setMessage] = useState("pesan hari ini");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("lagi belajar dasar react")}>
        Ubah Pesan
      </button>
    </div>
  );
}

export default App;
