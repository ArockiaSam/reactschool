import React from 'react';
import StudentService from '../../services/studentService'

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
            admissionNo : "",
            name:"",
            address : "",
            contactNo:""
        }

        this.changeEvent = this.changeEvent.bind(this);
        this.submitEvent = this.submitEvent.bind(this);

    }

    
 

    changeEvent(event){
        this.setState({[event.target.name] : event.target.value});
    }

    submitEvent(event){
        event.preventDefault();
        let studentObj = this.state;
        console.log(this.state);
        if(studentObj.id === 0){
            studentObj.id = null;
        } 
        StudentService.updateStudent(studentObj).then(res =>{
            this.setState(res.data);
            console.log(res);
        }).catch(err =>{
            console.log(err);
        });
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then(res => {
            this.setState(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        const {id, admissionNo, name, address, contactNo} = this.state;
        return(
            <React.Fragment>
                <form onSubmit={this.submitEvent}>
                    <div className="row" style={{margin:'0px'}}>
                    <input type="hidden" name="id" value={id} />
                    <div className="col-3">
                        <fieldset className="form-group">
                            <label>Admission Number</label>
                            <input className="form-control" type="text" name="admissionNo" value={admissionNo} onChange={this.changeEvent} />
                        </fieldset>
                    </div>
                    <div className="col-3">
                        <fieldset className="form-group">
                        <label>Name</label>
                    <input className="form-control" type="text" name="name" value={name} onChange={this.changeEvent} />    
                        </fieldset>
                    </div>
                    <div className="col-3">
                        <fieldset className="form-group">
                        <label>Address</label>
                    <textarea className="form-control" name="address" value={address} onChange={this.changeEvent} />    
                        </fieldset>
                    </div>
                    <div className="col-3">
                        <fieldset className="form-group">
                        <label>Contact Number</label>
                    <input className="form-control" type="text" name="contactNo" value={contactNo} onChange={this.changeEvent} />    
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
} 

export default Student