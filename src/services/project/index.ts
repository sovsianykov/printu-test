import { request } from "../api";
import { Data } from "@shared/components/FigurItem/item";


class ProjectService {

  getProject(url:string) {
    return request.get<Data>(url)
  }
}

export const projectService = new ProjectService()
