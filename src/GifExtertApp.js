import {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GifExtertApp = () =>{

    const [categories, setCategories] = useState(["one punch"]);

    return (
        <>
        <h2>GifExpertApp</h2>
            <AddCategory  setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map( cat =>(
                        <GifGrid key={cat} category = {cat}/>
                    )
                    )
                }
            </ol>
        </>
    );

}

export default GifExtertApp;