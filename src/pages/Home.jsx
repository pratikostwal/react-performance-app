import React, { Suspense, useState, useCallback } from "react";
import { Container, Typography, Grid, Box, Card } from "@mui/material";

const UserSearch = React.lazy(() => import("../components/UserSearch"));
const UserSort = React.lazy(() => import("../components/UserSort"));
const UserList = React.lazy(() => import("../components/UserList"));

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleSort = useCallback((field) => {
    setSortField(field);
  }, []);

  return (
    <Container>
      <Box>
        <Typography variant="h5" gutterBottom align="center">
          User Management
        </Typography>
      </Box>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={7}>
          <Suspense fallback={<div>Loading search...</div>}>
            <UserSearch searchTerm={searchTerm} setSearchTerm={handleSearch} />
          </Suspense>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Suspense fallback={<div>Loading sort...</div>}>
            <UserSort sortField={sortField} setSortField={handleSort} />
          </Suspense>
        </Grid>
      </Grid>

      <Box>
        <Card style={{ width: "30rem" }}>
          <Box p={1}>
            <Suspense fallback={<div>Loading user list...</div>}>
              <UserList searchTerm={searchTerm} sortField={sortField} />
            </Suspense>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default Home;
