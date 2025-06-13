"use client";
import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

export default function Footer() {
  return (
    <Sheet
      variant="soft"
      color="primary"
      sx={{
        width: "100%",
        py: 4,
        px: 2,
        mt: 8,
        textAlign: "center",
        backgroundColor: "#e0f2ff", // Soft blue tone
        borderTop: "1px solid #cce4f6",
      }}
    >
      <Box>
        <Typography level="body-sm" sx={{ color: "#1e3a5f" }}>
          © {new Date().getFullYear()} UnipiRentals.
        </Typography>
      </Box>
    </Sheet>
  );
}


