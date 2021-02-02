import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCourseDetailRequest } from "../actions/LibraryActions";
import {videoUrl }  from "../../../axios";

class MyCourse extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          video: "",
          lesson: ""
         }
    }

    componentWillMount = () => {
      const { courseId } = this.props.match.params;
      this.props.getCourseDetailRequest(courseId);
    }

    componentDidUpdate = (prevProps) => {
      const { courseId } = this.props.match.params;
      if (
        prevProps.match.params.courseId &&
        courseId !== prevProps.match.params.courseId
      ) {
        this.props.getCourseDetailRequest(courseId);
      }
    };

    componentWillReceiveProps(nextProps){
      const {courseDetail} = nextProps.stateOfLibraryReducers;
      if(courseDetail && JSON.stringify(courseDetail) !== '{}' && courseDetail !== this.props.stateOfLibraryReducers.courseDetail){
        this.getVideo(courseDetail.lessons[0].videos[0], courseDetail.lessons[0])
      }
    }

    getVideo = (video, lesson) => {
      this.setState({
        video,
        lesson
      })
    }
    render() { 
      const {courseDetail} = this.props.stateOfLibraryReducers;
      if(!this.state.video && !this.state.lesson && JSON.stringify(courseDetail) !== '{}'){
        this.getVideo(courseDetail.lessons[0].videos[0], courseDetail.lessons[0])
      }
        return ( 
            <div className="myCourses ">
            <div className="video-controls">
            {/*
            
            */}
            {
              !this.state.video.videoUrl ? 
                <video 
                  controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  src={videoUrl + "/" + this.state.video.videoUrl}
                >
                  </video>
              :
              <video 
                controls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                src={videoUrl + "/" + this.state.video.videoUrl}
              >
                </video>
            }
              <div className="scorm-info-wr">
                <p className="course-section-name">{this.state.lesson ? this.state.lesson.lessonName : "Chương 1. Ma trận - định thức"}</p>
                <h1 className="scorm-name">{this.state.video ? this.state.video.titleName : "Bài 1. Ma trận"}</h1>
                <p className="scorm-play-time">Độ dài: {this.state.video ? this.state.video.length : "19 phút"}</p>
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
                    {
                      courseDetail.lessons && courseDetail.lessons.map((lesson, index) => (
                        <div id="scorm-section-id-1" className="scorm-section-right" key={index}>
                          <h3 className="section-right-name">
                            {lesson.lessonName}
                          </h3>
                          <div id="learn-outline-section">
                            <ul className="learn-outline-list ">
                                {lesson.videos.map((video, videoIndex) => (
                                  <li className="learn-outline-item" key={videoIndex}>
                                    <a className="learn-lesson-wr" onClick={() => this.getVideo(video, lesson)}>
                                      {video.titleName}
                                      <div className="lesson-process-wr">
                                      </div>
                                    </a>
                                  </li>
                                ))}
                                
                            </ul>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>      
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
 
export default connect(mapStateToProps, mapDispatchToProps)(MyCourse);