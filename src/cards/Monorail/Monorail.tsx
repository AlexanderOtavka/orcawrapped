import { Box, Typography, useTheme } from "@mui/material";
import OrcaCard from "../../components/ui/OrcaCard";

export default function Monorail() {
  const theme = useTheme();
  return (
    <OrcaCard
      sx={{
        aspectRatio: "9/16",
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        justifyItems: "stretch",
      }}
    >
      <Box sx={{ mt: 1 }} flexShrink={1}>
        <Typography
          variant="h4"
          sx={{ color: theme.palette.brightText, textAlign: "center" }}
        >
          Monorail
        </Typography>
      </Box>
    </OrcaCard>
  );
}
