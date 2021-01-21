import React, { Component, Fragment } from "react";
import "./Click.js";
import "./Library.css";
import { connect } from "react-redux";
import { getCoursesRequest } from "./actions/LibraryActions";
import Viewpost_Image from "../../assets/img/viewpost.gif";
import Screenshot_202329 from "../../assets/img/Screenshot 2020-11-18 202329.png";
import Screenshot_203722 from "../../assets/img/Screenshot 2020-11-18 203722.png";
import Screenshot_224803 from "../../assets/img/Screenshot 2020-11-18 224803.png";
// import Screenshot_203722 from "../../assets/img/Screenshot 2020-11-18 225125.png";
import Screenshot_225125 from "../../assets/img/Screenshot 2020-11-18 225125.png";
import SendEmail from "../../assets/img/sendemail.png";
import Print from "../../assets/img/print.png";
import AddToFavorites from "../../assets/img/addtofavorites.png";
class Library extends Component {

  componentDidMount = () => {
    this.props.getCoursesRequest();
  }

 renderCourse = (year) => {
  const { courses } = this.props.stateOfLibraryReducers;
    return courses.map((item) => {
      if(item.gradeYear === year) 
      return <li key={item.courseId} style={{width: "33.33%"}}><a>{item.courseName}</a></li>
    })
 }
  render() {
    const { courses } = this.props.stateOfLibraryReducers;
    console.log(this.props.stateOfLibraryReducers)
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
                          <span>
                            Đăng ký học
                          </span>
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>
                      <li><a>Home</a></li>
                      <li>
                      <a><i className="fa fa-laptop"></i>Khóa học</a>
                      <ul className="sub-menu">
                      <li>
                        <a>Sinh vien năm nhất</a>
                        <ul className="nested-sub-menu">
                          {this.renderCourse(1)}
                        </ul>
                      </li>
                      <li>
                          <a>Sinh vien năm hai</a>
                          <ul className="nested-sub-menu">{this.renderCourse(2)}</ul>
                      </li>
                      <li>
                        <a>Sinh vien năm ba</a>
                        <ul className="nested-sub-menu">{this.renderCourse(3)}</ul>
                      </li>
                      <li>
                        <a>Sinh vien năm cuối</a>
                        <ul className="nested-sub-menu">{this.renderCourse(4)}</ul>
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
                          <li><a>Sub menu</a></li>
                          <li><a>Sub menu</a></li>
                          <li><a>Sub menu</a></li>
                          <li><a>Sub menu</a></li>
                        </ul>
                      </li>
                      <li>
                        <a>
                        <i className="fa fa-laptop"></i>
                          <span>
                            Thông tin cá nhân
                          </span>
                        <i className="fa fa-angle-left"></i>
                        </a>
                          <ul className="sub-menu">
                            <li><a>Sub menu</a></li>
                            <li><a>Sub menu</a></li>
                            <li><a>Sub menu</a></li>
                            <li><a>Sub menu</a></li>
                          </ul>
                      </li>
                      <li>
                        <a>
                          Thanh toán online
                        </a>
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
                          <div className="content">
                            <div className="important_news">
                              <div
                                style={{
                                  margin: "15px",
                                  paddingBottom: "10px",
                                }}
                              >
                                <div
                                  style={{
                                    color: "red",
                                    fontWeight: "bold",
                                    fontSize: "12px",
                                    textAlign: "center",
                                  }}
                                >
                                  [THÔNG TIN ĐÁNG CHÚ Ý]
                                </div>
                                <span
                                  style={{
                                    float: "left",
                                    fontSize: "8px",
                                    marginRight: "5px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <img
                                    style={{ border: "solid 0px white" }}
                                    src={Viewpost_Image}
                                  />
                                </span>
                                <div style={{ marginTop: "6px" }}>
                                  <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/HomeDetail.aspx?IDThongBao=B750630FF6DD4E65AF3CAD0979938F7A">
                                    <div style={{ marginLeft: "7px" }}>
                                      Thông báo về việc đăng ký học online, học
                                      kỳ 1, năm học 2016 - 2017 (Áp dụng cho các
                                      khóa AT10 đến AT12, cơ sở đào tạo phía
                                      Bắc) (24/06/2016)
                                    </div>
                                  </a>
                                </div>
                                <span
                                  style={{
                                    float: "left",
                                    fontSize: "8px",
                                    marginRight: "5px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <img
                                    style={{ border: "solid 0px white" }}
                                    src={Viewpost_Image}
                                  />
                                </span>
                                <div style={{ marginTop: "6px" }}>
                                  <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/HomeDetail.aspx?IDThongBao=F4955F6C87C24021BDF3ADA89D870D58">
                                    <div style={{ marginLeft: "7px" }}>
                                      Thời khóa biểu học phần tiếng Anh cơ bản
                                      (dành cho sinh viên AT12 phải học bổ sung)
                                      (07/03/2016)
                                    </div>
                                  </a>
                                </div>
                                <span
                                  style={{
                                    float: "left",
                                    fontSize: "8px",
                                    marginRight: "5px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <img
                                    style={{ border: "solid 0px white" }}
                                    src={Viewpost_Image}
                                  />
                                </span>
                                <div style={{ marginTop: "6px" }}>
                                  <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/HomeDetail.aspx?IDThongBao=E91556ACC3584E21B52EA8168705BD0D">
                                    <div style={{ marginLeft: "7px" }}>
                                      Thông tin giảng viên giảng dạy bổ sung học
                                      phần Tiếng Anh cơ bản (lớp L03 và L06)
                                      (03/03/2016)
                                    </div>
                                  </a>
                                </div>
                                <span
                                  style={{
                                    float: "left",
                                    fontSize: "8px",
                                    marginRight: "5px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <img
                                    style={{ border: "solid 0px white" }}
                                    src={Viewpost_Image}
                                  />
                                </span>
                                <div style={{ marginTop: "6px" }}>
                                  <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/HomeDetail.aspx?IDThongBao=58801B290743444296DA8E67666D36D4">
                                    <div style={{ marginLeft: "7px" }}>
                                      Đăng ký online học chương trình Bổ sung
                                      kiến thức tiếng Anh cơ bản, trình độ A1
                                      theo định hướng TOEIC (áp dụng cho sinh
                                      viên ngành ATTT, khóa 12, cơ sở đào tạo
                                      phía Bắc) (01/03/2016)
                                    </div>
                                  </a>
                                </div>
                                <span
                                  style={{
                                    float: "left",
                                    fontSize: "8px",
                                    marginRight: "5px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <img
                                    style={{ border: "solid 0px white" }}
                                    src={Viewpost_Image}
                                  />
                                </span>
                                <div style={{ marginTop: "6px" }}>
                                  <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/HomeDetail.aspx?IDThongBao=ADFF72A6A6AC4675B737B8C3E965E7BD">
                                    <div style={{ marginLeft: "7px" }}>
                                      Thông báo về việc đăng ký học online, học
                                      kỳ 2, năm học 2015 - 2015 (Áp dụng cho các
                                      khóa AT10 đến AT12, cơ sở đào tạo phía
                                      Bắc) (15/12/2015)
                                    </div>
                                  </a>
                                </div>
                                <span
                                  style={{
                                    float: "left",
                                    fontSize: "8px",
                                    marginRight: "5px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <img
                                    style={{ border: "solid 0px white" }}
                                    src={Viewpost_Image}
                                  />
                                </span>
                                <div style={{ marginTop: "6px" }}>
                                  <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/HomeDetail.aspx?IDThongBao=1CE348251228482EB8913C8891556A67">
                                    <div style={{ marginLeft: "7px" }}>
                                      Hướng dẫn nộp học phí qua tài khoản
                                      (03/11/2015)
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="new_news">
                              <div>
                                <b>Chưa có dữ liệu</b>
                              </div>
                              <div className="news_detail">
                                <a href="HomeDetail.aspx?IDThongBao=">
                                  Xem chi tiết
                                </a>
                              </div>
                            </div>
                            <div
                              className="old_news"
                              style={{ position: "relative" }}
                            ></div>
                            <div style={{ clear: "both" }} />
                          </div>
                          {/* COURSE*/}
                          <div className="myCourses ">
                            <div className="video-controls">
                              <video controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                <source src="./video/https___login.codepro.vn_Home_CourseScreen1_unitID=50 - Google Chrome 2020-06-17 21-49-38.mp4" />
                              </video>
                              <div className="scorm-info-wr">
                                <p className="course-section-name">Chương 1. Ma trận - định thức</p>
                                <h1 className="scorm-name">Bài 1. Ma trận</h1>
                                <p className="scorm-play-time">Độ dài: 19 phút</p>
                              </div>
                              <ul className="scorm-detail-documents clearfix">
                                <li className="clearfix">
                                  <a href="https://hoc247.net/dai-so-tuyen-tinh/bai-1-ma-tran-l8259.html" className="scorm-document-name">
                                    <i className="fa fa-book" /> Tài liệu bài giảng
                                  </a>
                                </li>
                                <li className="clearfix">
                                  <a href="https://fita.vnua.edu.vn/wp-content/uploads/2019/11/BT-va-HD-OLP-DS.pdf" className="scorm-document-name">
                                    <i className="fa fa-file" /> Bài tập tự luyện
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="slidebar-second fixsb">
                              <div className="course-outline-head">
                                <i className="fa fa-list" /> Đề cương
                                <span> khóa học</span>
                              </div>
                              <div id="course-outline" className="clearfix">
                                <div className="scroll-wrapper course-outline-wr">
                                  <div id="course-outline-main" className="course-outline-wr scroll-content">
                                    <div id="scorm-section-id-1" className="scorm-section-right">
                                      <h3 className="section-right-name">
                                        CHƯƠNG 1
                                      </h3>
                                      <div id="learn-outline-section">
                                        <ul className="learn-outline-list ">
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">
                                              Bài 1: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                                              2: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                                              3: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div id="scorm-section-id-2" className="scorm-section-right">
                                      <h3 className="section-right-name">
                                        CHƯƠNG 2
                                      </h3>
                                      <div id="learn-outline-section">
                                        <ul className="learn-outline-list ">
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                                              1: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                                              2: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                                              3: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div id="scorm-section-id-3" className="scorm-section-right">
                                      <h3 className="section-right-name">
                                        CHƯƠNG 3
                                      </h3>
                                      <div id="learn-outline-section">
                                        <ul className="learn-outline-list ">
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                                              1: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                                              2: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                          <li className="learn-outline-item">
                                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                                              3: Giới thiệu
                                              <div className="lesson-process-wr">
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
  {/* </div> */}
</div>


                       
                        </div>
                       
                        {/* END COURSE */}
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
                Trang chủ 
                |
              </a> 
                  
              <a id="PageFooter1_SignOut_ibnLogout" href="../login/login.html">
              Thoát  | 
              </a>
                
              <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/support/default.aspx"
                target="_blank">
                 Hỏi đáp  | 
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
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateOfLibraryReducers: state.getCoursesReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCoursesRequest: () => dispatch(getCoursesRequest())
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Library);