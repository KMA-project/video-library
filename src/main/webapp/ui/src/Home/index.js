import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image_1 from "../assets/img/1.png";
import Image_3 from "../assets/img/3.jpg";
import Image_4 from "../assets/img/4.jpg";
import Image_Event from "../assets/img/event.png";
import Image_Notification from "../assets/img/notification.png";
import "./index.css";
import "./index.scss";

const carouselArr = [Image_3, Image_4];
class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            index: 0
        }

        this.carouselInterval = null;
    }

    // componentDidUpdate  
    carousel = () => {
        let index = 0;
        setInterval(() => {
            if(index >= carouselArr.length - 1) index = 0;
            else index++;
            
            this.setState({
                index
            })
        }, 2000)
    }

    componentDidMount = () => {
        this.carouselInterval = this.carousel()
    }

    componentWillUnmount = () => {
        clearInterval(this.carouselInterval)
    }

  render() {
    return (
      <div>
        <header>
          <div className="topHeader">
            <img
              alt="Học viện Kỹ thuật mật mã"
              src="http://home.actvn.edu.vn/Upload/svda/hoc-vien-mat-ma.jpg"
              className="logoTop"
            />
          </div>
          <div className="bottomHeader">
            <nav className="headerNav">
              <ul>
                <li>
                  <a href="http://actvn.edu.vn">Trang chủ</a>
                </li>
                <li>
                  <a href="">Giới thiệu</a>
                </li>
                <li>
                  <a href="http://actvn.edu.vn/cong-tac-dao-tao-64.html">
                    Đào tạo
                  </a>
                </li>
                <li>
                  <a href="http://actvn.edu.vn/chien-luoc-khoa-hoc-cong-nghe-61.html">
                    Khoa học công nghệ
                  </a>
                </li>
                <li>
                  <a href="http://actvn.edu.vn/Articles/sinh-vien-30.html">
                    Sinh viên
                  </a>
                </li>
                <li>
                  <a href="http://actvn.edu.vn/hop-tac-quoc-te-103.html">
                    Hợp tác quốc tế
                  </a>
                </li>
                <li>
                  <a href="http://actvn.edu.vn/lien-he.html">Liên hệ</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="page">
            <div className="page-left">
                <div className="carousel">
                    <div className="carousel-item">
                        <img src={carouselArr[this.state.index]} />
                    </div>
                </div>
                <div className="event" style={{display: "block"}}>
                  <img src={Image_Event} alt="" />
                </div>
            </div>

          <div className="page-right">
            <div className="content-link">
              <Link to="/login">Đăng nhập</Link>
            </div>
            <div className="content-link">
              <a href="http://tuyensinh.actvn.edu.vn/" target="_blank">
                Thông tin tuyển sinh
              </a>
            </div>
            <div className="content-link">
              <a href="http://sdh.actvn.edu.vn/" target="_blank">
                Tuyển sinh sau đại học
              </a>
            </div>
            <div className="content-link">
              <a
                href="http://actvn.edu.vn/dao-tao-truc-tuyen-130432.html"
                className="online"
                target="_blank"
              >
                Học online
              </a>
              <a
                href="http://thuvien.actvn.edu.vn/"
                className="library"
                target="_blank"
              >
                Thư viên điện tử
              </a>
            </div>
            <div className="content-link" target="_blank">
              <a href="http://forum.actvn.edu.vn/" target="_blank">
                Diễn đàn
              </a>
            </div>
            <div className="content-link">
              <a href="#">Các khoa</a>
            </div>
            <div className="newNotification">
              <img src={Image_Notification} alt="" />
            </div>
          </div>
        </div>

        <div className="footer">
          <div>
            <div className="footertMain">
              <div className="divttbanquyen">
                <p>
                  <strong>Cơ quan chủ quản: Học viện Kỹ thuật Mật mã</strong>
                  <br />
                  <br />
                  Địa chỉ: 141 đường Chiến Thắng, Tân Triều, Thanh Trì, Hà Nội
                </p>
                <br />
              </div>
              <div className="divmenu">
                <div className="socialName">Mạng xã hội:</div>
                <div className="socialIcon">
                  <p>
                    <a
                      href="https://www.facebook.com/hocvienkythuatmatma"
                      target="_blank"
                    >
                      <img
                        alt=""
                        src="http://home.actvn.edu.vn/Upload/setting/social/facebook-icon.png"
                      />
                    </a>
                    <img
                      alt=""
                      src="http://home.actvn.edu.vn/Upload/setting/social/twitter-icon.png"
                    />
                    <img
                      alt=""
                      src="http://home.actvn.edu.vn/Upload/setting/social/Google-plus-icon.png"
                    />
                    <img
                      alt=""
                      src="http://home.actvn.edu.vn/Upload/setting/social/Reader-alt-Metro-icon.png"
                    />
                    <img
                      alt=""
                      src="http://home.actvn.edu.vn/Upload/setting/social/youtube-icon.png"
                    />
                    &nbsp;
                    <a href="http://mail.actvn.edu.vn" target="_blank">
                      <img
                        alt=""
                        src="http://home.actvn.edu.vn/Upload/setting/social/mail-icon.png"
                        style={{height: "24px", width: "24px"}}
                        // style="height:24px; width:24px"
                      />
                    </a>
                  </p>
                </div>
              </div>
              <input
                type="hidden"
                id="txtOrigins"
                value="http://103.21.148.154:8080/api/"
              />
              <input
                type="hidden"
                id="txtRoot"
                value="http://home.actvn.edu.vn"
              />
            </div>
          </div>
        </div>

        <div className="footerLast">
          <div>
            <div className="footertMain">
              <div
              // style="float:left;width:60%; padding-top:12px; color:white"
              className="footerMainLeft"
              style={{float: "left", width: "60%", paddingTop: "12px", color: "white"}}
              >
                <a href="http://actvn.edu.vn" title="Trang chủ">
                  Trang chủ
                </a>{" "}
                |
                <a href="" title="Giới thiệu">
                  Giới thiệu
                </a>{" "}
                |
                <a
                  href="/chien-luoc-khoa-hoc-cong-nghe-61.html"
                  title="Khoa học công nghệ"
                >
                  Khoa học công nghệ
                </a>{" "}
                |
                <a href="/van-ban.html" title="Văn bản">
                  Văn bản
                </a>{" "}
                |
                <a href="/chinh-sach-bao-mat.html" title="Chính sách bảo mật">
                  Chính sách bảo mật
                </a>{" "}
                |
                <a href="/tin-tuc.html" title="Tin tức">
                  Tin tức
                </a>{" "}
                |
                <a href="/lien-he.html" title="Liên hệ">
                  Liên hệ
                </a>{" "}
                |
                <a
                  href="/dao-tao-truc-tuyen-130432.html"
                  title="Đào tạo trực tuyến"
                >
                  Đào tạo trực tuyến
                </a>
              </div>
              <div
              style={{
                  float: "right",
                  width: "40%",
                  paddingTop: "0px",
                  marginTop: "-20px",
                  color: "white",
                  textAlign: "center"
              }}
              // style="float:right;width:40%; padding-top: 0px; margin-top: -20px;color:white; text-align:center"
              >
                © Copyright 2015 Học viện Kỹ thuật Mật mã. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
