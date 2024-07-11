import { fetchContent } from "../utils/fetchContent";

export const ServicioRespuestas = async () => {
  return await fetchContent("respuestas");
};
