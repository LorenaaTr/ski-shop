import { Box, Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { AppLayout } from './listItems';
import useProducts from '../../app/hooks/useProducts';
import { useAppDispatch } from '../../app/store/configureStore';
import { removeProduct, setPageNumber } from '../catalog/catalogSlice';
import ProductForm from './ProductForm';
import { currencyFormat } from '../../app/util/util';
import agent from '../../app/api/agent';
import AppPagination from '../../app/components/AppPagination';
import { Product } from '../../app/models/product';
import { useState } from 'react';

export default function Inventory() {
  const { products, metaData } = useProducts();
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState(0);

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);
    setEditMode(true);
  }

  function handleDeleteProduct(id: number) {
    setLoading(true);
    setTarget(id);
    agent.Admin.deleteProduct(id)
      .then(() => dispatch(removeProduct(id)))
      .catch(error => console.error('Error deleting product:', error))
      .finally(() => setLoading(false));
  }

  function cancelEdit() {
    setSelectedProduct(undefined);
    setEditMode(false);
  }

  if (editMode) {
    return <ProductForm product={selectedProduct} cancelEdit={cancelEdit} />;
  }

  return (
    <AppLayout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Typography variant='h4'>Inventory</Typography>
              <Button onClick={() => setEditMode(true)} sx={{ ml: 2 }} size='large' variant='contained'>Create</Button>
            </Box>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="left">Product</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">Brand</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow
                      key={product.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{product.id}</TableCell>
                      <TableCell align="left">
                        <Box display='flex' alignItems='center'>
                          <img src={product.pictureUrl} alt={product.name} style={{ height: 50, marginRight: 20 }} />
                          <span>{product.name}</span>
                        </Box>
                      </TableCell>
                      <TableCell align="right">{currencyFormat(product.price)}</TableCell>
                      <TableCell align="center">{product.type}</TableCell>
                      <TableCell align="center">{product.brand}</TableCell>
                      <TableCell align="center">{product.quantityInStock}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => handleSelectProduct(product)} startIcon={<Edit />} />
                        <LoadingButton
                          loading={loading && target === product.id}
                          startIcon={<Delete />} color='error'
                          onClick={() => handleDeleteProduct(product.id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {metaData &&
              <Box sx={{ pt: 2 }}>
                <AppPagination
                  metaData={metaData}
                  onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))} />
              </Box>
            }
          </Box>
        </Grid>
      </Container>
    </AppLayout>
  );
}
