import React, { Component } from 'react';
const url = "http://05c4298cec51.ngrok.io/videos";
class MyCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="myCourses ">
            <div className="video-controls">
              <video src={`${url}/01-Tổng hợp và phân tích lực_Phần 1.mp4`} controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </video>
              <div className="scorm-info-wr">
                <p className="course-section-name">Chương 1. Động học chất điểm</p>
                <h1 className="scorm-name">Bài 1. Lực-Cân bằng lực</h1>
                <p className="scorm-play-time">Độ dài: 4:55 phút</p>
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
                        CHƯƠNG 1:Động học chất điểm
                      </h3>
                      <div id="learn-outline-section">
                        <ul className="learn-outline-list ">
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">
                              Bài 1: Khái quát về chuyển động cơ học
                              <div className="lesson-process-wr">
                              </div>
                            </a>
                          </li>
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                              2: Phương trình chuyển động và phương trình quỹ đạo
                              <div className="lesson-process-wr">
                              </div>
                            </a>
                          </li>
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                              3: Vận tốc của chuyển động
                              <div className="lesson-process-wr">
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="scorm-section-id-2" className="scorm-section-right">
                      <h3 className="section-right-name">
                        CHƯƠNG 2:Động lực học chất điểm
                      </h3>
                      <div id="learn-outline-section">
                        <ul className="learn-outline-list ">
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                              1: Các định luật Niu-tơn
                              <div className="lesson-process-wr">
                              </div>
                            </a>
                          </li>
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                              2: Nguyên lý tương đối Galie
                              <div className="lesson-process-wr">
                              </div>
                            </a>
                          </li>
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                              3: Lực tác dụng lên chất điểm chuyển động
                              <div className="lesson-process-wr">
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="scorm-section-id-3" className="scorm-section-right">
                      <h3 className="section-right-name">
                        CHƯƠNG 3:Chuyển động của hệ chất điểm và vật rắn
                      </h3>
                      <div id="learn-outline-section">
                        <ul className="learn-outline-list ">
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                              1: Các dạng chuyển động của vật rắn
                              <div className="lesson-process-wr">
                              </div>
                            </a>
                          </li>
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                              2: Chuyển động của khối tâm
                              <div className="lesson-process-wr">
                              </div>
                            </a>
                          </li>
                          <li className="learn-outline-item">
                            <a className="learn-lesson-wr" href="./video/Các dạng vô định cơ bản.mp4">Bài
                              3: Bài toán va chạm
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