import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Container, Paper } from '@mui/material';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  

const InvestmentChart = () => {
  // Chart data
  const data = {
    labels: [],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: ['#64ffda', '#1a237e', '#00bfa5', '#006064', '#004d40'],
        borderColor: ['#64ffda', '#1a237e', '#00bfa5', '#006064', '#004d40'],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#ffffff',
          font: { size: 14 }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        displayColors: true
      }
    },
    cutout: '60%'
  };

  return (
    <Box
      sx={{
        bgcolor: 'transparent',
        py: 0,
        color: 'white'
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: 4,
            mt: 0
          }}
        >
          {/* Doughnut Chart Container */}
          <Paper
            sx={{
              p: 0,
              bgcolor: "transparent",
              width: '100%',
              maxWidth: 600,
              height: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Doughnut data={data} options={options} />
          </Paper>
        
        </Box>
      </Container>
    </Box>
  );
};

export default InvestmentChart;
