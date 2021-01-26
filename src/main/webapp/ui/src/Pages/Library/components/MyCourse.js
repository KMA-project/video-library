import React, { Component } from 'react';
class MyCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
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

          </div>
                        
         );
    }
}
 
export default MyCourse;