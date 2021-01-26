package com.kma.libraby.repository;

import com.kma.libraby.domain.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface VideoRepository extends JpaRepository<Video,Integer> {

    @Modifying
    @Transactional
    @Query("UPDATE Video v SET v.active =:active  WHERE v.videoId =:videoId")
    void updateNewStatus(@Param("active") boolean active, @Param("videoId")int videoId);

}
