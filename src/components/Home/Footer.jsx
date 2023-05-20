import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "10vh",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        created by{" "}
        <a
          href="https://github.com/annwong0"
          target="_blank"
          style={{ color: "inherit" }}
        >
          AnnWong
        </a>
      </div>
    </Box>
  );
}
