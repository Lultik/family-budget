import { Box, Button } from "@mui/material";

export const ErrorPage = () => {
  return (
    <Box sx={{ zIndex: "modal" }}>
      Error
      <Button href="/dashboard" variant="outlined" sx={{ mt: 5 }}>
        Home
      </Button>
    </Box>
  );
};
