const labelsTempUmidade1 = [
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];
const labelsTempUmidade2 = [
  'Janeiro',
  'Fevereiro',
  'Marco',
  'Abril',
  'Maio',
  'Junho',
];

const dataTempUmidade1 = {
  labels: labelsTempUmidade1,
  datasets: [
    {
      label: 'Temperatura',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [30, 29, 28, 25, 22, 23],
      pointStyle: 'star',
      pointRadius: 7,
    },
    {
      label: 'Umidade',
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      data: [80, 82, 80, 85, 80, 83],
      pointStyle: 'rectRot',
      pointRadius: 7,
    },
  ],
};

const configTempUmidade1 = {
  type: 'line',
  data: dataTempUmidade1,
  options: {
    layout: {
      padding: 30,
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
        },
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

const dataTempUmidade2 = {
  labels: labelsTempUmidade2,
  datasets: [
    {
      label: 'Temperatura Media',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [22, 24, 27, 23, 20, 18],
      pointStyle: 'rect',
      pointRadius: 7,
    },
    {
      label: 'Umidade Media',
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      data: [90, 89, 93, 87, 88, 82],
      pointStyle: 'rect',
      pointRadius: 7,
    },
  ],
};

const configTempUmidade2 = {
  type: 'bar',
  data: dataTempUmidade2,
  options: {
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
        },
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

const firstChart = new Chart(
  document.getElementById('first_chart'),
  configTempUmidade1
);
const secondChart = new Chart(
  document.getElementById('second_chart'),
  configTempUmidade2
);
