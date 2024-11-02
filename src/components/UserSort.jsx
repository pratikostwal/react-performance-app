import React from "react"; // Import React to create components
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material"; // Import MUI components for dropdown selection

// UserSort component accepts sortField and setSortField as props to manage the sorting option
const UserSort = ({ sortField, setSortField }) => {
  // Handler for updating the selected sort field when changed
  const handleSortChange = (e) => {
    setSortField(e.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      {" "}
      {/* Wrapper for the dropdown, providing full width and styling */}
      <InputLabel id="sort-label">Sort By</InputLabel>{" "}
      {/* Label for the dropdown */}
      <Select
        labelId="sort-label" // Associates label with Select for accessibility
        value={sortField} // Bind selected sort field to the component's value
        onChange={handleSortChange} // Update sort field on selection change
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
