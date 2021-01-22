package com.kma.libraby.service;

import com.kma.libraby.domain.Course;
import com.kma.libraby.repository.CourseRepository;
import com.kma.libraby.service.dto.ui.CourseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<CourseDTO> getAll(){
        return courseRepository.findAllCourseView();
    }

    public Optional<Course> findById(int id){
        return courseRepository.findById(id);
    }

}
