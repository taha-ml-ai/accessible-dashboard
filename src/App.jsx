import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { Brightness7 as SunIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import data from './data';

// Page fade-in animation
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Card fade + slide with stagger
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' }
  })
};

// Table row fade-in stagger
const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' }
  })
};

export default function App() {
  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Accessible Dashboard
          </Typography>
          <SunIcon aria-label="Toggle light/dark mode" />
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>

          {/* Stats */}
          {[
            { label: 'Active Users', value: data.activeUsers, sub: 'Users currently active' },
            { label: 'Total Users', value: data.totalUsers, sub: 'Total registered users' }
          ].map((stat, i) => (
            <Grid item xs={12} sm={6} md={3} key={stat.label}>
              <motion.div custom={i} initial="hidden" animate="visible" variants={cardVariants}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6">{stat.label}</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      {stat.value}
                    </Typography>
                    <Typography color="text.secondary">{stat.sub}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}

          {/* Quick Actions */}
          <Grid item xs={12} md={6}>
            <motion.div custom={2} initial="hidden" animate="visible" variants={cardVariants}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Quick Actions
                  </Typography>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="contained" sx={{ mt: 1 }}>
                      Create User
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Search + Filter */}
          <Grid item xs={12}>
            <motion.div custom={3} initial="hidden" animate="visible" variants={cardVariants}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Users
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Search by name, role or email"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Select fullWidth defaultValue="all">
                        <MenuItem value="all">All statuses</MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inactive">Inactive</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Table */}
          <Grid item xs={12}>
            <motion.div custom={4} initial="hidden" animate="visible" variants={cardVariants}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.users.map((user, idx) => (
                      <motion.tr
                        key={idx}
                        custom={idx}
                        initial="hidden"
                        animate="visible"
                        variants={rowVariants}
                        style={{ display: 'table-row' }}
                      >
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.status}</TableCell>
                        <TableCell>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Button variant="outlined" size="small">
                              Open
                            </Button>
                          </motion.div>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
