import React from 'react';
import { useEffect, useState } from 'react'

type Creature = {

    category:         string;
    common_locations: string[];
    cooking_effect:   string;
    description:      string;
    dlc:              boolean;
    edible:           boolean;
    hearts_recovered: number;
    id:               number;
    image:            string;
    name:             string;

}

function Creatures() {
    const [creatures, setCreatures] = useState<Creature[] | null>(null);
const creaturesUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures"

    const getCreatures = async () => {
        try {
            const response = await fetch(creaturesUrl);
            const result = await response.json();
            // console.log("result :>> ", result);
            setCreatures(result.data);
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    useEffect (() => {
        getCreatures();
    }, []);

  return (
    <>
    <h1>Creatures</h1>
    {/* <div>
        {creatures &&
        creatures.map((creature) => {
            return (
                <div key={creature.id}>
                    <p>{creature.name}</p>
                    <img src={creature.image} alt={creature.name}/>
                    </div>
            );
        })}
    </div> */}
    </>
  );
}

export default Creatures;