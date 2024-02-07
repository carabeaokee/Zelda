import React from 'react';
import { useEffect, useState } from 'react'

type Monster = {
    category:         string;
    common_locations: string[];
    description:      string;
    dlc:              boolean;
    drops:            string[];
    id:               number;
    image:            string;
    name:             string;
}

function Monsters() {
    const [monsters, setMonsters] = useState<Monster[] | null>(null);
const monstersUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"

    const getMonsters = async () => {
        try {
            const response = await fetch(monstersUrl);
            const result = await response.json();
            // console.log("result :>> ", result);
            setMonsters(result.data);
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    useEffect (() => {
        getMonsters();
    }, []);

    return (
        <>
        <h1>Monsters</h1>
        {/* <div>
            {monsters &&
            monsters.map((monster) => {
                return (
                    <div key={monster.id}>
                        <p>{monster.name}</p>
                        <img src={monster.image} alt={monster.name}/>
                        </div>
                );
            })}
        </div> */}
        </>
      );
    }

export default Monsters;