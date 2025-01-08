import ArticleCard from "../components/ArticleCard";
import React, { useEffect, useState } from 'react';
import ProductFilter from "../components/Filtered";




export default function Home() {
    // Récupérer les données d'un serveur db.json 
    const [products, setProducts] = useState([]);

    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                //  On trie les données par ordre d'ajout récent
                // data.sort((a, b) => {
                //     return new Date(b.created_at) - new Date(a.created_at)
                // })
                setProducts(data);
                setError(null);   // Pour enlever l'erreur
            })
            .catch(err => setError(error.message))
    }, [])
    return (
        <>
            {/* <h1 className="text-center font-extrabold">Recherche</h1> */}
            <div className="flex flex-wrap justify-center gap-x-4">
                {
                    products.map((product) => (
                        <ArticleCard
                            // handleDelete={handleDelete}
                            product={product} key={product.id} />
                    ))
                }
            </div>

            {
                <ProductFilter products={products} />
            }

        </>
    )
}

