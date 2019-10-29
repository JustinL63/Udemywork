import React, {Component} from "react"
import Aux from "../Auxillary/Auxillary"
import Toolbar from "../../../src/Components/Toolbar/Toolbar"
import IssueForm from "../../Components/Issues/issueForm/IssueForm"

class Layout extends Component {
    render() {
        return(
            <Aux>
                <Toolbar/>
                <h2>SideDrawer</h2>
                <IssueForm/>
            </Aux>
        )
    }
}

export default Layout