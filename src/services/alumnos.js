import { fetchContent } from "../utils/fetchContent";

export const ServicioAlumnos = async () => {
  return await fetchContent("alumnos");
};
