import React, { useEffect, useMemo, useState } from "react";

import { Box, Checkbox, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { CustomTable } from "../Table/CustomTable";
import axios from "axios";

const ListExtratos = () => {
  const [data, setData] = useState([]);

  const userData = useMemo(() => [...data], [data]);

  const fetchData = async () => {
    console.log(userData);

    const response = await axios
      .get("https://dummyjson.com/users")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data.users;

      console.log("Data da api em accounts: ", data);
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Extratos",
        columns: [
          {
            accessor: "accessor",
            Header: "",
            Cell: ({ row: { original } }: any) => (
              <Checkbox bg="#EDF2F7"></Checkbox>
            ),
          },
          {
            Header: "Data da Transação",
            accessor: "id",
          },
          {
            Header: "Tipo de Transação",
            accessor: "firstName",
          },
          {
            Header: "Origim",
            accessor: "email",
          },
          {
            Header: "FInal do Cartão",
            accessor: "documentNumber",
          },
          {
            Header: "Valor",
            accessor: "dateNumberDocumentPhoto",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <CustomTable data={data} columns={columns} />
    </>
  );
};

export default ListExtratos;
