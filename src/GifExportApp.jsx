import { useState } from "react";
import {AddCategory, Gifgrid} from "./components"

export const GifExportApp = () => {

    const [categories, setCategories] = useState(['Gidle']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gif Export App</h1>

            <AddCategory

                onNewCategory={(event) => onAddCategory(event)}
            />

            {
                categories.map(category => (
                    <Gifgrid key={category} category={category} />
                ))
            }

        </>
    );
}
