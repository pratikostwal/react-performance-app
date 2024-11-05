import React, { useState, useCallback, useEffect } from "react";
import { Container, Typography, Grid, Box, Card } from "@mui/material";

const UserList = React.lazy(() => import("../components/UserList"));
const UserSearch = React.lazy(() => import("../components/UserSearch"));
const UserSort = React.lazy(() => import("../components/UserSort"));

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [hasData, setHasData] = useState(false);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleSort = useCallback((field) => {
    setSortField(field);
  }, []);

  const handleDataStatus = (dataExists) => {
    setHasData(dataExists);
  };

  return (
    <Container>
      <Box>
        <Typography variant="h5" align="center">
          User Management
        </Typography>
      </Box>

      {hasData && (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={7}>
            <UserSearch searchTerm={searchTerm} setSearchTerm={handleSearch} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <UserSort sortField={sortField} setSortField={handleSort} />
          </Grid>
        </Grid>
      )}

      <Box>
        <Card style={{ width: "35rem" }}>
          <Box p={1}>
            <UserList
              searchTerm={searchTerm}
              sortField={sortField}
              setDataStatus={handleDataStatus}
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default Home;
