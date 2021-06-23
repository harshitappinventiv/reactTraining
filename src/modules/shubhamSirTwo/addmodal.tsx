import { makeStyles, createStyles, Theme, Modal } from "@material-ui/core";

type AppProps = {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      backgroundColor: theme.palette.background.paper,
      // border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  })
);

function AddModal({ open, handleClose, children }: AppProps) {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.root}>{children}</div>
    </Modal>
  );
}

export default AddModal;
