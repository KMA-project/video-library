import callAPI from "../../../axios";

export const getCourses = () => {
    return callAPI("courses", "GET");
}

export const getCourseDetail = (courseId) => {
    return callAPI(`courses/${courseId}`, "GET");
}