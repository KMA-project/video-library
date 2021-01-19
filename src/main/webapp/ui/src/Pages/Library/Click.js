import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
$(document).ready(function(){
    $('#btn-video').click(() => {
      $('.myCourses').show();
      $('.video-controls').show();
      $('.slidebar-second').show();
      $('.content').hide();
      
     
    })
  }); 
  