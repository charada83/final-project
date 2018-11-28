import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  title: {
    textAlign: "center",
    fontFamily: "Mali, cursive",
    color: "#6670d1",
    fontWeight: "bold"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  card: {
    marginLeft: 10
  }
});

class Milestones extends Component {
  state = {
    milestone: "",
    date: "",
    multiline: "Controlled"
  };

  handleChange = name => event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  //state = {  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.title} variant="h3" gutterBottom>
          Milestones
        </Typography>
        <p>TextFields with dropdown, image, multiline textfield goes here?</p>
        <Paper>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="milestone">
                Milestone
              </InputLabel>
              <Select
                value={this.state.milestone}
                onChange={this.handleChange}
                name="milestone"
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value="" disabled>
                  Select Milestone
                </MenuItem>
                <MenuItem>First Smile</MenuItem>
                <MenuItem>First Time Rolling Over</MenuItem>
                <MenuItem>First Steps</MenuItem>
                <MenuItem>First Word</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="date"
              label="Date"
              type="date"
              value={this.state.date}
              defaultValue="dd/mm/yyyy"
              className={classes.FormControl}
              InputLabelProps={{
                shrink: true
              }}
              //variant="filled"
            />
            {/* <p>Insert Image </p> */}
            <Button
              style={{ marginBottom: 20 }}
              variant="contained"
              onClick={this.handleToggle}
              color="primary"
              mini
            >
              <AddIcon color="secondary" />{" "}
              <Typography color="secondary">Add Image</Typography>
            </Button>
            {/* <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Milestone Image
                </Typography>
                <Typography component="p">My first smile</Typography>
              </CardContent>
            </Card> */}
            {/* <TextField
            id="standard-multiline-flexible"
            label="Comments"
            multiline
            rowsMax="4"
            value={this.state.multiline}
            onChange={this.handleChange("multiline")}
            className={classes.textField}
          /> */}
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Milestones);
