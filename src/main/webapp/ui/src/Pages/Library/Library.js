import React, { Component, Fragment } from "react";
import "./Library.css";

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
  render() {
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
                  <ul className="sidebar-menu">
                    <li className="header">DANH MỤC CHÍNH</li>
                    <li>
                      {" "}
                      <a
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-laptop" />
                        <span>Đăng ký học</span>
                        <i className="fa fa-angle-left pull-right" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/CourseByFieldTree.aspx">
                            Xem chương trình học
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/StudyRegister/StudyRegister.aspx">
                            Đăng ký học
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/Reports/Form/StudentTimeTable.aspx">
                            Xem kết quả ĐKH
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/StudyRegister/RegistrationHistory.aspx">
                            Xem quá trình ĐKH
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/CMCSoft.IU.Web.Info/Home.aspx">
                        <span>Home</span>
                      </a>
                    </li>
                    <li id="btn-video">
                      {" "}
                      <a>
                        <i className="fa fa-laptop" />
                        <span> Thư viện video </span>
                      </a>
                    </li>
                    <li>
                      <a
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-laptop" />
                        <span> Quản lý mật khẩu</span>
                        <i className="fa fa-angle-left pull-right" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/ChangePassWordStudent.aspx">
                            Đổi mật khẩu
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/EmailRegistration.aspx">
                            Đăng ký Email lấy lại mật khẩu
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-laptop" />
                        <span> Thông tin cá nhân </span>
                        <i className="fa fa-angle-left pull-right" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/StudentService/StudentTuition.aspx">
                            Xem lệ phí - học phí
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/StudentViewExamList.aspx">
                            Xem lịch thi cá nhân
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.info/StudentMark.aspx">
                            Tra cứu điểm
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/StudentService/PractiseMarkAndStudyWarning.aspx">
                            Tra cứu điểm rèn luyện và xử lý học vụ
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/StudentProfileNew/HoSoSinhVien.aspx">
                            Thông tin hồ sơ sinh viên
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/PaymentOnline/hocPhi.aspx">
                        <span>Thanh toán Online</span>
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
                          <div className="myCourse container">
                            <div className="row " id="show_Course"></div>
                            <div className="content__paging">
                              <ul>
                                <li className="btn-prev btn-active">
                                  <i className="fa fa-angle-left" />
                                </li>
                                <div className="number-page" id="number-page">
                                  {/* <li class="active">
																<a href="">1</a> 
															</li>
															<li >
																<a href="">2</a> 
															</li>
															<li>
																<a href="">3</a>
															</li> */}
                                </div>
                                <li className="btn-next">
                                  <i className="fa fa-angle-right" />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* VIDEO */}
                        <div className="choose_video">
                          <div className="choose">
                            <h4>
                              <span id="course_kma">
                                Khóa học |
                                <span
                                  style={{ position: "absolute", right: "5px" }}
                                ></span>
                              </span>
                              <span id="document_kma">
                                {" "}
                                Tài liệu tham khảo
                                <span
                                  style={{ position: "absolute", right: "5px" }}
                                ></span>
                                <span
                                  id="back"
                                  style={{ position: "absolute", right: "5px" }}
                                >
                                  <a
                                    href="../libaryvideo/libary.html"
                                    style={{
                                      color: "white",
                                      fontSize: "12px",
                                      textTransform: "none",
                                    }}
                                  >
                                    <b>Quay lại </b>
                                  </a>
                                </span>
                              </span>
                            </h4>
                            <div className="document">
                              <ul>
                                <li>
                                  <a href="http://thuvienso.actvn.edu.vn/bst/bo-suu-tap-tai-lieu-hoc-tieng-anh-1737-0.html">
                                    Bài tập chương 1{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="http://thuvienso.actvn.edu.vn/doc/ebook-viet-nam-van-minh-su-luoc-khao-tap-thuong-tu-nguon-goc-den-the-ky-thu-x-phan-1-582336.htmls">
                                    Bài tập chương 2
                                  </a>
                                </li>
                                <li>
                                  <a href="http://thuvienso.actvn.edu.vn/doc/ebook-viet-nam-van-minh-su-luoc-khao-tap-thuong-tu-nguon-goc-den-the-ky-thu-x-phan-1-582336.htmls">
                                    Bài tập chương 3
                                  </a>
                                </li>
                                <li>
                                  <a href="http://thuvienso.actvn.edu.vn/doc/ebook-viet-nam-van-minh-su-luoc-khao-tap-thuong-tu-nguon-goc-den-the-ky-thu-x-phan-1-582336.htmls">
                                    Bài tập chương 4
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          .
                        </div>
                        <div className="video container">
                          <div className="row">
                            <div
                              className="col-md-4 f-play"
                              data-toggle="modal"
                              data-target="#myModal"
                            >
                              <img
                                src={Screenshot_202329}
                                data-target="#myModal"
                                className="img-fluid"
                                alt=""
                              />
                              <img
                                src={Screenshot_203722}
                                className="play-btn"
                                data-toggle="modal"
                                data-target="#play-video-2"
                                width="50px"
                                height="50px"
                                alt=""
                              />
                            </div>
                            <div
                              className="col-md-4 f-play"
                              data-toggle="modal"
                              data-target="#myModal1"
                            >
                              <img
                                src={Screenshot_224803}
                                data-target="#myModal"
                                className="img-fluid"
                                alt=""
                              />
                              <img
                                src={Screenshot_203722}
                                className="play-btn"
                                data-toggle="modal"
                                data-target="#play-video-2"
                                width="50px"
                                height="50px"
                                alt=""
                              />
                            </div>
                            <div
                              className="col-md-4 f-play"
                              data-toggle="modal"
                              data-target="#myModal2"
                            >
                              <img
                                src={Screenshot_225125}
                                data-target="#myModal"
                                className="img-fluid"
                                alt=""
                              />
                              <img
                                src={Screenshot_203722}
                                className="play-btn"
                                data-toggle="modal"
                                data-target="#play-video-2"
                                width="50px"
                                height="50px"
                                alt=""
                              />
                            </div>
                            <div id="myModal" className="modal fade">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                  >
                                    x
                                  </button>
                                  <div className="modal-body">
                                    <div className="embed-responsive embed-responsive-16by9">
                                      <video
                                        controls
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                      >
                                        <source src="./video/https___login.codepro.vn_Home_CourseScreen1_unitID=50 - Google Chrome 2020-06-17 21-49-38.mp4" />
                                      </video>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="myModal1" className="modal fade">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                  >
                                    x
                                  </button>
                                  <div className="modal-body">
                                    <div className="embed-responsive embed-responsive-16by9">
                                      <video
                                        controls
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                      >
                                        <source src="./video/IMG_7841.MOV" />
                                      </video>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="myModal2" className="modal fade">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <button
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                  >
                                    x
                                  </button>
                                  <div className="modal-body">
                                    <div className="embed-responsive embed-responsive-16by9">
                                      <video
                                        controls
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                      >
                                        <source src="./video/XZRR5232.MP4" />
                                      </video>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* END VIDEO */}
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
              </a>
              |
              <a id="PageFooter1_SignOut_ibnLogout" href="../login/login.html">
                Thoát
              </a>
              |{" "}
              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/support/default.aspx"
                target="_blank"
              >
                Hỏi đáp
              </a>
              |{" "}
              <a
                href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/WebHelp/NewProject1.htm"
                target="_blank"
              >
                Trợ giúp
              </a>
            </h4>
          </div>
          <div id="footer_2" />
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

export default Library;
