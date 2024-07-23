import User from "./User";
import UserClass from "./UserClass.js";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";
const About =()=>{
    const {loggedInUser} = useContext(UserContext)
    return (
        <div>
            <User name ={"Yogesh Kumar Verma"} loaction={"Lucknow"} contact={"yogeshverma8009@gmail.com"}/>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold text-xl">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>

            <UserClass name={"yogesh verma"} location={"Dehradun"} contact={"yoyoverma183@gmail.com"}/>
        </div>
    );
}

export default About;