import {
  btn,
  form,
  totalVotos,
  valueVotosA,
  valueVotosB,
  valueVotosInvalidos,
  votosNulos,
  votosBrancos,
  votosCandidatoA,
  votosCandidatoB,
  barraCandidatoA,
  barraCandidatoB,
  barraVotosInvalidos,
} from './elements.js';

const calculateInvalidVotes = (result) => {
  result = Number(votosBrancos.value) + Number(votosNulos.value);
  return result;
};

const calculateTotalVotes = (result) => {
  result =
    Number(votosCandidatoA.value) +
    Number(votosCandidatoB.value) +
    calculateInvalidVotes();
  return result;
};

const percentCandidatoA = (percent) => {
  percent = ((votosCandidatoA.value * 100) / calculateTotalVotes()).toFixed(2);
  console.log(percent);
  return percent;
};

const percentCandidatoB = (percent) => {
  percent = ((votosCandidatoB.value * 100) / calculateTotalVotes()).toFixed(2);
  console.log(percent);
  return percent;
};

const percentInvalidVotes = (percent) => {
  percent = ((calculateInvalidVotes() * 100) / calculateTotalVotes()).toFixed(
    2
  );
  console.log(percent);
  return percent;
};

const handleSubmit = (event) => {
  event.preventDefault();

  valueVotosA.innerHTML = ` ${votosCandidatoA.value}`;
  valueVotosB.innerHTML = ` ${votosCandidatoB.value}`;
  valueVotosInvalidos.innerHTML = ` ${calculateInvalidVotes()}`;
  totalVotos.innerHTML = ` ${calculateTotalVotes()}`;

  percentCandidatoA();
  percentCandidatoB();
  percentInvalidVotes();
  form.reset();
  console.log('Success!');
};

form.addEventListener('submit', handleSubmit);
