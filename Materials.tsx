import React from 'react';
import { useEffect, useState } from 'react'

type Material = {

    category:         string;
    common_locations: string[];
    cooking_effect:   string;
    description:      string;
    dlc:              boolean;
    hearts_recovered: number;
    id:               number;
    image:            string;
    name:             string;
}

function Materials() {
    const [materials, setMaterials] = useState<Material[] | null>(null);
const materialsUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials"

    const getMaterials = async () => {
        try {
            const response = await fetch(materialsUrl);
            const result = await response.json();
            // console.log("result :>> ", result);
            setMaterials(result.data);
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    useEffect (() => {
        getMaterials();
    }, []);

    return (
        <>
        <h1>Materials</h1>
        {/* <div>
            {materials &&
            materials.map((material) => {
                return (
                    <div key={material.id}>
                        <p>{material.name}</p>
                        <img src={material.image} alt={material.name}/>
                        </div>
                );
            })}
        </div> */}
        </>
      );
    }

export default Materials;