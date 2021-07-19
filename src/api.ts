import fetch from "node-fetch";

const ENDPOINT = "https://api.covid19.especiaisg1.globo/api/vacina/info-pagina?format=json";

type StateInfoData = {
  "hoje-dose-1": number;
  "hoje-dose-2": number;
  "total-populacao": number;
  "total-hoje-dose-1": number;
  "total-hoje-dose-2": number;
  "total-ontem-dose-1": number;
  "total-ontem-dose-2": number;
  "total-doses-recebidas": number;
  "total-hoje-dose-unica": number;
  "total-pct-vacinados-dose-1": number;
  "total-pct-vacinados-dose-2": number;
  "total-populacao-maiores-18": number;
  "total-pct-vacinados-disponivel": number;
  "total-doses-recebidas-habitante": number;
  "vacinas-aplicadas-hoje-dose-unica": number;
};

export const fromState = async (state: string): Promise<StateInfoData> => {
  const json = await fetch(ENDPOINT).then((r) => r.json());
  const stateExtras = json.extras[state.toUpperCase()];

  if (!stateExtras) return null;

  return stateExtras.info;
};
