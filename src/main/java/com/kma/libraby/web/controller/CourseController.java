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

    @PostMapping("/courses")
    public ResponseEntity<Course> saveCategory(@RequestBody Course course) throws URISyntaxException {
        if (course.getCourseId() != 0) {
            throw new BadRequestAlertException(String.valueOf(course.getCourseId()));
        }
        else {
            Course newCourse = courseService.addCourse(course);
            return ResponseEntity.created(
                    new URI(ApplicationConstants.BASE_URL+"/courses/"+course.getCourseId()))
                    .body(newCourse);
        }
    }

}
