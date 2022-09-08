import { Table } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Titulo } from "../Home/styles";

const Pessoa = () => {
  const [pessoa, setPessoa] = useState();
  let { id } = useParams();
  const getPessoa = async () => {
    fetch(`http://localhost:3030/pessoas/${id}`)
      .then((response) => response.json())
      .then((responseJson) => setPessoa(responseJson));
  };

  useEffect(() => {
    getPessoa();
  }, []);
  return (
    <>
      {pessoa && (
        <div>
          <Titulo>Dados Cadastrados</Titulo>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DATA DE NASCIMENTO</th>
                <th>TELEFONE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.data_de_nascimento}</td>
                <td>
                  {pessoa.telefones.map((numero) => (
                    <td>{numero.numero}</td>
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Pessoa;
