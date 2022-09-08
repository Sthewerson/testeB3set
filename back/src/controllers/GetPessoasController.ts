import { Request, Response } from "express";
import { GetPessoasService } from "../services/GetPessoasService";

export class GetPessoasController {
  async handle(request: Request, response: Response) {
    const getPessoasService = new GetPessoasService();

    const pessoas = await getPessoasService.execute();

    return response.json(pessoas);
  }
}