import React, { useState } from 'react';
const ProductFilter = ({ products }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(999);
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Fonction pour filtrer les produits
    const handleFilter = () => {
        let filtered = products;

        // Si un prix minimum est défini, on applique le filtre
        if (minPrice !== 0) {
            filtered = filtered.filter(product => parseFloat(product.prix) >= parseFloat(minPrice));
        }
        // si un prix maximum est défini, on applique le filtre
        if (maxPrice !== 999) {
            filtered = filtered.filter(product => parseFloat(product.prix) <= parseFloat(maxPrice));
        }
        // On met à jour le state des produits filtrés
        setFilteredProducts(filtered);
    };

    return (
        <div className='font-semibold'>
            <h2>Products Filtered by price</h2 >
            <div className="justify-between ">
                <label htmlFor="minPrice">Prix Min $:</label>
                <input
                    type="number"
                    id="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                {/* </div>

            <div> */}
                <label htmlFor="maxPrice">Prix Max $:</label>
                <input
                    type="number"
                    id="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button
                    className="btn btn-secondary py-2 px-3"
                    onClick={handleFilter}>Filtrer</button>

            </div>
            <hr />
            <div>
                <ul>
                    {filteredProducts.map((product, index) => (
                        <React.Fragment key={product.id}>
                            <li>
                                <h4>{product.nom}</h4>
                                <p>Prix: {product.prix}$</p>
                            </li>
                            {/* Ajouter un tiret horizontal entre les produits, sauf après le dernier produit */}
                            {index < filteredProducts.length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                    {/* {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <h4>{product.nom}</h4>
                            <p>Prix: {product.prix}€</p>
                        </li>
                    ))} */}
                </ul>
            </div>
        </div>
    );
};

export default ProductFilter;
