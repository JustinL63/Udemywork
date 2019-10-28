import React, {Component} from "react"
import Aux from "../Auxillary/Auxillary"
import Toolbar from "../../../src/Components/Toolbar/Toolbar"

class Layout extends Component {
    render() {
        return(
            <Aux>
                <Toolbar/>
                <h2>SideDrawer</h2>
            </Aux>
        )
    }
}

export default Layout