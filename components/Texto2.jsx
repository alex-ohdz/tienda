"use client"

import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";

const OfferSign = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  background: "linear-gradient(45deg, #F44336 30%, #FFEB3B 90%)",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
}));

const Texto2 = ({titulo,description}) => {
  return (
    <div style={{ marginTop: "10px",marginBottom: "20px" }}>
      <OfferSign elevation={3}>
        <Typography variant="h5">{titulo}</Typography>
        <Typography variant="body1">{description}</Typography>
      </OfferSign>
    </div>
  );
};

export default Texto2;