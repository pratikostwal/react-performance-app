import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const UserSort = ({ sortField, setSortField }) => {
  const handleSortChange = (e) => {
    setSortField(e.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        labelId="sort-label"
        value={sortField}
        onChange={handleSortChange}
        label="Sort By..."
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="email">Email</MenuItem>
      </Select>
    </FormControl>
  );
};

export default React.memo(UserSort);
