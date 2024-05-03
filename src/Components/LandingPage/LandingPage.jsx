import "./style.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@mui/material";


const LandingPage = () => {
  return (
    <main>
      <div className="textContainer">
        <motion.h1
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="Step-Wise-heading"
        >
          Step Wise
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="Export-Navigator-heading"
        >
          An Export Navigator.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          Streamline your export journey, one step at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="buttonContainer"
        >
          <NavLink to="/Dashboard">
            <Button variant="contained">Dashboard</Button>
          </NavLink>

        </motion.div>
      </div>
    </main>
  );
};

export default LandingPage;
