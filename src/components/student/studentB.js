import React, {useState, useEffect} from 'react';
import StudentService from '../../services/studentService'

function Student(props){

    const initialFormState = {id:props.match.params.id, admissionNo:"", name:"", address:"", contactNo:""}
    const [student, setStudent] = useState(initialFormState);

    const changeEvent = event => {
        
        const { name, value } = event.target
		console.log(name+" "+value);
        setStudent({ ...student, [name]: value })
    } 

    useEffect(() => {
        StudentService.getStudentById(student.id).then(res => {
            setStudent(res.data);
        }).catch(err => {
            console.log(err);
        });
    },[]);

    const submitEvent = event => {
        event.preventDefault();
        console.log(student);
        // if(student.id == 0){
        //     student.id = null;
        // } 
        StudentService.updateStudent(student).then(res =>{
            setStudent(res.data);
            console.log(res);
        }).catch(err =>{
            console.log(err);
        });
    }

    return(
        <React.Fragment>
                <form onSubmit={submitEvent}>
                    <div className="row" style={{margin:'0px'}}>
                    <input type="hidden" name="id" value={student.id} />
                    <div className="col-3">
                        <fieldset className="form-group">
                            <label>Admission Number</label>
                            <input className="form-control" type="text" name="admissionNo" value={student.admissionNo} onChange={changeEvent} />
                        </fieldset>
                    </div>
                    <div className="col-3">
                        <fieldset className="form-group">
                        <label>Name</label>
                    <input className="form-control" type="text" name="name" value={student.name} onChange={changeEvent} />    
                        </fieldset>
                    </div>
                    <div className="col-3">
                        <fieldset className="form-group">
                        <label>Address</label>
                    <textarea className="form-control" name="address" value={student.address} onChange={changeEvent} />    
                        </fieldset>
                    </div>
                    <div className="col-3">
                        <fieldset className="form-group">
                        <label>Contact Number</label>
                    <input className="form-control" type="text" name="contactNo" value={student.contactNo} onChange={changeEvent} />    
                        </fieldset>
                    </div>
                    <div className="col-3">
                    <input  className="btn btn-success" type="submit" value="Submit" />
                    </div>    
                    
                    </div>
                </form>
            </React.Fragment>    
    )
}

export default Student