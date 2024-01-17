import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ products, GridList }) => {
  const [filteredProducts, setFilteredProducts] = useState({
    termin: "",
    products: products,
  });

  const handleChange = (termin) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(termin.toLowerCase()),
    );

    setFilteredProducts((prev) => {
      return { ...prev, termin: termin, products: filteredProducts };
    });
  };

  return (
    <div className="widget widget-search">
      <form
        className="search-wrapper mb-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="s"
          placeholder="Search..."
          defaultValue={filteredProducts.termin}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>

      <div>
        {(filteredProducts.termin && filteredProducts.products.length === 0 && (
          <div className="d-flex gap-3 p-2">Not found...</div>
        )) ||
          (filteredProducts.termin &&
            filteredProducts?.products.map((product) => (
              <Link key={product.id} to={`/shop/${product.id}`}>
                <div className="d-flex gap-3 p-2">
                  <div>
                    <div className="pro-thumb h-25">
                      <img
                        src={`${product.img}`}
                        alt={`${product.imgAlt}`}
                        width={70}
                        className="flex-{grow|shrink}-0"
                      />
                    </div>
                  </div>
                  <div className="product-content">
                    <p>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </p>
                    <h6>${product.price}</h6>
                  </div>
                </div>
              </Link>
            )))}
      </div>
    </div>
  );
};

export default Search;
