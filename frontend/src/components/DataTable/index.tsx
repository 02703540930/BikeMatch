const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data Próximo BikeMatch</th>
                        <th>Origem</th>
                        <th>Ciclista Organizador</th>
                        <th>Local</th>
                        <th>Tempo previsto(h) </th>
                        <th>km</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/09/2021 08:30</td>
                        <td>Clube Vitória</td>
                        <td>Jair Alves - 49 98828 2255</td>
                        <td>Cachoeiras Dois Irmãos - Luzerna - SC</td>
                        <td>01:30</td>
                        <td>17</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;