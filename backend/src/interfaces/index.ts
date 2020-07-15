import { Response, Request } from "express";

export interface ICrud {
  store(request: Request, response: Response): Promise<Response>;
  show(request: Request, response: Response): Promise<Response>;
  index(request: Request, response: Response): Promise<Response>;
  update(request: Request, response: Response): Promise<Response>;
  delete(request: Request, response: Response): Promise<Response>;
}
