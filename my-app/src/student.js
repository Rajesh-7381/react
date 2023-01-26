            //one

// import React  from "react";
// const Student =()=>{
//     return <h1>hello rajesh</h1>
// };
// export default Student;



//    two
// import React  from "react";
// const Student =(props)=>{
//     return <h1>hello {props.name} you are ..</h1>
// };
// export default Student;




//  three 
import React, { Component }  from "react";
class Student extends Component{
    render(){
        return <h1>hello {this.props.name} good</h1>
    }
}
export default Student;