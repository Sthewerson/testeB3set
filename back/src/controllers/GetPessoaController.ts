import { Request, Response } from "express";

import { GetPessoaService } from "../services/GetPessoaService";

export class GetPessoaController {
  async handle(request: Request, response: Response) {

    const { pessoaId } = request.params;
    const getPessoaService = new GetPessoaService();

    const result = await getPessoaService.execute({
        pessoaId,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
