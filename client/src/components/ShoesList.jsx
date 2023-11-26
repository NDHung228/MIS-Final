import { Link } from "react-router-dom";
import Shoes from "./Shoes";
import { useEffect, useState } from "react";
import shoesData from "../data/shoes.json"

function getShoesList(shoesData, status) {
    const filter = status === '/shoes/2hand' ? '2hand' : 'new'

    return shoesData.filter((shoes) => shoes.status === filter)
}

function ShoesList({path}) {
    const [shoesList, setShoesList] = useState(getShoesList(shoesData, path))
    
    useEffect(() => {
        setShoesList(getShoesList(shoesData, path))
    }, [path])

    return (
        <>
            <section className="py-5 pt-0">
                <div className="grid grid-cols-3 w-full">
                    {
                        shoesList.map((shoes) =>
                            <Link className='mx-2 my-2' to={`/shoes/id`}>
                                <Shoes thumb={shoes.image} name={shoes.name} price={shoes.price} old={shoes.status === '2hand'} />
                            </Link>
                        )
                    }
                </div>
            </section>
        </>
    );
}

export default ShoesList