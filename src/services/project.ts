import { Project } from "../types/Project";
import { client } from "../utils/httpClient";

export function getProjects() {
  return client.get<Project[]>('/project')
}