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
  infoCandidatoA,
  infoCandidatoB,
  infoVotosInvalidos,
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

const graphicInfo = () => {
  infoCandidatoA.innerHTML = `Candidato A: ${percentCandidatoA()}% (${
    votosCandidatoA.value
  } votos)`;
  barraCandidatoA.style.width = `${percentCandidatoA()}%`;

  infoCandidatoB.innerHTML = `Candidato B: ${percentCandidatoB()}% (${
    votosCandidatoB.value
  } votos)`;
  barraCandidatoB.style.width = `${percentCandidatoB()}%`;

  infoVotosInvalidos.innerHTML = `Inválidos: ${percentInvalidVotes()}% (${calculateInvalidVotes()} votos)`;
  barraVotosInvalidos.style.width = `${percentInvalidVotes()}%`;
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
  graphicInfo();
  form.reset();
  console.log('Success!');
};

form.addEventListener('submit', handleSubmit);
