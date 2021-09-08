import Chart from 'react-apexcharts';

const BarChart = () => {
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Ana Carolina', 'Jair Alves', 'Karla Hack', 'Lovato', 'Paulo Andre']
        },
        series: [
            {
                name: "KM Rodados",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
        <Chart 
           options={{ ...options, xaxis: mockData.labels}}
           series={mockData.series}
           type="bar"
           height="240"         
        />
    );
}

export default BarChart;