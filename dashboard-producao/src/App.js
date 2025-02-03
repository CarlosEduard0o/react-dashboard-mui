import React, { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { CircularProgress, Card, CardContent, Typography, Grid, Box, Pagination } from "@mui/material";

function DashboardCard({ title, children }) {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, bgcolor: "#fff" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

function DashboardSection() {
  return (
    <Box sx={{ m:2, bgcolor: "#d9d9d9", p: 1, borderRadius: 2, boxShadow: 3 }}>
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={3} sx={{ display: "flex" }}>
          <DashboardCard title="Seção 1">
            <Typography variant="body2">Lorem Ipsum</Typography>
            <Typography variant="body2">is simply dummy is simply . </Typography>
            <Typography variant="h6" align="start" marginTop={6} gutterBottom>text of the</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress 
                variant="determinate" 
                value={80} 
                size={80} 
                thickness={3} 
                sx={{ color: "#4576df" }}
              />
              <Typography variant="h6" sx={{ position: "absolute" }}>80%</Typography>
            </Box>
            <Typography marginTop={2} variant="body2" align="center">printing and</Typography>
            <Typography variant="body2" align="center">typesetting industry.</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={9} sx={{ display: "flex" }}>
        <DashboardCard title="Lorem Ipsum has been the industry's standard">
          <BarChart
            xAxis={[{ 
              scaleType: "band", 
              data: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
              label: "Hora, dia: 17/01/2024"
            }]}
            yAxis={[{ label: "Quantidade" }]}
            series={[
              { 
                data: [30, 50, 80, 60, 20, 30, 15, 10, 80, 80, 75, 50, 60], 
                label: "Status 1", 
                color: "#4576df",
                valueFormatter: (value) => `${value}`
              },
              { 
                data: [20, 40, 30, 10, 15, 10, 6, 15, 20, 21, 23, 15, 2], 
                label: "Status 2", 
                color: "#c8e9ff",
                valueFormatter: (value) => `${value}`
              }
            ]}
            layout="vertical"
            width={650}
            height={320}
            label={{
              position: "top",
              color: "#fff",
              fontSize: 12,
              fontWeight: "bold",
            }}
          />
        </DashboardCard>
      </Grid>

      <Grid item xs={8} md={3} sx={{ display: "flex" }}>

        </Grid>
      </Grid>
    </Box>
  );
}


function App() {
  const totalSections = 5;
  const sectionsPerPage = 4;
  const [page, setPage] = useState(1);

  const sections = Array.from({ length: totalSections }, (_, index) => <DashboardSection key={index} />);
  
  const startIndex = (page - 1) * sectionsPerPage;
  const displayedSections = sections.slice(startIndex, startIndex + sectionsPerPage);

  return (
    <Box sx={{bgcolor: "#fbb019", minHeight: "100vh" }}>
      <Box sx={{ bgcolor: "black", color: "white", textAlign: "center" }}>
        <Typography padding={2} variant="h4">TÍTULO</Typography>
      </Box>

      <Grid container spacing={1}>
        {displayedSections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>{section}</Grid>
        ))}
      </Grid>

      {/* Paginação */}
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination 
          count={Math.ceil(totalSections / sectionsPerPage)} 
          page={page} 
          onChange={(event, value) => setPage(value)} 
          color="primary" 
        />
      </Box>
    </Box>
  );
}

export default App;
