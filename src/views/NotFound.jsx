import { Box, Button, Grid } from "@mui/material";
import NotFoundImage from "../assets/not_found_img.png";
import Footer from "../components/Home/Footer.jsx";
import { grey } from "@mui/material/colors";
import "../css/NotFound.css";
import "../css/utils.css";

const black = grey[900];

export default function NotFound() {
  return (
    <Box className="full-vw full-vh not-found-page">
      <Grid container spacing={5} sx={{ padding: "5% 5% 0 5%" }}>
        <Grid item xs={12}>
          <div className="not-found-small-text">404 not found</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={NotFoundImage} alt="Not Found" className="full-width" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <div className="not-found-header">I have bad news for you</div>
            </Grid>
            <Grid item xs={12}>
              <div className="not-found-caption">
                The page you are looking for might be removed or is temporarily
                unavailable
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                className="not-found-btn"
                href="/"
                sx={{ backgroundColor: black }}
              >
                Back to homepage
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
