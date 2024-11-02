import React, { Suspense, useState, useCallback, useEffect } from "react";
import { Container, Typography, Grid, Box, Card } from "@mui/material";

// Lazy load components for progressive rendering
const UserList = React.lazy(() => import("../components/UserList"));
const UserSearch = React.lazy(() => import("../components/UserSearch"));
const UserSort = React.lazy(() => import("../components/UserSort"));

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [isUserListLoaded, setUserListLoaded] = useState(false);

  // Set UserList as loaded once it mounts
  useEffect(() => {
    setUserListLoaded(true);
  }, []);

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

      {/* Show placeholders until UserList is loaded */}
      {!isUserListLoaded && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Box height="56px" bgcolor="#f0f0f0" mb={2} /> {/* Placeholder */}
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box height="56px" bgcolor="#f0f0f0" mb={2} /> {/* Placeholder */}
          </Grid>
        </Grid>
      )}

      {/* Conditionally load UserSearch and UserSort after UserList is loaded */}
      {isUserListLoaded && (
        <Suspense fallback={<div>Loading search and sort...</div>}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={7}>
              <UserSearch
                searchTerm={searchTerm}
                setSearchTerm={handleSearch}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <UserSort sortField={sortField} setSortField={handleSort} />
            </Grid>
          </Grid>
        </Suspense>
      )}

      {/* Display UserList first */}
      <Box>
        <Card style={{ width: "35rem" }}>
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
