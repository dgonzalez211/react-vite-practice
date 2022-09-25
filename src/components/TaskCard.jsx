import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = React.useContext(TaskContext);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2">
          {task.description}
          <br />
        </Typography>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}
