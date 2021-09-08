import BarChart from "components/BarChart/Index";
import DataTable from "components/DataTable";
import DonutsChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <> 
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard Bike Match - Ricardo Hack</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Km dos Ciclistas nos BikeMatchs que participei</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Participação dos BikeMatchs</h5>
            <DonutsChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Seus Bike Matchs: Distância 295,1 km e Tempo 15:45 h </h2>
        </div>

        <DataTable></DataTable>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
