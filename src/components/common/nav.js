import React from 'react';
import {Link } from 'react-router-dom';
import '../../css/nav.css';
class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {activeMenu:"Home"};
        this.menuClicked = this.menuClicked.bind(this);
    }
    
    menuClicked(event){
        this.setState({activeMenu: event.target.name});
    }
    render(){
        const {activeMenu} = this.state;
        return (
            <div className="topnav">
                <Link to="/" className={(activeMenu == 'Home') ? 'active' : '' } name="Home" onClick={this.menuClicked}>Home</Link>
                <Link to="/student" className={(activeMenu == 'Student') ? 'active' : '' } name="Student" onClick={this.menuClicked}>Student</Link>
            </div>
        )
    }
    
}

export default Nav