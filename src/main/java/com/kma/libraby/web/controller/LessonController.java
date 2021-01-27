package com.kma.libraby.web.controller;

import com.kma.libraby.constants.ApplicationConstants;
import com.kma.libraby.domain.Course;
import com.kma.libraby.domain.Lesson;
import com.kma.libraby.service.LessonService;
import com.kma.libraby.web.errors.ErrorConstants;
import com.kma.libraby.web.errors.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
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

    @DeleteMapping("/lesson/{lessonId}")//Delete Category existing in database
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteCategory(@PathVariable ("lessonId") int lessonId) throws URISyntaxException {
        lessonService.deleteLesson(lessonId);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(new URI(ApplicationConstants.BASE_URL+"/news/"+lessonId));
        return ResponseEntity.noContent().headers(headers).build();
    }



}
