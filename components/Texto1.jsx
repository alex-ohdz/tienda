"use client"

import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";

const OfferSign = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
}));

const OfferBanner = () => {
  return (
    <div style={{ marginTop: "10px",marginBottom: "20px" }}>
      <OfferSign elevation={3}>
        <Typography variant="h5">¡Ofertas Especiales!</Typography>
        <Typography variant="body1">Descubre nuestras increíbles ofertas disponibles.</Typography>
      </OfferSign>
    </div>
  );
};

export default OfferBanner;