import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GRAY } from "../constants/colors";
import { Chip, Stack } from "@mui/material";
import ActionButton from "./Button";

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
      }}
    >
      <CardMedia
        sx={{ height: 250, width: "100%" }}
        image={`../../src/assets/${src}`}
        title="tourify project"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          marginTop: "16px",
          marginBottom: "16px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          rowGap: "8px",
          fontSize: "12px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        {technologies.map((technologie, index) => (
          <Chip
            key={`${technologie}-${index}`}
            sx={{ borderRadius: 1, backgroundColor: GRAY, fontWeight: 600 }}
            label={technologie}
            size="medium"
          />
        ))}
      </Stack>
      <CardActions>
        <ActionButton text={"See project"} />
      </CardActions>
    </Card>
  );
};

export default ProjectCard;