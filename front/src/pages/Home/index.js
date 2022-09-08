import React from "react";
import Switch from "@mui/material/Switch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Table, Titulo } from "./styles";
export const Home = () => {
  const [data, setData] = useState([]);

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const getPessoas = async () => {
    fetch("http://localhost:3030/pessoas")
      .then((response) => response.json())
      .then((responseJson) =>
        //console.log(responseJson),
        setData(responseJson)
      );
  };

  useEffect(() => {
    getPessoas();
  }, []);

  return (
    <div>
      <Titulo>Dados Cadastrados</Titulo>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DATA DE NASCIMENTO</th>
            <th>TELEFONE(S)</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((pessoa) => (
            <>
              {(!checked || (checked && pessoa.telefones.length > 1)) && (
                <tr>
                  <td>
                    <Link to={`pessoa/${pessoa.id}`}>{pessoa.id} </Link>
                  </td>
                  <td>{pessoa.nome}</td>
                  <td>{pessoa.data_de_nascimento}</td>
                  <td>
                    {pessoa.telefones.map((numero) => (
                      <td>{numero.numero}</td>
                    ))}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </Table>

      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};

export default Home;
