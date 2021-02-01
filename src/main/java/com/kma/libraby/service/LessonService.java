package com.kma.libraby.service;

import com.kma.libraby.domain.Lesson;
import com.kma.libraby.repository.CourseRepository;
import com.kma.libraby.repository.LessonRepository;
import com.kma.libraby.service.dto.ui.LessonDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepository;

    @Autowired
    private CourseRepository courseRepository;

    public List<Lesson> getAllByCourseId(@Param("courseId") int courseId){
        return lessonRepository.getAllByCourseId(courseId);
    }

    public Optional<Lesson> findByLessonId(@Param("lessonId") int lessonId){
        return lessonRepository.findById(lessonId);
    }

//    public Lesson addLesson(LessonDTO lessonDTO){
//        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
//        Lesson lesson = new Lesson();
//        lesson.setLessonId(0);
//        lesson.setLessonName(lessonDTO.getLessonName());
//        lesson.setAddedBy(lessonDTO.getAddedBy());
//        lesson.setActive(true);
//        courseRepository.findById(lessonDTO.getCourseId()).ifPresent(lesson::setCourse);
//        lesson.setCreatedDate(timestamp);
//        return lessonRepository.save(lesson);
//    }

    public void deleteLesson(int newsId){
        lessonRepository.findById(newsId).ifPresent(
                news -> {lessonRepository.delete(news);}
        );
    }
}
