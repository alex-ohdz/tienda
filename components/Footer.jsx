"use client"
import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f4f4f4", padding: "20px" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contacto</Typography>
            <Typography variant="body1">
              Síguenos en las redes sociales:
            </Typography>
            <div style={{ display: "flex", gap: "10px" }}>
              <IconButton 
			  aria-label="" 
			  onClick={""}>
                <FacebookRoundedIcon 
				sx={{ fontSize: 25
					, color: "ActiveBorder" }}/>
              </IconButton>
			  <IconButton
                className="navB"
                color="primary"
                aria-label="search"
                onClick={""}
              >
                <MailOutlineRoundedIcon
                  sx={{ fontSize: 25, color: "ActiveBorder" }}
                />
              </IconButton>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Información</Typography>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li>
                <Link href="#" color="inherit">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
