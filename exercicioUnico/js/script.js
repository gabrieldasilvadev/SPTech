import * as elements from './elements.js';
const handleSubmit = (event) => {
  event.preventDefault();

  const votosCandidatoA = Number(elements.votosCandidatoA.value);
  const votosCandidatoB = Number(elements.votosCandidatoB.value);

  const calculateInvalidVotes = (result) => {
    result =
      Number(elements.votosBrancos.value) + Number(elements.votosNulos.value);
    return result;
  };

  const calculateTotalVotes = (result) => {
    result = votosCandidatoA + votosCandidatoB + calculateInvalidVotes();
    return result;
  };

  const percentCandidatoA = (percent) => {
    percent = ((votosCandidatoA * 100) / calculateTotalVotes()).toFixed(2);
    return percent;
  };

  const percentCandidatoB = (percent) => {
    percent = ((votosCandidatoB * 100) / calculateTotalVotes()).toFixed(2);
    return percent;
  };

  const percentInvalidVotes = (percent) => {
    percent = ((calculateInvalidVotes() * 100) / calculateTotalVotes()).toFixed(
      2
    );
    return percent;
  };
  const graphicInfo = () => {
    const barraCandidatoA = elements.barraCandidatoA;
    const barraCandidatoB = elements.barraCandidatoB;
    const barraVotosInvalidos = elements.barraVotosInvalidos;

    barraCandidatoA.style.reset = '0px';
    barraCandidatoB.style.width = '0px';
    barraVotosInvalidos.style.width = '0px';
    elements.infoCandidatoA.innerHTML = `Candidato A: ${percentCandidatoA()}% (${votosCandidatoA} votos)`;
    barraCandidatoA.style.width = `${percentCandidatoA()}%`;

    elements.infoCandidatoB.innerHTML = `Candidato B: ${percentCandidatoB()}% (${votosCandidatoB} votos)`;
    barraCandidatoB.style.width = `${percentCandidatoB()}%`;

    elements.infoVotosInvalidos.innerHTML = `Inválidos: ${percentInvalidVotes()}% (${calculateInvalidVotes()} votos)`;
    barraVotosInvalidos.style.width = `${percentInvalidVotes()}%`;
  };

  elements.valueVotosA.innerHTML = ` ${votosCandidatoA}`;
  elements.valueVotosB.innerHTML = ` ${votosCandidatoB}`;
  elements.valueVotosInvalidos.innerHTML = ` ${calculateInvalidVotes()}`;
  elements.totalVotos.innerHTML = ` ${calculateTotalVotes()}`;

  percentCandidatoA();
  percentCandidatoB();
  percentInvalidVotes();
  graphicInfo();
  elements.form.reset();
};

elements.form.addEventListener('submit', handleSubmit);
