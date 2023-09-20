
function App() {
  return (
    <div classNameName="container mt-4">
      <form className="row g-3">
      <div className="col-10">
        <input type="text" className="form-control"  placeholder="Enter Todo"/>
      </div>
      <div className="col-3">
        <button type="submit" className="btn btn-primary mb-3">Add</button>
      </div>
  </form>
    <ul className="list-group">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li>
   </ul>
</div>
   
  );
}

export default App;
