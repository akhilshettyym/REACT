import { Box, Button, Container, Paper, Typography } from '@mui/material'
import './App.css'

const serviceList = ["Service 1", "Service 2", "Service 3"];

function App() {
  return (
    <Container>
      <Typography variant="h1" sx={{ my: 4, textAlign: "center", color: "primary.main" }}>
        Services
      </Typography>

      <Typography variant="h3" sx={{ mb: 3 }}>
        Overview
      </Typography>

      <Box sx={{ pt: 4,
        display: "flex",
        flexDirection:{ xs: "column", md: "row"},
        justifyContent:"space-between",
        textAlign: "center",
        gap: 4,
        }}>

      {serviceList.map((service, index) => (
        <Paper key={index} elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>{service}</Typography>
          <Typography sx={{ mt:2 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus a vero aliquam, praesentium omnis dolor assumenda fugit voluptatibus neque. Veniam voluptate quae velit? Quas impedit excepturi magni, debitis ipsum aperiam laborum rem eos corporis quis numquam facere sit totam, perspiciatis magnam.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Learn More</Button>
        </Paper>
      ))}
      </Box>
    </Container>
  );
}

export default App;
