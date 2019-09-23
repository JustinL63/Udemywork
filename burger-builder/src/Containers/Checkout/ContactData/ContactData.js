import React, {Component} from "react"
import Button from "../../../Components/UI/Button/Button"
import classes from "./ContactData.css"
import axios from "../../../Axios-Orders"
import Spinner from "../../../Components/UI/Spinner/Spinner"

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: "",
        },
        loading: false
    }

    
    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Justin Lamb",
                address: {
                    street: "Test Street",
                    zipCode: '696969',
                    country: "'Merica"
                },
                email: "test@test.com",
            },
            deliveryMethod: "fastest"
        }
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false })
            })
    }


    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
            <input className={classes.Input} type="email" name="email" placeholder="Email"/>
            <input className={classes.Input} type="text" name="street" placeholder="Street"/>
            <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
            <Button btnType="Success" onClick={this.orderHandler}>Order</Button>
        </form>)
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData