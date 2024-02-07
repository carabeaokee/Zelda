import React from 'react';
import { useEffect, useState } from 'react'

type EquipmentItem = {
    category:         string;
    common_locations: string[];
    description:      string;
    dlc:              boolean;
    id:               number;
    image:            string;
    name:             string;
}

type EquipmentProps = {
    attack:           number;
    defense:          number;
}


function Equipment() {
    const [equipment, setEquipment] = useState<EquipmentItem[] | null>(null);
    const [equipmentProps, setEquipmentProps] = useState<EquipmentProps[] | null>(null);
const equipmentUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment"

    const getEquipment = async () => {
        try {
            const response = await fetch(equipmentUrl);
            const result = await response.json();
            // console.log("result :>> ", result);
            setEquipment(result.data);
            setEquipmentProps(result.data.properties);
            console.log("props :>> ", equipmentProps);
        } catch (error) {
            console.log("error :>> ", error);
        }
    };

    useEffect (() => {
        getEquipment();
    }, []);

  return (
    <>
    <h1>Equipment</h1>
       <div>
        {equipment &&
        equipment.map((equipmentItem) => {
            return (
                <div key={equipmentItem.id}>
                    <p>{equipmentItem.name}</p>
                    <img src={equipmentItem.image} alt={equipmentItem.name}/>
                    </div>
            );
        })}
    </div>  
    </>
  );
}


export default Equipment;