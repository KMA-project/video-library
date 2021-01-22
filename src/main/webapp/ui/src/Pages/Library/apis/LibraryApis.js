import callAPI from "../../../axios";

export const getCourses = () => {
    return callAPI("courses", "GET");
}