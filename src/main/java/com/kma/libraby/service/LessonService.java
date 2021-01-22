package com.kma.libraby.service;

import com.kma.libraby.domain.Lesson;
import com.kma.libraby.repository.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    public List<Lesson> getAllByCourseId(@Param("courseId") int courseId){
        return lessonRepository.getAllByCourseId(courseId);
    }

    public Optional<Lesson> findByLessonId(@Param("lessonId") int lessonId){
        return lessonRepository.findById(lessonId);
    }
}
