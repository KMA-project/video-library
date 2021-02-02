import React, { Component } from 'react';
class CourseManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
                <div className="form-course">
                   
                       <h2 className="card-header">CHƯƠNG 1: Ánh xạ</h2>
                       <hr></hr>
                      <div className="button-course">
                        <button className="btn-course btn-detail">Chi tiết</button>
                        <button className="btn-course btn-delete">Xóa</button>
                      </div>
                      

                  
                     
                </div>
        );
    }
}
 
export default CourseManagement;

// chưa dùng