class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
    };
  }

  componentDidMount() {
    fetch(this.props.source).then(response => response.json()).then(json => {
      const ctx = document.getElementById('chart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: json.data.map(day => day[0]),
          datasets: [
            {
              label: 'Data',
              data: json.data.map(day => day[1]),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(128, 128, 128, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(128, 128, 128, 1)',
              ],
              borderWidth: 1,
            }
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }

  render() {
    return (
      <canvas id="chart" width="400" height="400"></canvas>
    );
  }
}