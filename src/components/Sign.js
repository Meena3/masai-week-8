import React from 'react';

export default class Sign extends React.Component{
    render(){
        return(
            <div>
                <div className = "display"></div>
                <form>
                    <label>
                        Name:<input type = "text" name = "name"/><br/><br/>
                        Email Id:<input type = "text" name = "name"/><br/><br/>
                        Phone No:<input type = "text" name = "name"/><br/><br/>
                        Name:<input type = "text" name = "name"/><br/><br/>
                        <input type = "Submit" value = "Submit"/>
                    </label>
                </form>
                <h1>Sign in and get notifications</h1>
                <img src = "./sign.jpg"/>
            </div>
        )
    }
}