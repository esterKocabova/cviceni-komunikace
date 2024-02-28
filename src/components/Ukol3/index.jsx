import { Product } from "./Product";
import { useState } from "react";

/*
Zadání: Budeme chtít, aby uživatel při kliknutí na nějaký kousek oblečení uviděl jeho cenu
  přímo pod nadpisem.
Krok 1: Vytvořte stav s názvem `price` a nastavte jej na na začátku na 0. Zobrazte stav pod
  nadpisem.
Krok 2: Do komponenty `Product` přidejte prop `onSelectPrice`, kterou komponenta zavolá při
  kliknutí na nějaký kousek oblečení a předá jí svou cenu.
Krok 3: Do prop `onSelectPrice` předejte funkci, která nastaví cenu do stavu. Vyzkoušejte,
  že stránka funguje, jak má.
*/

export const Ukol3 = () => {
  const [price, setPrice] = useState (0)

  return (
    <>
      <p>
        Cena: <strong>{price} Kč</strong>
      </p>
      <div className="products">
        <Product onSelectPrice={setPrice} value={price} image="/clothing/item01.jpg" name="Bunda" price={500} />
        <Product value={price} image="/clothing/item02.jpg" onSelectPrice={setPrice} name="Halenka" price={1200} />
        <Product value={price} image="/clothing/item03.jpg" onSelectPrice={setPrice} name="Svetr" price={1500} />
        <Product value={price} image="/clothing/item04.jpg" onSelectPrice={setPrice} name="Mikina" price={800} />
      </div>
    </>
  );
};
