import callAPI from "../../../axios";

export const getCourses = () => {
    return callAPI("courses", "GET");
}

export const getCourseDetail = (courseId) => {
    return callAPI(`courses/${courseId}`, "GET");
}


export const postCourseDetail = (action) => {
    return callAPI(`courses/${action.id}`, "POST", action.payload);
}


export const postCourses = (action) => {
    return callAPI(`courses/grade`, "POST", action.payload);
}