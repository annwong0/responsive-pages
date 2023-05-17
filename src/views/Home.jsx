import { Box, Button, Stack } from "@mui/material";
import { red, orange } from "@mui/material/colors";
import { Router } from "../utils/Router";

const lightOrange = orange[100];
const brickRed = red[700];

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: lightOrange,
      }}
    >
      <Box sx={{ height: "20vh" }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          spacing={1}
        >
          <div>Responsive Pages</div>
        </Stack>
      </Box>
      <Box sx={{}}>
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
    </Box>
  );
}
