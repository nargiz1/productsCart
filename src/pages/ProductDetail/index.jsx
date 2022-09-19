import React, { useEffect, useState, useContext } from "react";
import { cartContext } from "../../context/CartContext";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Navbar from "../../components/Navbar";

function Index() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  const { addProductToCart } = useContext(cartContext);


  return (
    <>
      <Navbar />
      {product && (
        <>
          <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>{/*  */}</TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "blue",
                      }}
                    >
                      ID
                    </TableCell>
                    <TableCell align="center">{product?.id}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "blue",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell align="center">{product?.name}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "blue",
                      }}
                    >
                      Unit Price
                    </TableCell>
                    <TableCell align="center">{product?.unitPrice}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "blue",
                      }}
                    >
                      Units in Stock
                    </TableCell>
                    <TableCell align="center">
                      {product?.unitsInStock}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "blue",
                      }}
                    >
                      Supplier Id
                    </TableCell>
                    <TableCell align="center">{product?.supplierId}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
          <Button variant="text" onClick={() => goBack()}>
            Back
          </Button>
          <Button onClick={()=> addProductToCart(product)}>Add To Cart</Button>
        </>
      )}
      {!product && (<h2>Loading...</h2>)}
    </>
  );
}

export default Index;
