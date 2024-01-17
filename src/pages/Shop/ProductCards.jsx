import { Link, useNavigate } from "react-router-dom";
import Rating from "../../components/Sidebar/rating";

const ProductCards = ({ products, GridList }) => {
  const navigate = useNavigate();
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  const addToCart = (product) => {
    console.log(product);
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === product.id,
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity =
        existingCart[existingProductIndex].quantity + 1;
    } else {
      product.quantity = 1;
      existingCart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    navigate("/cart-page");
  };

  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {products.map((product) => (
        <div className="col-lg-4 col-md-6 col-12" key={product.id}>
          <div className="product-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={`${product.img}`} alt={`${product.img}`} />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a onClick={() => addToCart(product)}>
                  <i className="icofont-cart-alt"></i>
                </a>
              </div>
            </div>
            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </h5>
              <p className="productRating">
                <Rating />
              </p>
              <h6>${product.price}</h6>
            </div>
          </div>
          <div className="product-list-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={`${product.img}`} alt={`${product.imgAlt}`} />
              </div>
              <div className="product-action-link">
                <a href="#">
                  <i className="icofont-eye"></i>
                </a>
                <a href="#">
                  <i className="icofont-cart-alt"></i>
                </a>
              </div>
            </div>
            <div className="product-content">
              <Link to={`/shop/${product.id}`}>{product.name}</Link>
              <p className="productRating">
                <Rating />
              </p>
              <h6>${product.price}</h6>
              <p>{product.seller}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
