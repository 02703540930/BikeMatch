import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <> 
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Bike Match</h1>
        <DataTable></DataTable>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
