const labels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temperatura',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [30, 29, 28, 25, 22, 23],
    },
    {
      label: 'Umidade',
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      data: [80, 82, 80, 85, 80, 83],
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    layout: {
      padding: 30,
    },
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Aula de ChartJS do Roverzão SPTech 2022',
        font: {
          size: 24,
        },
      },
    },
  },
};

const myChart = new Chart(document.getElementById('chart'), config);
