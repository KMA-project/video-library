package com.kma.libraby.web.controller;

import com.kma.libraby.constants.ApplicationConstants;
import com.kma.libraby.domain.Course;
import com.kma.libraby.domain.Lesson;
import com.kma.libraby.domain.Video;
import com.kma.libraby.service.CourseService;
import com.kma.libraby.service.dto.ui.CourseDTO;
import com.kma.libraby.service.dto.ui.VideoUploadDTO;
import com.kma.libraby.web.errors.BadRequestAlertException;
import com.kma.libraby.web.errors.ErrorConstants;
import com.kma.libraby.web.errors.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/courses")
    public ResponseEntity<List<CourseDTO>> getAll(){
        return ResponseEntity.ok(courseService.getAll());
    }

    @GetMapping("/courses/{courseId}")
    public ResponseEntity<Course> getCourseById(@PathVariable ("courseId") int courseId) throws URISyntaxException, IOException {
        Optional<Course> courseFind = courseService.findById(courseId);
        if (courseFind.isPresent()){
            return ResponseEntity.ok(courseFind.get());
        }else {
            throw new NotFoundException("Courses "+ ErrorConstants.NOT_FOUND);
        }
    }

    @PostMapping("/courses/{courseId}")
    public ResponseEntity<Course> addLesson(
            @PathVariable ("courseId") int courseId,
            @RequestBody Lesson lesson){
        return ResponseEntity.ok(courseService.addLesson(lesson,courseId));
    }

    @PostMapping("/courses/grade")
    public ResponseEntity<List<CourseDTO>> saveCourse(
            @RequestBody CourseDTO courseDTO) throws URISyntaxException {
        if (courseDTO.getCourseId() != 0) {
            throw new BadRequestAlertException(String.valueOf(courseDTO.getCourseId()));
        }
        else {
            courseService.addCourse(courseDTO);
            return ResponseEntity.ok(courseService.getAll());
        }
    }

}
