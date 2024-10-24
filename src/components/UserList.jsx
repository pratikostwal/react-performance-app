import React from "react";
import data from "../data/mockData.json";
import { FixedSizeList as List } from "react-window";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const UserList = ({ searchTerm, sortField }) => {
  const items = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortField) {
    items.sort((a, b) => {
      return sortField === "name"
        ? a.name.localeCompare(b.name)
        : a.email.localeCompare(b.email);
    });
  }

  return (
    <Box className="userlist-container">
      <Table className="userlist-table">
        <TableHead className="userlist-table-header">
          <TableRow className="userlist-table-header-row">
            <TableCell className="userlist-header-cell">
              ID
            </TableCell>
            <TableCell className="userlist-header-cell">
              Name
            </TableCell>
            <TableCell className="userlist-header-cell">
              Email
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>

      {items.length === 0 ? (
        <Box mt={4} textAlign="center" className="userlist-no-records">
          <Typography variant="h6">No records found.</Typography>
        </Box>
      ) : (
        <List
          className="userlist-virtual-list"
          height={400}
          itemCount={items.length}
          itemSize={50}
          width="100%"
        >
          {({ index, style }) => (
            <div style={style} className="userlist-row">
              <Table className="userlist-table">
                <TableBody>
                  <TableRow className="userlist-body-row">
                    <TableCell align="left" className="userlist-body-cell">
                      {items[index].id}
                    </TableCell>
                    <TableCell align="center" className="userlist-body-cell">
                      {items[index].name}
                    </TableCell>
                    <TableCell align="right" className="userlist-body-cell">
                      {items[index].email}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
        </List>
      )}
    </Box>
  );
};

export default React.memo(UserList);
