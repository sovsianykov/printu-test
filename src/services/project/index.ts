import { request } from "../api";
import { Project } from "@shared/components/FigurItem/item";


class ProjectService {

  getProject(url:string) {
    return request.get<Project>(url)
  }
}

export const projectService = new ProjectService()
