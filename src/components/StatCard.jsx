import { Card, CardContent, Typography } from "@mui/material";
import "../animations.css"; // import here

export default function StatCard({ title, value, delay = 0 }) {
  return (
    <Card
      className="card-animate card-hover"
      sx={{ transition: "all 0.3s ease", animationDelay: `${delay}s` }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" color="primary">{value}</Typography>
      </CardContent>
    </Card>
  );
}
