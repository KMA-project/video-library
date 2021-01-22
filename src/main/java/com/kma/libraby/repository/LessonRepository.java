package com.kma.libraby.repository;

import com.kma.libraby.domain.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LessonRepository extends JpaRepository<Lesson,Integer> {

    @Query("SELECT l FROM Lesson l WHERE l.course.courseId =:courseId")
    List<Lesson> getAllByCourseId(@Param("courseId") int courseId);
}
