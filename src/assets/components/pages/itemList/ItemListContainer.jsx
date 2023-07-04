import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../../../productsMock";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const tarea = new Promise((resolve, reject) => {
            resolve(products);
            reject("Error Promise");
        });

        tarea
            .then((respuesta) => setItems(respuesta))
            .catch((error) => console.log(error));
    }, []);

    return <ItemList items={items} />;
};
export default ItemListContainer;