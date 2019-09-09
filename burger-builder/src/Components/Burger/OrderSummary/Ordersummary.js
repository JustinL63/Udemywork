import React, { Component } from "react"
import Aux from "../../../HOC/Auxillary"
import Button from "../../UI/Button/Button"


class OrderSummary extends Component {
    componentDidUpdate() {
        console.log("[order summary did update], order summary")
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>)
            })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the followig ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <strong><p>Total Price: ${this.props.price.toFixed(2)}</p></strong>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        )
    }
}

export default OrderSummary