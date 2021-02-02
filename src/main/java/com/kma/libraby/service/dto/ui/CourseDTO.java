package com.kma.libraby.service.dto.ui;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CourseDTO implements Serializable {
    private int courseId;
    private String courseName;
    private String addedBy;
    private int gradeYear;
    private boolean active;
}
