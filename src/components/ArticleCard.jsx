import React, { useState } from 'react';


export default function ArticleCard({ product }) {
    const [likes, setLikes] = useState(false);
    const handleLikes = () => {
        setLikes(!likes);

    }
    const [counter, setCounter] = useState(product.item)
    const [statut, setStatut] = useState("")
    const handleClick1 = () => {
        if (counter === 0) {
            setStatut("NotAvalaible")
        }
        else if (counter > 0) {
            setCounter(counter - 1);
        }
        else {
            setStatut("NotAvalaible")

        }
    }

    const handleClick2 = () => {
        if (counter === 1) {
            setStatut("NotAvalaible")
        }
        else if (counter > 0) {
            setCounter(counter - 2);
        }
        else {
            setStatut("NotAvalaible")

        }

    }
    const [show, setShow] = useState(false)
    const handleShow = () => {
        if (show) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }



    return (
        <>
            <div className=" card bg-base-100 w-70 shadow-xl items-center text-center block justify-between p-2">
                <div className="card-body">

                    <div className="flex justify-between">
                        <h2 className="card-title">{product.nom}</h2>
                        <div className="card-actions justify-end">
                            <button onClick={handleLikes} className="btn btn-secondary">
                                {likes ? '❤️' : '🤍'}
                            </button>
                        </div>
                    </div >
                    <img src={product.image} alt="product" className="w-60 h-48 object-cover" />
                    <div className=' card-actions justify-between max-w-60 flex mt-4'>
                        <p>Specification :</p>
                        <button className="btn btn-secondary " onClick={handleShow}>
                            {show ? 'Hide' : 'Show'}
                        </button>

                        {show && (
                            <p>{product.Specification}</p>
                        )}

                    </div>
                    <p>
                        {counter} {counter ? 'items Avalaible' : 'Not Avalaible'}

                    </p>
                    <p> Prix : ${product.prix}</p>

                    <div className="card-actions flex justify-around  items-center ">
                        <button onClick={handleClick1}
                            className='bg-fuchsia-600 
                            hover:bg-gray-600
                            py-2 px-3 text-xl '>
                            Buy
                        </button>
                        <button onClick={handleClick2}
                            className='bg-fuchsia-600
                            hover:bg-gray-600 
                                py-2 px-3 text-xl '>
                            Buy2</button>
                        <p></p>
                    </div>
                </div >

                <hr />
            </div >
        </>
    )
}