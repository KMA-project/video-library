package com.kma.libraby.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "document")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Document {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_id")
    private int documentId;

    @Column(name = "document_name",nullable = false,length = 150)
    private String documentName;

    @Column(name = "document_url",nullable = false,length = 100)
    private String documentUrl;

    private int lesson;

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
