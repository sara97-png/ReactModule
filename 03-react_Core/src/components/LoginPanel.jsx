import { use, useState } from "react";

export default function LoginPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <div>
      <h2>Conditional Rendering Demonstracija</h2>

      {/* 1. Ternarni operator */}
      {isLoggedIn ? (
        <p>Dobrodošla natrag</p>
      ) : (
        <p>Nisi prijavljena. Molimo prijavi se.</p>
      )}

       {/* 2. Kratki zapis s && */}
       {isLoggedIn && <button type="button" onClick={toggleLogin}>Odjava</button>}
       {!isLoggedIn && <button type="button" onClick={toggleLogin}>Prijava</button>}
    </div>
  );
}
