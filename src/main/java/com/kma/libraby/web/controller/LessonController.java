package com.kma.libraby.web.controller;

import com.kma.libraby.domain.Course;
import com.kma.libraby.domain.Lesson;
import com.kma.libraby.service.LessonService;
import com.kma.libraby.web.errors.ErrorConstants;
import com.kma.libraby.web.errors.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @GetMapping("/courses/{courseId}/lesson")
    public ResponseEntity<List<Lesson>> getAllLessonByCourseId(@PathVariable("courseId") int courseId){
        return ResponseEntity.ok(lessonService.getAllByCourseId(courseId));
    }

    @GetMapping("/lesson/{lessonId}")
    public ResponseEntity<Lesson> getCourseById(@PathVariable ("lessonId") int lessonId) {
        Optional<Lesson> lessonFind = lessonService.findByLessonId(lessonId);
        if (lessonFind.isPresent()){
            return ResponseEntity.ok(lessonFind.get());
        }else {
            throw new NotFoundException("Lesson "+ ErrorConstants.NOT_FOUND);
        }
    }

    
}
