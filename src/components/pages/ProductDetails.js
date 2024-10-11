import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { productId } = useParams();
  let [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [productId]);
  return (
    <>
      {product && (
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                <strong>Price:</strong> ${Number(product.price).toFixed(2)}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {product.description}
              </p>
              <p className="card-text">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {product.rating?.rate} (
                {product.rating?.count} reviews)
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
