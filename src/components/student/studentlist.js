import React from 'react'
import StudentService from '../../services/studentService'

class StudentList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            students:[]
        };
        this.updateRecord = this.updateRecord.bind(this);
        this.addRecord = this.addRecord.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) =>{
           this.setState({students: res.data});
            console.log(res);
        }).catch(err => {
            console.log("something went wrong "+err);
        });
    }

    updateRecord(id){
        this.props.history.push(`/student/${id}`);
    }

    addRecord(){
        this.props.history.push(`/student/0`);
    }

    deleteRecord(id){
        StudentService.deleteStudent(id).then(res =>{
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        return (
            <React.Fragment>
            <div className="row">
                <input type="button" className="btn btn-success" onClick={this.addRecord} value="Add New" />
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Admission Number</th>
                        <th> Name</th>
                        <th> Address</th>
                        <th> Contact Number</th>
                        <th> Updated Time</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map(
                         student => <tr key={student.id}>
                        <td>{student.admissionNo}</td>
                        <td>{student.name}</td>
                        <td>{student.address}</td>
                        <td>{student.contactNo}</td>
                        <td>{student.updatedTime}</td>
                        <td><input type="button" value="Edit" className="btn-primary" onClick={() => this.updateRecord(student.id)} />
                        <input type="button" value="Delete" className="btn-danger" onClick={() => this.deleteRecord(student.id)} /></td>
                        </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
            </React.Fragment>
        )
    }
}

export default StudentList