import * as React from "react";

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";

export default function TableList(data: any){
  

  const getHeight = (index: any) => ((index % 3) + 1) * 25;

  const theme = useTheme({
    HeaderRow: `
        background-color: #fafafa;
      `,
    Row: `
        &:nth-of-type(odd) {
          background-color: #f5f5f5;
        }

        &:nth-of-type(even) {
          background-color: #fafafa;
        }
      `,
  });

  const getCellStyle = (index: any) => ({
    style: { height: `${getHeight(index)}px` },
  });

  return (
    <Table data={data} theme={theme}>
      {(data: any) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Phone</HeaderCell>              
            </HeaderRow>
          </Header>

          <Body>
            {data.map((item: any, index: any) => (
              <Row key={item.id} item={item}>
                <Cell
                  {...getCellStyle(index)}
                  onClick={(event) => console.log("Click Cell", event)}
                >
                  {item.firstName}
                </Cell>
                <Cell {...getCellStyle(index)}>{item.phone}</Cell>
                
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};

