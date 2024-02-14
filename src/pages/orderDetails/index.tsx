import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import LoadingPage from "../loadingPage";
import { ORDERS_TABLE_HEADER } from "@/constants";
import { useGetOrderQuery } from "@/apis/orders/queries";
import { useNavigate, useParams } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import DeleteOrderDialog from "@/components/items/dialogs/deleteOrder";
const OrderDetails = () => {
  const [openDeleteOrderDialog, setOpenDeleteOrderDialog] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenDeleteOrderDialog = () => {
    setOpenDeleteOrderDialog(true);
  };
  const handleCloseDeleteOrderDialog = () => {
    setOpenDeleteOrderDialog(false);
  };
  const { id } = useParams<{ id: string | undefined }>();
  const { data: order, isLoading, isError } = useGetOrderQuery(id);
  if (isLoading) return <LoadingPage />;
  if (isError) return <></>;
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={1}
        >
          <Stack direction="row" spacing={1}>
            <Typography color="primary" sx={{ fontWeight: "bold" }}>
              create at:{" "}
            </Typography>
            <Typography>{order?.createdAt}</Typography>
          </Stack>
          <IconButton color="error" onClick={handleOpenDeleteOrderDialog}>
            <Delete />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography color="primary" sx={{ fontWeight: "bold" }}>
            user name:{" "}
          </Typography>
          <Typography>{order?.userName}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography color="primary" sx={{ fontWeight: "bold" }}>
            user mobile number:{" "}
          </Typography>
          <Typography>{order?.userMobileNumber}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography color="primary" sx={{ fontWeight: "bold" }}>
            user's emirate:{" "}
          </Typography>
          <Typography>{order?.city}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography color="primary" sx={{ fontWeight: "bold" }}>
            payment method:{" "}
          </Typography>
          <Typography>{order?.paymentMethod}</Typography>
        </Stack>
        <DeleteOrderDialog
          open={openDeleteOrderDialog}
          onClose={handleCloseDeleteOrderDialog}
          order={{ id: order?._id ?? "" }}
        />
      </Paper>

      <Typography
        fontWeight={"bold"}
        fontSize={"2rem"}
        color={"primary"}
        textAlign={"center"}
        py={10}
      >
        products
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            {ORDERS_TABLE_HEADER.map(cell => (
              <TableCell key={cell}>{cell}</TableCell>
            ))}
          </TableHead>
          <TableBody>
            {order?.cartItems?.map(item => (
              <TableRow key={item._id}>
                <TableCell>
                  <Stack direction={"row"} spacing={2}>
                    <Box sx={{ width: 50, height: 50 }}>
                      <Box
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          aspectRatio: "1/1",
                        }}
                        src={item.img}
                      />
                    </Box>
                    <Box>
                      <Typography>{item.title}</Typography>
                      <Typography>{item.price.toFixed(2)} AED</Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell>
                  <Typography>
                    {(item.price * item.quantity).toFixed(2)} AED
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderDetails;
