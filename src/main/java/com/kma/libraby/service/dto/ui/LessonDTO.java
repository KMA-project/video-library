package com.kma.libraby.service.dto.ui;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LessonDTO {
    private int lessonId;
    private String lessonName;
    private int courseId;
    private String addedBy;

}
