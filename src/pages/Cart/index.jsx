import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function Index() {
  const navigate = useNavigate();
  const { addProductToCart, removeProductFromCart, emptyCart, products } =
    useContext(cartContext);

  return (
    <>
      <Navbar />
      {products.length > 0 && (
        <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    ID
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Quantity
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontWeight: "bold" }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <TableCell component="th" scope="row">
                      {product.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.quantity}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        variant="text"
                        onClick={() => addProductToCart(product)}
                      >
                        Add
                      </Button>
                      <Button
                        variant="text"
                        color="error"
                        onClick={() => removeProductFromCart(product)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="text"
            color="error"
            onClick={() => emptyCart()}
          >
            Remove All
          </Button>
        </Container>
      )}
      {products.length ==0 && (<h2>Cart is Empty</h2>)}
    </>
  );
}

export default Index;
