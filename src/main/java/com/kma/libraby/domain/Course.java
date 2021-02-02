package com.kma.libraby.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "course")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Course implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private int courseId;

    @Column(name = "course_name",nullable = false,length = 150)
    private String courseName;

    @Column(name = "created_date",updatable = false)
    private Date createdDate;

    @Column(name = "grade_year",nullable = false)
    private int gradeYear;

    private boolean active;

    @Column(name = "added_by",length = 37)
    private String addedBy;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "belong_to",
            cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH})
    @JsonIgnore
    private Set<Video> videos;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "belong_to",
            cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH})
    @JsonIgnore
    private Set<Document> documents;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy = "course")
    @OrderBy("lessonName")
    private Set<Lesson> lessons;


}
