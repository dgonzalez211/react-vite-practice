import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const { tasks } = React.useContext(TaskContext);

  if (tasks.length == 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <hr />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(tasks).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <TaskCard task={_} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
