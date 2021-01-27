import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import callAPI from "../../../axios";
class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoName: "",
      video: ""
    };
  }

  handleClose = () => {
    this.props.handleClose();
  };

  componentDidMount = () => {};

  componentWillUnmount = () => {
    console.log("Destroy!");
  };

  handleChange = (event) => {
    // const {videoName} = JSON.parse(event.target.value);
    this.setState({
      videoName: event.target.value,
    });
  };

  getVideo = async (item) => {
    const  {data}  = await callAPI(`video/stream/mp4/${item.urlName}`, "GET");
    this.setState({ 
      video: data
    })
  };
  render() {
    const { lesson } = this.props;
    console.log(this.state.video);
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={this.props.classes.modal}
        open={this.props.isOpen}
        onClose={() => this.handleClose()}
        // closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={this.props.isOpen}>
          <div className={this.props.classes.paper}>
            <h1 style={{ textAlign: "center" }}>Chọn bài học</h1>
            <form>
              <TextField
                id="outlined-search"
                label="Tên chương học"
                type="Text"
                variant="outlined"
                size="small"
                style={{ width: "100%", marginTop: "2rem" }}
                value={lesson.lessonName}
              />
              <FormControl
                variant="outlined"
                size="small"
                className={this.props.classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Chọn chương
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  size="small"
                  value={this.state.videoName}
                  onChange={this.handleChange}
                  label="Age"
                >
                  {lesson.videos.map((video, index) => (
                    <MenuItem
                      key={index}
                      value={video.titleName}
                      onClick={() => this.getVideo(video)}
                    >
                      {video.titleName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
            <video width="320" height="240" controls>
              <source src={this.state.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default ModalForm;
