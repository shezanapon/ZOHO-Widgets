import * as React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export default function Input() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "95%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          placeholder="Input text"
          multiline
          rows={12}
        />
      </div>
    </Box>
  );
}
