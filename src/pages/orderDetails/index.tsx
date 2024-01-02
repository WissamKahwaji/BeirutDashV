import React from "react";
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
} from "@mui/material";
import LoadingPage from "../loadingPage";
import { ORDERS_TABLE_HEADER } from "@/constants";
import { useGetOrderQuery } from "@/apis/orders/queries";
import { useParams } from "react-router-dom";
const OrderDetails = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const { data: order, isLoading, isError } = useGetOrderQuery(id);
  if (isLoading) return <LoadingPage />;
  if (isError) return <></>;
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Stack direction={"row"} spacing={1}>
          <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
            create at:{" "}
          </Typography>
          <Typography>{order?.createdAt}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
            user name:{" "}
          </Typography>
          <Typography>{order?.userName}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
            user mobile number:{" "}
          </Typography>
          <Typography>{order?.userMobileNumber}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
            user's emirate:{" "}
          </Typography>
          <Typography>{order?.city}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
            payment method:{" "}
          </Typography>
          <Typography>{order?.paymentMethod}</Typography>
        </Stack>
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
            {ORDERS_TABLE_HEADER.map((cell) => (
              <TableCell key={cell}>{cell}</TableCell>
            ))}
          </TableHead>
          <TableBody>
            {order?.cartItems?.map((item) => (
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
                      <Typography>{item.price} AED</Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.weight} KG</TableCell>
                <TableCell>
                  <Typography>{item.price * item.quantity} AED</Typography>
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
