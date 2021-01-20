package com.kma.libraby.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "video")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Video {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "video_id")
    private int videoId;

    @Column(name = "video_name",nullable = false,length = 150)
    private String videoName;

    @Column(name = "video_url")
    private String videoUrl;

    @Column(name = "created_date",updatable = false)
    private Date createdDate;

    private boolean active;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "belong_to")
    @JsonIgnore
    private Course belong_to;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "created_by")
    @JsonIgnore
    private Account createdBy;
}
