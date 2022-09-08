import { Router } from "express";
import { GetPessoaController } from "./controllers/GetPessoaController";
import { GetPessoasController } from "./controllers/GetPessoasController";


const routes = Router();

routes.get("/pessoas", new GetPessoasController().handle);
routes.get("/pessoas/:pessoaId", new GetPessoaController().handle);

export { routes };
