import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
  const truncate = (text, length) => {
    return text.length > length ? `${text.substr(0, length)}...` : text;
  };
  return (
    <>
      <div>
        <h2>Products</h2>
        <Link to="/products/add" className="btn btn-success mt-3">
          Add New Product
        </Link>
        <table className="table table-striped text-center mt-5 w-100">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{truncate(product.title, 50)}</td>
                  <td>${product.price}</td>
                  <td>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-primary mx-1 btn-sm"
                    >
                      View
                    </Link>
                    <Link
                      to={`/products/edit/${product.id}`}
                      className="btn btn-warning mx-1 btn-sm"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/products/delete/${product.id}`}
                      className="btn btn-danger mx-1 btn-sm"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
