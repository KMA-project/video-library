import React, { Component } from 'react';
import Viewpost_Image from "../../../assets/img/viewpost.gif";
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="content">
                <div className="important_news">
                    <div style={{margin: "15px", paddingBottom: "10px",}}>
                        <div style={{color: "red",
                                    fontWeight: "bold",
                                    fontSize: "12px",
                                    textAlign: "center",
                                  }}> [THÔNG TIN ĐÁNG CHÚ Ý]
                        </div>
                        <span style={{float: "left",fontSize: "8px",marginRight: "5px",marginTop: "10px",}} >
                            <img style={{ border: "solid 0px white" }} src={Viewpost_Image}/>
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
                            <span style={{
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
                                  <img style={{ border: "solid 0px white" }} src={Viewpost_Image}
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
                            <div className="old_news"
                              style={{ position: "relative" }}
                            ></div>
                            <div style={{ clear: "both" }} />
                          </div>
          );
    }
}
 
export default Content;