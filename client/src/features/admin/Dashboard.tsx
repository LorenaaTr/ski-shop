import { AppLayout } from './listItems'; // Assuming this imports the layout component
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart'; // Assuming this imports the Chart component
import { Box, Typography } from '@mui/material';
import useProducts from '../../app/hooks/useProducts'; // Import your hook for fetching products

export default function Dashboard() {
  // Simulate products for demonstration
  const { products } = useProducts(); // Assuming this hook fetches products from an API

  return (
    <AppLayout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Inventory */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>
                Inventory
              </Typography> <br />
              {products.map((product) => (
                <Box key={product.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <img src={product.pictureUrl} alt={product.name} style={{ width: 50, height: 'auto', marginRight: 10 }} />
                  <div>
                    <Typography variant="subtitle1">{product.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{product.type} - {product.brand}</Typography>
                  </div>
                </Box>
              ))}
            </Paper>
          </Grid>
          {/* Other content */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* Content for Recent Orders or other sections */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
}
