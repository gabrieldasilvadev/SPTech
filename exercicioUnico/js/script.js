import * as elements from './elements.js';

const calculateInvalidVotes = (result) => {
  result = Number(elements.votosBrancos.value) + Number(elements.votosNulos.value);
  return result;
};

const calculateTotalVotes = (result) => {
  result =
    Number(elements.votosCandidatoA.value) +
    Number(elements.votosCandidatoB.value) +
    calculateInvalidVotes();
  return result;
};

const percentCandidatoA = (percent) => {
  percent = ((elements.votosCandidatoA.value * 100) / calculateTotalVotes()).toFixed(2);
  return percent;
};

const percentCandidatoB = (percent) => {
  percent = ((elements.votosCandidatoB.value * 100) / calculateTotalVotes()).toFixed(2);
  return percent;
};

const percentInvalidVotes = (percent) => {
  percent = ((calculateInvalidVotes() * 100) / calculateTotalVotes()).toFixed(2);
  return percent;
};

const graphicInfo = () => {
  elements.infoCandidatoA.innerHTML = `Candidato A: ${percentCandidatoA()}% (${
    elements.votosCandidatoA.value
  } votos)`;
  elements.barraCandidatoA.style.width = `${percentCandidatoA()}%`;

  elements.infoCandidatoB.innerHTML = `Candidato B: ${percentCandidatoB()}% (${
    elements.votosCandidatoB.value
  } votos)`;
  elements.barraCandidatoB.style.width = `${percentCandidatoB()}%`;

  elements.infoVotosInvalidos.innerHTML = `Inválidos: ${percentInvalidVotes()}% (${calculateInvalidVotes()} votos)`;
  elements.barraVotosInvalidos.style.width = `${percentInvalidVotes()}%`;
};

const handleSubmit = (event) => {
  event.preventDefault();

  elements.valueVotosA.innerHTML = ` ${elements.votosCandidatoA.value}`;
  elements.valueVotosB.innerHTML = ` ${elements.votosCandidatoB.value}`;
  elements.valueVotosInvalidos.innerHTML = ` ${calculateInvalidVotes()}`;
  elements.totalVotos.innerHTML = ` ${calculateTotalVotes()}`;

  percentCandidatoA();
  percentCandidatoB();
  percentInvalidVotes();
  graphicInfo();
  elements.form.reset();
};

elements.form.addEventListener('submit', handleSubmit);