import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Render")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp

//PureComponent implements shouldComponentUpdate by doing a shallow comparison on the props and state.
//If no change then doesn't rerender