package org.jhipster.com.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Homework.
 */
@Entity
@Table(name = "homework")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Homework implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "due", nullable = false)
    private ZonedDateTime due;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getDue() {
        return due;
    }

    public Homework due(ZonedDateTime due) {
        this.due = due;
        return this;
    }

    public void setDue(ZonedDateTime due) {
        this.due = due;
    }

    public String getTitle() {
        return title;
    }

    public Homework title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Homework homework = (Homework) o;
        if(homework.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, homework.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Homework{" +
            "id=" + id +
            ", due='" + due + "'" +
            ", title='" + title + "'" +
            '}';
    }
}
