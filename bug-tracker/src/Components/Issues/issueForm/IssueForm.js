import React, {Component} from "react"
import classes from "./IssueForm.module.css"

class IssueForm extends Component {
    state = {
        value: {
            IssueType: "",
            IssueDescription: ""
        }
    }

    handleChange = (event) => {
        //this function will capture the information typed into the forms
        this.setState({value: event.target.value})
    }

    handleSubmit = () => {
        //this function sends information submitted to the database
        alert("This issue was submitted " + this.state.value)
    }

    render() {
        return(
            <form className={classes.IssueForm}>
                <label>Issue Type
                    <input 
                        type="text" value={this.state.value.IssueType} onChange={this.handleChange} placeholder="Issue Type">
                    </input>
                </label>
                <br/>
                <label>Issue Description
                    <textarea
                        type="text" value={this.state.value.IssueDescription} onChange={this.handleChange} placeholder="Issue Description">     
                    </textarea>
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default IssueForm