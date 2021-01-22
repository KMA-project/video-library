package com.kma.libraby.web.controller;

import com.kma.libraby.constants.ApplicationConstants;
import com.kma.libraby.domain.Video;
import com.kma.libraby.service.VideoStreamService;
import com.kma.libraby.service.dto.ui.VideoUploadDTO;
import com.kma.libraby.web.errors.BadRequestAlertException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.net.URISyntaxException;


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

    @PostMapping("/videos")//Add new News
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<Video> saveCategory(@ModelAttribute VideoUploadDTO videoUploadDTO) throws URISyntaxException {
        if (videoUploadDTO.getVideoId() != 0) {
            throw new BadRequestAlertException(String.valueOf(videoUploadDTO.getVideoId()));
        }
//        if (newsService.isMainNews(Integer.parseInt(newsUploadDTO.getCategoryId())).isPresent() &&
//                newsUploadDTO.getMainNews().equals("true") ){
//            throw new ExistMainNewsException(ErrorConstants.EXIST_MAIN_NEWS);
//        }
//        if (Integer.parseInt(newsUploadDTO.getCategoryId()) == 0 &&
//                Integer.parseInt(newsUploadDTO.getMenuId()) == 0){
//            throw new NullException("Category and Menu");
//        }
        else {
            Video newVideo = videoStreamService.addVideo(videoUploadDTO);
            return ResponseEntity.created(
                    new URI(ApplicationConstants.BASE_URL+"/videos/"+videoUploadDTO.getVideoId()))
                    .body(newVideo);
        }
    }

}
