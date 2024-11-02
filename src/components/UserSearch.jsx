import React from "react"; // Import React for component creation
import ClearIcon from "@mui/icons-material/Clear"; // Import Clear icon from MUI for clearing the search input
import { TextField, InputAdornment, IconButton } from "@mui/material"; // Import MUI components for the search field and styling

// UserSearch component accepts searchTerm and setSearchTerm as props for managing search input
const UserSearch = ({ searchTerm, setSearchTerm }) => {
  // Handler for updating the search term as the user types
  const handleChange = (e) => setSearchTerm(e.target.value);

  // Handler to clear the search term when the clear icon is clicked
  const clearSearch = () => setSearchTerm("");

  return (
    <TextField
      label="Search User By Name..." // Label for the text field
      value={searchTerm} // Bind the search term to the input value
      onChange={handleChange} // Update search term on each keystroke
      fullWidth // Make the text field span the full width of its container
      margin="normal" // Add standard margin around the field
      variant="outlined" // Use the outlined variant for styling
      InputProps={{
        // Add end adornment only if there is a search term
        endAdornment: searchTerm && (
          <InputAdornment position="end">
            {" "}
            {/* Position the adornment at the end of the text field */}
            <IconButton onClick={clearSearch}>
              {" "}
              {/* Button to clear the search term */}
              <ClearIcon /> {/* Clear icon inside the button */}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default React.memo(UserSearch); // Export the component with React.memo to prevent unnecessary re-renders
