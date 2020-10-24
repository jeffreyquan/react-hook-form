import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useSupport } from "../utils/useSupport";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "40px",
      minWidth: "50vw",
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: "20px",
      },
    },
  })
);

export const SupportForm = () => {
  const { supportRequest, setSupportRequest } = useSupport();
  const classes = useStyles();

  const submitSupportRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(supportRequest);
  };

  return (
    <div>
      <form className={classes.root} onSubmit={submitSupportRequest}>
        <h1>Support</h1>
        <TextField
          id="name"
          variant="outlined"
          label="Name"
          fullWidth={true}
          value={supportRequest.name}
          onChange={(e) =>
            setSupportRequest({
              name: e.target.value,
            })
          }
        />
        <TextField
          id="message"
          variant="outlined"
          label="Message"
          fullWidth={true}
          value={supportRequest.message}
          onChange={(e) =>
            setSupportRequest({
              message: e.target.value,
            })
          }
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth={true}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
