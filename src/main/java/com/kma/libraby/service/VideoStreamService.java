package com.kma.libraby.service;

import com.kma.libraby.constants.ApplicationConstants;
import com.kma.libraby.domain.Course;
import com.kma.libraby.domain.Lesson;
import com.kma.libraby.domain.Video;
import com.kma.libraby.repository.AccountRepository;
import com.kma.libraby.repository.CourseRepository;
import com.kma.libraby.repository.LessonRepository;
import com.kma.libraby.repository.VideoRepository;
import com.kma.libraby.service.dto.ui.VideoUploadDTO;
import com.kma.libraby.service.utils.ApplicationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.Optional;

@Service
public class VideoStreamService {
    @Autowired
    private VideoRepository videoRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private LessonRepository lessonRepository;

    /**
     * Prepare the content.
     *
     * @param fileName String.
     * @param fileType String.
     * @param range    String.
     * @return ResponseEntity.
     */
    public ResponseEntity<byte[]> prepareContent(String fileName, String fileType, String range) {
        long rangeStart = 0;
        long rangeEnd;
        byte[] data;
        Long fileSize;
        String fullFileName = ApplicationUtils.deserializeData(fileName) + "." + fileType;
        try {
            fileSize = getFileSize(fullFileName);
            if (range == null) {
                return ResponseEntity.status(HttpStatus.OK)
                        .header(ApplicationConstants.CONTENT_TYPE, ApplicationConstants.VIDEO_CONTENT + fileType)
                        .header(ApplicationConstants.CONTENT_LENGTH, String.valueOf(fileSize))
                        .body(readByteRange(fullFileName, rangeStart, fileSize - 1)); // Read the object and convert it as bytes
            }
            String[] ranges = range.split("-");
            rangeStart = Long.parseLong(ranges[0].substring(6));
            if (ranges.length > 1) {
                rangeEnd = Long.parseLong(ranges[1]);
            } else {
                rangeEnd = fileSize - 1;
            }
            if (fileSize < rangeEnd) {
                rangeEnd = fileSize - 1;
            }
            data = readByteRange(fullFileName, rangeStart, rangeEnd);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        String contentLength = String.valueOf((rangeEnd - rangeStart) + 1);
        return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT)
                .header(ApplicationConstants.CONTENT_TYPE, ApplicationConstants.VIDEO_CONTENT + fileType)
                .header(ApplicationConstants.ACCEPT_RANGES, ApplicationConstants.BYTES)
                .header(ApplicationConstants.CONTENT_LENGTH, contentLength)
                .header(ApplicationConstants.CONTENT_RANGE, ApplicationConstants.BYTES + " " + rangeStart + "-" + rangeEnd + "/" + fileSize)
                .body(data);

    }

    /**
     * ready file byte by byte.
     *
     * @param filename String.
     * @param start    long.
     * @param end      long.
     * @return byte array.
     * @throws IOException exception.
     */
    public byte[] readByteRange(String filename, long start, long end) throws IOException {
        Path path = Paths.get(ApplicationConstants.IMAGE_DIRECTORY+ filename);
        try (InputStream inputStream = (Files.newInputStream(path));
             ByteArrayOutputStream bufferedOutputStream = new ByteArrayOutputStream()) {
            byte[] data = new byte[ApplicationConstants.BYTE_RANGE];
            int nRead;
            while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
                bufferedOutputStream.write(data, 0, nRead);
            }
            bufferedOutputStream.flush();
            byte[] result = new byte[(int) (end - start) + 1];
            System.arraycopy(bufferedOutputStream.toByteArray(), (int) start, result, 0, result.length);

            return result;
        }
    }

    public Video addVideo(VideoUploadDTO videoUploadDTO){
        try {
            File file = new File(ApplicationConstants.IMAGE_DIRECTORY + videoUploadDTO.getVideo().getOriginalFilename());//;lưu ảnh vào folder dự án
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(videoUploadDTO.getVideo().getBytes());
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Course course = new Course();
        course.setCourseId(videoUploadDTO.getBelong_to());
        Lesson lesson = new Lesson();
        lesson.setLessonId(videoUploadDTO.getLessonId());
        Video video = new Video();

        video.setVideoId(0);
        video.setBelong_to(course);
        video.setLessonId(lesson);
        video.setLength(videoUploadDTO.getLength() + " phút");
        video.setAddedBy(videoUploadDTO.getAddedBy());
        video.setCreatedDate(timestamp);
        video.setActive(true);
        video.setTitleName(videoUploadDTO.getTitleName());
        String fileName = videoUploadDTO.getVideo().getOriginalFilename();
        video.setVideoUrl(ApplicationUtils.serializeData(fileName.substring(0,fileName.length()-4)).trim());
        return videoRepository.save(video);
    }

    public Optional<Video> updateVideo(VideoUploadDTO videoUploadDTO){
        try {
            File file = new File(ApplicationConstants.IMAGE_DIRECTORY + videoUploadDTO.getVideo().getOriginalFilename());//;lưu ảnh vào folder dự án
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(videoUploadDTO.getVideo().getBytes());
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Video video = new Video();
        video.setVideoId(videoUploadDTO.getVideoId());
        courseRepository.findById(videoUploadDTO.getBelong_to()).ifPresent(video::setBelong_to);
        lessonRepository.findById(videoUploadDTO.getLessonId()).ifPresent(video::setLessonId);
        video.setAddedBy(videoUploadDTO.getAddedBy());
        video.setActive(true);
        video.setTitleName(videoUploadDTO.getTitleName());
        String fileName = videoUploadDTO.getVideo().getOriginalFilename();
        video.setVideoUrl(ApplicationUtils.serializeData(fileName.substring(0,fileName.length()-4)).trim());
        return Optional.of(videoRepository.save(video));
    }

    public void updateVideoStatus(int newsId,boolean status){
        videoRepository.findById(newsId).ifPresent(
                news -> {videoRepository.updateNewStatus(status,newsId);}
        );
    }

    /**
     * Get the filePath.
     *
     * @return String.
     */
    private String getFilePath() {
        URL url = this.getClass().getResource(ApplicationConstants.VIDEO);
        return new File(url.getFile()).getAbsolutePath();
    }

    /**
     * Content length.
     *
     * @param fileName String.
     * @return Long.
     */
    public Long getFileSize(String fileName) {

        return Optional.ofNullable(fileName)
                .map(file -> Paths.get(ApplicationConstants.IMAGE_DIRECTORY, file))
                .map(this::sizeFromFile)
                .orElse(0L);
    }

    /**
     * Getting the size from the path.
     *
     * @param path Path.
     * @return Long.
     */
    private Long sizeFromFile(Path path) {
        try {
            return Files.size(path);
        } catch (IOException ioException) {
            System.out.println("Error while getting the file size "+ ioException);
        }
        return 0L;
    }


}
