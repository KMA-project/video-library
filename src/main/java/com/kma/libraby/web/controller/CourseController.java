package com.kma.libraby.web.controller;

import com.kma.libraby.domain.Course;
import com.kma.libraby.service.CourseService;
import com.kma.libraby.service.dto.ui.CourseDTO;
import com.kma.libraby.web.errors.ErrorConstants;
import com.kma.libraby.web.errors.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
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

}
