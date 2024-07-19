import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        // this.state = {
        //     count : 0,
        //     count2 : 1,
        // };

        this.state ={
            userInfo:{
                name:"Dummy",
                location:"Default",
            },
        };
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/yoyoverma")
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
        
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount () {
        console.log("Coponent disable");
    }
    
    render() {
        
        const {name, location,contact
        } = this.state.userInfo;
        return (
            <div className="user-card">
            {/* <h1>Count:{count},{count2}</h1>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1,
                    count2 : this.state.count + 1,
                });
            }}>BuInc</button> */}
            <h1>Name: {name}</h1>
            <h2>Loaction: {location}</h2>
            <h3>Contact :{contact}</h3>
            </div> 
        );
    };
}

export default UserClass;


/***
 * ----MOUNTING----
 * 
 * 
 * Constructor(dummy)
 *      Render(dummy)
 *      <HTML Dummy>
 *      </HTML>
 * Component Did Mount
 *      <API Call>
 *      <this.setState>--> State variable is updated
 * 
 * ----- UPDATE
 * 
 *      render(API data)
 *      <HTML (new API data)>
 *      componentDid Update****/ 
