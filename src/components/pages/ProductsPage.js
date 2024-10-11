function Products() {
  return (
    <>
      <div>
        <h2>Products</h2>
        <button className="btn btn-success mt-3">Add New Product</button>
        <table className="table table-striped text-center mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>product 1</td>
              <td>100</td>
              <td>
                <button className="btn btn-primary mx-1 btn-sm">View</button>
                <button className="btn btn-warning mx-1 btn-sm">Edit</button>
                <button className="btn btn-danger mx-1 btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>product 2</td>
              <td>500</td>
              <td>
                <button className="btn btn-primary mx-1 btn-sm">View</button>
                <button className="btn btn-warning mx-1 btn-sm">Edit</button>
                <button className="btn btn-danger mx-1 btn-sm">Delete</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>product 3</td>
              <td>400</td>
              <td>
                <button className="btn btn-primary mx-1 btn-sm">View</button>
                <button className="btn btn-warning mx-1 btn-sm">Edit</button>
                <button className="btn btn-danger mx-1 btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
