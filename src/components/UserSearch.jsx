import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { TextField, InputAdornment, IconButton } from "@mui/material";

const UserSearch = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => setSearchTerm(e.target.value);
  const clearSearch = () => setSearchTerm("");

  return (
    <TextField
      label="Search User By Name..."
      value={searchTerm}
      onChange={handleChange}
      fullWidth
      margin="normal"
      variant="outlined"
      InputProps={{
        endAdornment: searchTerm && (
          <InputAdornment position="end">
            <IconButton onClick={clearSearch}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default React.memo(UserSearch);
