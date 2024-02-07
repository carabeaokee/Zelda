import React from 'react';
import { useEffect, useState } from 'react'

type Treasure = {
    
    category:         string;
    common_locations: string[];
    description:      string;
    dlc:              boolean;
    drops:            string[];
    id:               number;
    image:            string;
    name:             string;

}

function Treasure() {
    const [treasure, setTreasure] = useState<Treasure[] | null>(null);
const treasureUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure"

    const getTreasure = async () => {
        try {
            const response = await fetch(treasureUrl);
            const result = await response.json();
            // console.log("result :>> ", result);
            setTreasure(result.data);
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    useEffect (() => {
        getTreasure();
    }, []);

    // In short, do obj['myProperty'], instead of obj.myProperty.

  return (
    <>
    <h1>Treasure</h1>
  <div>
        {treasure &&
        treasure.map((treasures) => {
            return (
                <div key={treasures.id}>
                    <p>{treasures.name}</p>
                    <img src={treasures.image} alt={treasures.name}/>
                    </div>
            );
        })}
    </div> 
    </>
    );
  }

  export default Treasure;


