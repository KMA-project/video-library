package com.kma.libraby.service.dto.ui;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VideoUploadDTO {
    private int videoId;
    private String titleName;
    private String addedBy;
    private int lessonId;
    private int belong_to;
    private MultipartFile video;
}
