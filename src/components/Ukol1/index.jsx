import { useState } from "react";

/*
Zadání: Začneme velmi jednoduše. Zařiďte, aby se po kliknutí na tlačítko zobrazilo jméno, které je
  uvnitř tlačítka. Zatím nejde o žádnou velkou komunikaci mezi komponentami, ale je to základ,
  který budeme dále rozvíjet.
*/

export const Ukol1 = () => {
  const [jmeno, setJmeno] = useState("Jirka");

  // const handleClick = () => {
  //   setJmeno 
  // }
  return (
    <>
      <p>
        <strong>{jmeno}</strong>
      </p>
      <div>
        <button onClick={(e) => setJmeno(e.target.textContent)}>Jirka</button>
        <button onClick={(e) => setJmeno(e.target.textContent)}>Honza</button>
        <button onClick={(e) => setJmeno(e.target.textContent)}>Tomáš</button>
        <button onClick={(e) => setJmeno(e.target.textContent)}>Šimon</button>
      </div>
    </>
  );
};
