import { fetchContent } from "../utils/fetchContent";

export const ServicioExamenes = async () => {
  return await fetchContent("examenes");
};
