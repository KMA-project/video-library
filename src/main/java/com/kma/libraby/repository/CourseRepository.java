package com.kma.libraby.repository;

import com.kma.libraby.domain.Course;
import com.kma.libraby.service.dto.ui.CourseDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course,Integer> {

    @Query("SELECT NEW com.kma.libraby.service.dto.ui.CourseDTO(" +
            "c.courseId,c.courseName,c.gradeYear,c.active) " +
            "FROM Course c ORDER BY c.gradeYear ASC ")
    List<CourseDTO> findAllCourseView();

    @Query("SELECT c FROM Course c WHERE c.courseId =:courseId")
    Optional<Course> findById(@Param("courseId") Integer courseId);


}
