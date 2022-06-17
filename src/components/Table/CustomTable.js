import React from "react";

import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { GlobalFilter } from "../GlobalFilter/globalFilter";

export function CustomTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = useTable({ columns: columns, data: data }, useGlobalFilter, useSortBy);

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 10);

  const isEven = (idx) => idx % 2 === 0;

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
      <Flex>
        <Box
          bg="white"
          borderRadius="15px"
          justifyContent="center"
          alignItems="center"
          m={4}
        >
          <Table {...getTableProps()}>
            <Thead>
              {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <Th
                      {...column.getHeaderProps({
                        style: {
                          minWidth: column.minWidth,
                          width: column.width,
                        },
                      })}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {firstPageRows.map((row, idx) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()} bg={isEven(idx) ? "#EDF2F7" : ""}>
                    {row.cells.map((cell, idx) => {
                      return (
                        <Td
                          // onClick={()=>  console.log(cell.value)}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Flex>
      <br />
      <Text pb={8} textAlign="center" fontWeight="normal">
        Demostrando os primeiros 10 resultados de {rows.length}
      </Text>
    </>
  );
}
