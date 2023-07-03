import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../../../productsMock";

// let saludo = "Bienvenida a Nuestra Joyería"
// return (
//     <ItemList saludo={saludo} />
// )

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const tarea = new Promise((resolve, reject) => {
            resolve(products);
            reject("salio todo mal");
        });

        tarea
            .then((respuesta) => setItems(respuesta))
            .catch((error) => console.log(error));

        // .finally(()=>console.log("hola"))
    }, []);

    return <ItemList items={items} />;
};
export default ItemListContainer;