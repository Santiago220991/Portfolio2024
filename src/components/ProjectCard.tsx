import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BLUE, GRAY } from "../constants/colors";
import ActionButton from "./Button";
import Chips from "./Chips";

const ProjectCard = ({
  src,
  title,
  technologies,
}: {
  src: string;
  title: string;
  technologies: string[];
}) => {
  return (
    <Card
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 1,
        maxWidth: { md: "425px" },
      }}
    >
      <CardMedia
        sx={{ height: 250, width: "100%", objectFit: "cover" }}
        image={`../../src/assets/${src}`}
        title="tourify project"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            color: BLUE,
            maxHeight: "auto",
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <Chips
        dataCollection={technologies}
        backgroundColor={GRAY}
      />
      <CardActions>
        <ActionButton text={"See project"} />
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
