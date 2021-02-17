import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/student/api/student";

class StudentService {

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL+"/list");
    }

    updateStudent(student){
        return axios.post(STUDENT_API_BASE_URL+"/upd", student);
    }

    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL + '/del/' + studentId);
    }
}

export default new StudentService()