import React, { Component, Fragment } from "react";
import "./Click.js";
import "./Library.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCoursesRequest } from "./actions/LibraryActions";
import { withStyles } from "@material-ui/core/styles";
import Screenshot_202329 from "../../assets/img/Screenshot 2020-11-18 202329.png";
import Screenshot_203722 from "../../assets/img/Screenshot 2020-11-18 203722.png";
import Screenshot_224803 from "../../assets/img/Screenshot 2020-11-18 224803.png";
// import Screenshot_203722 from "../../assets/img/Screenshot 2020-11-18 225125.png";
import Screenshot_225125 from "../../assets/img/Screenshot 2020-11-18 225125.png";
import SendEmail from "../../assets/img/sendemail.png";
import Print from "../../assets/img/print.png";
import AddToFavorites from "../../assets/img/addtofavorites.png";
import CourseManagement from "./components/CourseManagement.js";
import TableCourse from "./components/TableCourse.js";
import MyCourse from "./components/MyCourse.js";
import Content from "./components/Content.js";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";

const styles = (theme) => ({
  table: {
    minWidth: 250,
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
});

const renderCourseData = ["/my_course", "", "/course_management", ""];
class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      lesson: ""
    };
  }
  componentDidMount = () => {
    this.props.getCoursesRequest();
  };

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


  submitLesson = (e) => {
    e.preventDefault();
    let lessonArr = [];
    let temp = JSON.parse(localStorage.getItem("lesson")) || [];
    temp.push(this.state.lesson);
    localStorage.setItem("lesson", JSON.stringify(temp));
    this.setState({
      isOpen: false
    })
  }

  onChangeInput = (e) => {
    const { value } = e.target;

    this.setState({
      lesson: value
    })
  }
  renderCourse = (year, link_name) => {
    const { courses } = this.props.stateOfLibraryReducers;
    return courses.map((item, index) => {
      if (item.gradeYear === year)
        switch (link_name) {
          case "/my_course":
            return (
        
                <li key={item.courseId} style={{ width: "33.33%" }}>
                  <Link to={`/my_course/${item.courseId}`}>
                    {item.courseName}
                  </Link>
                </li>
          
            );

          case "/course_management":
            return (
        
                <li key={item.courseId} style={{ width: "33.33%" }}>
                  <Link to={`/course_management/${item.courseId}`}>
                    {item.courseName}
                  </Link>
                </li>
          
            );
          default:
            return (
        
                <li key={item.courseId} style={{ width: "33.33%" }}>
                  <Link to="">{item.courseName}</Link>
                </li>
          
            );
        }
    });
  };

  // switchLink = (item, index) => {
  //   switch(renderCourseData[index]) {
  //     case "/my_course":
  //       return <Link to="/my_course">{item.courseName}</Link>
  //     case "/course_management":
  //       return <Link to="/course_management">{item.courseName}</Link>
  //     default:
  //       return <a>{item.courseName}</a>
  //   }
  // }

  render() {
    // console.log(this.props.stateOfLibraryReducers)
    const classes = this.props.classes;
    let lessonArr = JSON.parse(localStorage.getItem("lesson")) || [];
    return (

      <Fragment>
        <header className="header-main">
          <div id="header">
            <div className="school_name">
              <span id="PageHeader1_lblWebtitle">HỌC VIỆN KỸ THUẬT MẬT MÃ</span>
            </div>
            <span id="navbar">
              <a href="../index/index.html">Trang chủ</a> |
              <a id="PageHeader1_SignOut_ibnLogout" href="../login/login.html">
                Thoát{" "}
              </a>
              |
              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/support/default.aspx"
                target="_blank"
              >
                Hỏi đáp
              </a>
              |
              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/WebHelp/NewProject1.htm"
                target="_blank"
              >
                Trợ giúp
              </a>
              <select
                id="PageHeader1_drpNgonNgu"
                style={{ width: "50px", zIndex: 0 }}
              >
                <option
                  selected="selected"
                  value="E43296C6F24C4410A894F46D57D2D3AB"
                >
                  VN
                </option>
              </select>
            </span>
            <div id="box_user">
              <div id="PageHeader1_Panel1">
                <p>
                  <span
                    id="PageHeader1_lblUserFullName "
                    style={{ fontSize: "10px", fontWeight: "bold" }}
                  >
                    Huỳnh Hồng Ngọc(AT140628)
                  </span>
                  <span
                    id="PageHeader1_lblRoleTitle"
                    style={{ color: "black" }}
                  >
                    Vai trò:
                  </span>
                  <span
                    id="PageHeader1_lblUserRole"
                    style={{ color: "Blue", fontSize: "10px" }}
                  >
                    Sinh viên
                  </span>
                  <a
                    id="PageHeader1_Newmessage"
                    href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/MessageSystem/Default.aspx"
                    style={{ color: "Blue", fontSize: "10px" }}
                  >
                    Hộp tin nhắn
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div id="searchbox">
            <div>
              <input
                name="txtsearch"
                type="text"
                id="txtsearch"
                className="txtSearch"
              />
              <a
                id="linkTimkiem"
                className="btnSearch"
                href="#"
                style={{ color: "Blue", textDecoration: "none" }}
              >
                <b>Tìm kiếm</b>
              </a>
            </div>
          </div>
        </header>
        {/* END HEADER */}
        {/*navbar */}
        <div className="container-home">
          <div className="left-home">
            {/*Begin Left*/}
            <div id="left">
              <div className="skin-green-light sidebar-mini">
                <div id="Menu1_div_nav_menu" className="sidebar dropdown">
                  <div className="widget-title">
                    <h1>Danh mục chính</h1>
                  </div>
                  <ul className="menu">
                    <li>
                      <a>
                        <i className="fa fa-laptop"></i>
                        <span>Đăng ký học</span>
                        <i className="fa fa-angle-left"></i>
                      </a>
                    </li>
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-laptop"></i>Khóa học
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a>Năm 1</a>
                          <ul className="nested-sub-menu">
                            {this.renderCourse(1, "/my_course")}
                          </ul>
                        </li>
                        <li>
                          <a>Năm 2</a>
                          <ul className="nested-sub-menu">{this.renderCourse(2, "/my_course")}</ul>
                      </li>
                      <li>
                        <a>Năm 3</a>
                        <ul className="nested-sub-menu">{this.renderCourse(3, "/my_course")}</ul>
                      </li>
                      <li>
                        <a>Năm 4</a>
                        <ul className="nested-sub-menu">{this.renderCourse(4, "/my_course")}</ul>
                      </li>
                    </ul>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-laptop"></i>
                          <span>
                              Quản lý khóa học
                          </span>
                          <i className="fa fa-angle-left"></i>
                        </a>
                        <ul className="sub-menu">
                          <li><a>Năm 1</a>
                            <ul className="nested-sub-menu">
                            {this.renderCourse(1, "/course_management")}
                            {
                              lessonArr.map((item, index) => (
                                <li style={{width: "33.33%", padding: "1rem"}} key={index}>{item}</li>
                              ))
                            }
                          </ul>
                        </li>
                        <li>
                          <a>Năm 2</a>
                          <ul className="nested-sub-menu">
                            {this.renderCourse(2, "/course_management")}
                            {
                              lessonArr.map((item, index) => (
                                <li style={{width: "33.33%", padding: "1rem"}} key={index}>{item}</li>
                              ))
                            }
                          </ul>
                        </li>
                        <li>
                          <a>Năm 3</a>
                          <ul className="nested-sub-menu">
                            {this.renderCourse(3, "/course_management")}
                            {
                              lessonArr.map((item, index) => (
                                <li style={{width: "33.33%", padding: "1rem"}} key={index}>{item}</li>
                              ))
                            }
                          </ul>
                        </li>
                        <li>
                          <a>Năm 4</a>
                          <ul className="nested-sub-menu">
                            {this.renderCourse(4, "/course_management")}
                            {
                              lessonArr.map((item, index) => (
                                <li style={{width: "33.33%", padding: "1rem"}} key={index}>{item}</li>
                              ))
                            }
                          </ul>
                        </li>
                        <li onClick={this.handleOpen}>
                          <a>Thêm Khóa học</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>
                          <i className="fa fa-laptop"></i>
                          <span>
                              Quản lý mật khẩu
                          </span>
                          <i className="fa fa-angle-left"></i>
                        </a>
                        <ul className="sub-menu">
                          <li><a>Đổi mật khẩu</a></li>
                          <li><a>Đăng kí Email lấy lại mật khẩu</a></li>
                       </ul>
                      </li>
                      <li>
                        <a>
                        <i className="fa fa-laptop"></i>
                        <span>Thông tin cá nhân</span>
                        <i className="fa fa-angle-left"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a>Xem lệ phí - học phí</a>
                        </li>
                        <li>
                          <a>Xem lich thi cá nhân</a>
                        </li>
                        <li>
                          <a>Tra cứu điểm</a>
                        </li>
                        <li>
                          <a>Tra cứu điểm rèn luyện và xử lý học vụ</a>
                        </li>
                        <li>
                          <a>Thông tin hồ sơ sinh viên</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Thanh toán online</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
          {/*End Left*/}
          <div className="main-home">
            <div>
              {/*Begin Danh sach cac muc co the duoc hien thi o center*/}
              <div id="Panel_center" style={{ width: "100%" }}>
                <table
                  id="ctl05_MyList"
                  cellSpacing={0}
                  cellPadding={0}
                  style={{ width: "100%", borderCollapse: "collapse" }}
                >
                  <tbody>
                    <tr>
                      <td valign="top" style={{ width: "100%" }}>
                        <div className="box_center">
                          <h4 className="box_1">
                            <span>
                              Đại học chính quy
                              <span
                                style={{ position: "absolute", right: "5px" }}
                              >
                                <a
                                  style={{
                                    color: "white",
                                    fontSize: "12px",
                                    textTransform: "none",
                                  }}
                                  href="./libary.html"
                                >
                                  <b>Quay lại </b>
                                </a>
                              </span>
                            </span>
                          </h4>
                          {this.props.children}
                        </div>

                        {/* END COURSE */}

                        {/* table course */}
                        {/* end */}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/*End Thong tin ve He dao tao*/}
              </div>
              {/*End Danh sach cac muc co the duoc hien thi o center*/}
            </div>
            {/*End Center*/}
          </div>
        </div>
        {/* FOOTER */}
        <div className="clear" />
        <footer className="footer">
          <div id="footer_1">
            <h4 id="hotline">
              Ðường dây nóng
              <br />
              <span id="PageFooter1_lblHotline" />
            </h4>
            <h4 className="footer_content">
              <a id="PageFooter1_GoHome_ibnGoHome" href="../index/index.html">
                Trang chủ |
              </a>

              <a id="PageFooter1_SignOut_ibnLogout" href="../login/login.html">
                Thoát |
              </a>

              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/support/default.aspx"
                target="_blank"
              >
                Hỏi đáp |
              </a>

              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/WebHelp/NewProject1.htm"
                target="_blank"
              >
                Trợ giúp
              </a>
            </h4>
          </div>
          {/* <div id="footer_2" /> */}
          <table className="footer_item">
            <tbody>
              <tr>
                <td className="text-align: right; width: 533; pl-1">
                  <span id="PageFooter1_lblEmail">
                    <a href="#" onclick="javascript:window.print()">
                      <div className="footer_icon">
                        {" "}
                        <img src={Print} />
                      </div>
                      <div className="footer_left">In trang này</div>
                    </a>
                    <a href="mailto:?subject=He thong thong tin IU&body=http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/Home.aspx">
                      <div className="footer_icon">
                        <img src={SendEmail} />
                      </div>
                      <div className="footer_left">Gửi email trang này</div>
                    </a>
                    <a href="#" onclick="javascript:addfav()">
                      <div className="footer_icon">
                        <img src={AddToFavorites} />
                      </div>
                      <div className="footer_left">Thêm vào ưa thích</div>
                    </a>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </footer>
        <Modal
          open={this.state.isOpen}
          onClose={this.handleClose}
          className={classes.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <form
            onSubmit={this.submitLesson}
            className={classes.paper}
            noValidate
            autoComplete="off"
            style={{ padding: "1rem", width: "200px" }}
          >
            <TextField
              size="small"
              id="outlined-basic"
              label="Thêm"
              variant="outlined"
              value={this.state.lesson}
              onChange={this.onChangeInput}
            />
          </form>
        </Modal>
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
    getCoursesRequest: () => dispatch(getCoursesRequest()),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles, { withTheme: true })
)(Library);
