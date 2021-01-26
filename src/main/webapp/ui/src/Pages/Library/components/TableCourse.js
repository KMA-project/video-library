import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCourseDetailRequest } from "../actions/LibraryActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
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
    };
  }

  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
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

  componentWillUnmount = () => {
    console.log("Destroy!");
  };

  render() {
    const classes = this.props.classes;
    const { courseDetail } = this.props.stateOfLibraryReducers;
    return (
      <Fragment>
        {this.state.isOpen && (
          <ModalForm
             courseDetail={courseDetail}
            isOpen={this.state.isOpen}
            handleClose={this.handleClose}
            classes={classes}
          />
        )}

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Khóa học</TableCell>
                <TableCell align="center">Chó Ngọc</TableCell>
                <TableCell align="center">Chi tiết</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {courseDetail.courseName}
                </TableCell>
                <TableCell align="center">Ngọc ngu</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ minWidth: "0", padding: "6px 12px" }}
                    onClick={this.handleOpen}
                  >
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
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
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true })
)(TableCourse);
