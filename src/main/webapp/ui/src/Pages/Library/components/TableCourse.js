import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCourseDetailRequest, postCoursesRequest } from "../actions/LibraryActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
// import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
// icon
import ModalForm from "./ModalForm";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';

import callAPI from "../../../axios";
const styles = (theme) => ({
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "700px",
  },
  formControl: {
    marginTop: "2rem",
    minWidth: "100%",
  },
});

class TableCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isFormOpen: false,
      lesson: "",
      lessonField: {}
    };
  }

  handleOpen = (lesson) => {
    this.setState({
      isOpen: true,
      lesson,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  openForm = () => {
    this.setState({
      isFormOpen: true,
    });
  };

  closeForm = () => {
    this.setState({
      isFormOpen: false,
    });
  };

  componentDidMount = () => {
    this.props.getCourseDetailRequest(this.props.match.params.courseId);
  };

  componentDidUpdate = (prevProps) => {
    const { courseId } = this.props.match.params;
    if (
      prevProps.match.params.courseId &&
      courseId !== prevProps.match.params.courseId
    ) {
      this.props.getCourseDetailRequest(courseId);
    }
  };

  submitLesson = (e, courseId) => {
    const account = sessionStorage.getItem("account"); 
    const id = JSON.parse(account).accountId
    if(e.which === 13 && this.state.lesson){
      
      this.props.handlePostCoursesRequest(courseId, {lessonName: this.state.lesson,addedBy: id})
    }
  }

  onChangeInput = (e) => {
    const { value } = e.target;

    this.setState({
      lesson: value
    })
  }

  renderLesson = (courseDetail) => {
    if (courseDetail.lessons) {
      return courseDetail.lessons.map((lesson, index) => (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {lesson.lessonName}
          </TableCell>
          <TableCell align="center"> 
          <Button
              variant="contained"
              color="secondary"
              style={{ minWidth: "0", padding: "6px 12px" }}
              onClick={() => this.handleOpen(lesson)}
            >
                <DeleteIcon />
            </Button>     </TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              color="primary"
              style={{ minWidth: "0", padding: "6px 12px" }}
              onClick={() => this.handleOpen(lesson)}
            >
              <EditIcon />
            </Button>
          </TableCell>
        </TableRow>
      ));
    }
  };

  render() {
    const classes = this.props.classes;
    const { courseDetail, isLoading } = this.props.stateOfLibraryReducers;
    if(isLoading) return <div className="loading-login-page">...Loading</div>;
    return (
      <Fragment>
        {this.state.isOpen && (
          <ModalForm
            lesson={this.state.lesson}
            courseDetail={courseDetail}
            isOpen={this.state.isOpen}
            handleClose={this.handleClose}
            classes={classes}
          />
        )}

        <Modal
          open={this.state.isFormOpen}
          onClose={this.closeForm}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.paper} style={{ padding: "1rem", width: "200px" }}>
            <TextField
              size="small"
              id="outlined-basic"
              onKeyPress={(e) =>this.submitLesson(e, courseDetail.courseId)}
              label="Thêm"
              variant="outlined"
              value={this.state.lesson}
              onChange={this.onChangeInput}
            />
            </div>
        </Modal>

        <TableContainer component={Paper}>
          <Button
            style={{ margin: "1rem" }}
            variant="contained"
            color="primary"
            onClick={this.openForm}
          >
            Thêm chương
          </Button>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Khóa học</TableCell>
                <TableCell align="center">Xóa</TableCell>
                <TableCell align="center">Chi tiết</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderLesson(courseDetail)}</TableBody>
          </Table>
        </TableContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateOfLibraryReducers: state.getCoursesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCourseDetailRequest: (courseId) =>
      dispatch(getCourseDetailRequest(courseId)),
    handlePostCoursesRequest: (courseId, payload) =>
      dispatch(postCoursesRequest(courseId, payload)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true })
)(TableCourse);
