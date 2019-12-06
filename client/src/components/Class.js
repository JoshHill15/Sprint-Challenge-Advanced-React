import React from "react"
import Axios from "axios"
import Names from "./names"


class Class1 extends React.Component{
    state = {
        data: [],
    }

    componentDidMount(){
        Axios.get("http://localhost:5000/api/players")
        .then(res => {
            console.log(res.data)
            this.setState({data: res.data})
        })
        .catch(err => console.log("BIG ERR", err))
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState !== this.state.data){
            console.log("changes")
            return this.state.data
        }
    }

    render(){
        return (
            <div>
                {this.state.data.map(cv => <Names key = {cv.id} cv = {cv}/>)}
            </div>
        )
    }
}

export default Class1