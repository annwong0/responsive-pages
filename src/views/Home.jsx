import { Box, Button, Stack } from "@mui/material";
import { red, orange } from "@mui/material/colors";
import Footer from "../components/Home/Footer";
import { Router } from "../utils/Router";
import "../css/Home.css";
import "../css/utils.css";

const lightOrange = orange[100];
const brickRed = red[700];

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: lightOrange,
      }}
      className="home full-vw full-vh"
    >
      <Box sx={{ height: "20vh" }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          spacing={1}
        >
          <div className="home-header">Responsive Pages</div>
        </Stack>
      </Box>
      <Box sx={{ height: "70vh" }}>
        <Stack
          spacing={{ xs: 1 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {Router &&
            Router.map((r) => (
              <Button
                variant="contained"
                disabled={r.path ? false : true}
                href={r.path}
                key={r.id}
                sx={{
                  backgroundColor: brickRed,
                  "&:hover": {
                    backgroundColor: brickRed,
                  },
                }}
              >
                {r.title}
              </Button>
            ))}
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
