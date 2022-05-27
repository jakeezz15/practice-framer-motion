import { Box, Paper, Theme } from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { positions } from "@mui/system";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <Paper
      variant="outlined"
      sx={{ width: "128px", margin: "auto", minHeight: "256px" }}
    >
      <motion.div
        // animate={{
        //   scale: [1, 2, 2, 1, 1],
        //   rotate: [0, 0, 270, 270, 0],
        //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        // }}
        // transition={{
        //   duration: 2,
        //   ease: "easeInOut",
        //   times: [0, 0.2, 0.5, 0.8, 1],

        //   repeatDelay: 1,
        // }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <Box
          sx={{
            border: 2,
            padding: 16,
            maxWidth: "128px",
            alignSelf: "center",
            width: "inherit",
          }}
        >
          asdasd
        </Box>
      </motion.div>
    </Paper>
  );
}
