package com.kma.libraby.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "lesson")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Lesson {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lesson_id")
    private int lessonId;

    @Column(name = "lesson_name",length = 150,nullable = false)
    private String lessonName;

    @Column(name = "created_date")
    private Date createdDate;

    private boolean active;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "lessonId")
    private Set<Video> videos;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "lessonId")
    private Set<Document> documents;

    @ManyToOne(cascade = CascadeType.MERGE,fetch = FetchType.LAZY)
    @JoinColumn(name = "belong_to")
    @JsonIgnore
    private Course course;
}
