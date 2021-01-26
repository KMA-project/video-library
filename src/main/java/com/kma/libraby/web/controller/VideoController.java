package com.kma.libraby.web.controller;

import com.kma.libraby.constants.ApplicationConstants;
import com.kma.libraby.domain.Video;
import com.kma.libraby.service.VideoStreamService;
import com.kma.libraby.service.dto.ui.VideoUploadDTO;
import com.kma.libraby.web.errors.BadRequestAlertException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class VideoController {

    @Autowired
    VideoStreamService videoStreamService;

    @GetMapping("/video/stream/{fileType}/{fileName}")
    public Mono<ResponseEntity<byte[]>> streamVideo(@RequestHeader(value = "Range", required = false) String httpRangeList,
                                                    @PathVariable("fileType") String fileType,
                                                    @PathVariable("fileName") String fileName) {
        return Mono.just(videoStreamService.prepareContent(fileName, fileType, httpRangeList));
    }

    @PostMapping("/videos")//Add new Video
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Video> saveCategory(@ModelAttribute VideoUploadDTO videoUploadDTO) throws URISyntaxException {
        if (videoUploadDTO.getVideoId() != 0) {
            throw new BadRequestAlertException(String.valueOf(videoUploadDTO.getVideoId()));
        }
        else {
            Video newVideo = videoStreamService.addVideo(videoUploadDTO);
            return ResponseEntity.created(
                    new URI(ApplicationConstants.BASE_URL+"/videos/"+videoUploadDTO.getVideoId()))
                    .body(newVideo);
        }
    }

    @PutMapping("/videos")//Update Video existing in database
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Video> updateCategory(@ModelAttribute VideoUploadDTO videoUploadDTO) throws URISyntaxException {
        if (videoUploadDTO.getVideoId() == 0) {
            throw new BadRequestAlertException(String.valueOf(videoUploadDTO.getVideoId()));
        }
        Optional<Video> videoUpdate = videoStreamService.updateVideo(videoUploadDTO);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(new URI(ApplicationConstants.BASE_URL+"/news/"+videoUploadDTO.getVideoId()));
        if (videoUpdate.isEmpty()){
            return ResponseEntity.noContent().headers(headers).build();
        }else {
            return ResponseEntity.ok(videoUpdate.get());
        }
    }

    @PutMapping("/videos/{videoId}") //Update video status:localhost:3000/api/news/13/?status=true
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> updateNewsStatus(
            @PathVariable("videoId")  int newsId,
            @RequestParam("active") String active
    ) throws URISyntaxException {
        videoStreamService.updateVideoStatus(newsId,Boolean.parseBoolean(active));
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(new URI(ApplicationConstants.BASE_URL+"/news/"+newsId+"active?"+active));
        return ResponseEntity.noContent().headers(headers).build();
    }
}
