import { Box, Grid, useTheme } from "@mui/material";
import SaaSCard from "components/Dashboards/saas/Card";
import RecentOrders from "components/Dashboards/saas/RecentOrders";
import TotalSpent from "components/Dashboards/saas/TotalSpent";
import useTitle from "hooks/useTitle";
import BucketIcon from "icons/BucketIcon";
import EarningIcon from "icons/EarningIcon";
import PeopleIcon from "icons/PeopleIcon";
import WindowsLogoIcon from "icons/WindowsLogoIcon";
import { FC } from "react";

const SaaS: FC = () => {
  // change navbar title
  useTitle("Dashboard");

  const theme = useTheme();

  const cardList = [
    {
      price: 574,
      Icon: BucketIcon,
      title: "All Spending",
      color: theme.palette.primary.main,
    },
    {
      price: 521,
      title: "Earnings",
      Icon: EarningIcon,
      color: theme.palette.primary.purple,
    },
    {
      price: 684,
      Icon: WindowsLogoIcon,
      title: "Weekly revenue",
      color: theme.palette.primary.red,
    },
    {
      price: 321,
      Icon: PeopleIcon,
      title: "New Clients",
      color: theme.palette.primary.yellow,
    },
  ];

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <SaaSCard card={card} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} pt={4}>
        <Grid item lg={12} md={12} xs={12}>
          <TotalSpent />
        </Grid>

        <Grid item lg={12} md={12} xs={12}>
          <RecentOrders />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SaaS;
