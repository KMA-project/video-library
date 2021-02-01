package com.kma.libraby.service;

import com.kma.libraby.domain.Course;
import com.kma.libraby.domain.Lesson;
import com.kma.libraby.repository.CourseRepository;
import com.kma.libraby.repository.LessonRepository;
import com.kma.libraby.service.dto.ui.CourseDTO;
import com.kma.libraby.web.errors.ErrorConstants;
import com.kma.libraby.web.errors.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private LessonRepository lessonRepository;

    public List<CourseDTO> getAll(){
        return courseRepository.findAllCourseView();
    }

    public Optional<Course> findById(int id){
        return courseRepository.findById(id);
    }

    public Course addLesson(Lesson lesson,int courseId){
        Optional<Course> courseFind = courseRepository.findById(courseId);
        if (courseFind.isPresent()){
            lesson.setCourse(courseFind.get());
        }else {
            throw new NotFoundException("Courses "+ ErrorConstants.NOT_FOUND);
        }
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        courseRepository.findById(courseId).ifPresent(lesson::setCourse);
        lesson.setLessonId(0);
        lesson.setActive(true);
        lesson.setCreatedDate(timestamp);
        lessonRepository.save(lesson);
        return courseFind.get();
    }

    public Course addCourse(Course course){
        return courseRepository.save(course);
    }

}
