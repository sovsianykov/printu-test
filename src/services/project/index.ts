import { request } from "../api";
import { Data } from "@pages/Home/containers/Field/FigurItem/models";


class ProjectService {

  getProject(url:string) {
    return request.get<Data>(url)
  }
}

export const projectService = new ProjectService()
