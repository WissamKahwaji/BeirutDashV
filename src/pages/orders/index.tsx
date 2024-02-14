import { useGetOrdersQuery } from "@/apis/orders/queries";
import {
  Typography,
  Stack,
  Link as MuiLink,
  Grid,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import LoadingPage from "../loadingPage";
import { Link, useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { useState } from "react";
import DeleteOrderDialog from "@/components/items/dialogs/deleteOrder";

const Orders = () => {
  const { data: orders, isLoading, isError } = useGetOrdersQuery();
  if (isLoading) return <LoadingPage />;
  if (isError) return <></>;
  return (
    <Grid item container xs={12} gap={4}>
      {orders?.map(order => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={order._id}>
          <MuiLink
            component={Link}
            sx={{ textDecoration: "none" }}
            to={`/order/${order._id}`}
          >
            <Paper sx={{ p: 2 }}>
              <Stack direction={"row"} spacing={1}>
                <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
                  create at:{" "}
                </Typography>
                <Typography>{order.createdAt}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
                  user name:{" "}
                </Typography>
                <Typography>{order.userName}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
                  user mobile number:{" "}
                </Typography>
                <Typography>{order.userMobileNumber}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
                  user's emirate:{" "}
                </Typography>
                <Typography>{order.city}</Typography>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
                  payment method:{" "}
                </Typography>
                <Typography>{order.paymentMethod}</Typography>
              </Stack>
            </Paper>
          </MuiLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default Orders;
