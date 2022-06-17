import React, { useEffect, useMemo, useState } from "react";

import { Box, Checkbox, Text } from "@chakra-ui/react";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { CustomTable } from "../Table/CustomTable";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";

const ListDepositos = () => {
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
        Header: "Depósitos",
        columns: [
          {
            accessor: "accessor",
            Header: "",
            Cell: ({ row: { original } }: any) => (
              <Checkbox bg="#EDF2F7"></Checkbox>
            ),
          },
          {
            Header: "",
            accessor: "sss",
          },
          {
            Header: "Valor Mensal",
            accessor: "id",
          },
          {
            Header: "",
            accessor: "ss",
          },

          {
            Header: "Vencimento",
            accessor: "firstName",
          },
          {
            Header: "",
            accessor: "ssss",
          },
          {
            Header: "Status",
            accessor: "documentNumber",
          },
          {
            Header: "",
            accessor: "sssss",
          },
          {
            Header: "Baixar em PDF",
            accessor: "open",
            Cell: (props) => (
              <Link to={`/`}>
                {" "}
                <Box ml="25%">
                  <BsDownload color={"gray"} fontSize="22px" />
                </Box>
              </Link>
            ),
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

export default ListDepositos;
