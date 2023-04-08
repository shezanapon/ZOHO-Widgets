import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "./App.css";
import MultipleSelect from "./components/Select";
import Input from "./components/Input";
import StopWatch from "./components/stopwatch/StopWatch";
import { useEffect } from "react";

const ZOHO = window.ZOHO;
function App() {
  useEffect(() => {
    ZOHO.embeddedApp.on("PageLoad", function (data) {
      ZOHO.CRM.UI.Resize({
        height: "800",
        width: "1000",
        padding: "0 px",
      }).then(function (data) {
        console.log(data);
      });
    });
    /*
     * initializing the widget.
     */
    ZOHO.embeddedApp.init();
  }, []);
  return (
    <Container
      sx={{
        height: "500px",
        width: "80%",
        background: "#FFFFFFFF",
        borderRadius: "4px",
        boxShadow: " 0px 0px 1px #171a1f, 0px 0px 2px #171a1f",
        marginTop: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // rowGap: "20px",
          marginBottom: "20px",
          paddingTop: "25px",
        }}
      >
        <MultipleSelect />
        <StopWatch />
      </Box>
      <Input></Input>

      <Box sx={{ textAlign: "right", paddingRight: "25px", paddingTop: "7px" }}>
        <Button variant="outlined" sx={{ marginRight: "20px" }}>
          Cancel
        </Button>
        <Button variant="contained">Submit</Button>
      </Box>
    </Container>
  );
}

export default App;
