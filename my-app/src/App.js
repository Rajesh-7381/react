                    // two
// import React, {component} from "react";

// let el=React.createElement("h1",null,"hello react and runs sucessfully");
// export default el;



                        // three

// import React, {Component} from "react";
// class App extends Component{
//     render(){
//         return <h1>hello</h1>;
//     }
// }
// export default App;


                    //four
// import React, {Component} from "react";
// class App extends Component {
//     render(){
//         return(
//             <React.Fragment>
//                 <h1>hello world</h1>
//                 <p>this is para tag</p>
//             </React.Fragment>
//         );
//     }
// }
// export default App;                    

                  


                        //five
import React, {Component,Fragment} from "react";
class App extends Component {
    render(){
        return(
            <Fragment>
                <h1>hello world</h1>
                <p>this is para tag</p>
            </Fragment>
        );
    }
}
export default App; 