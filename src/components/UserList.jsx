import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
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
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debounced function to fetch data
  const fetchData = useCallback(
    debounce(async () => {
      setLoading(true);
      try {
        const response = await fetch("https://randomuser.me/api/?results=1000");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const { results } = await response.json();
        const formattedData = results.map((user, index) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
        }));
        setItems(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 500), // Debounce time of 500ms
    []
  );

  useEffect(() => {
    fetchData(); // Call the debounced function
    // Cleanup function to cancel debounce on unmount
    return () => {
      fetchData.cancel();
    };
  }, [fetchData]); // Empty dependency array to ensure it runs once

  // Filter items based on the search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort items based on the selected sort field
  if (sortField) {
    filteredItems.sort((a, b) => {
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
            <TableCell className="userlist-header-cell">ID</TableCell>
            <TableCell className="userlist-header-cell">Name</TableCell>
            <TableCell className="userlist-header-cell">Email</TableCell>
          </TableRow>
        </TableHead>
      </Table>

      {loading ? (
        <Box mt={4} textAlign="center" className="userlist-loading">
          <Typography variant="h6">Loading...</Typography>
        </Box>
      ) : error ? (
        <Box mt={4} textAlign="center" className="userlist-error">
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      ) : filteredItems.length === 0 ? (
        <Box mt={4} textAlign="center" className="userlist-no-records">
          <Typography variant="h6">No records found.</Typography>
        </Box>
      ) : (
        <List
          className="userlist-virtual-list"
          height={300}
          itemCount={filteredItems.length}
          itemSize={50}
          width="100%"
        >
          {({ index, style }) => (
            <div style={style} className="userlist-row">
              <Table className="userlist-table">
                <TableBody>
                  <TableRow className="userlist-body-row">
                    <TableCell align="left" className="userlist-body-cell">
                      {filteredItems[index].id}
                    </TableCell>
                    <TableCell align="right" className="userlist-body-cell">
                      {filteredItems[index].name}
                    </TableCell>
                    <TableCell align="right" className="userlist-body-cell">
                      {filteredItems[index].email}
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
