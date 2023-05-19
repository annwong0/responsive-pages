import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box className="text-center" sx={{ height: "10vh", fontSize: "20px" }}>
      created by{" "}
      <a
        href="https://github.com/annwong0"
        target="_blank"
        style={{ color: "inherit" }}
      >
        AnnWong
      </a>
    </Box>
  );
}
