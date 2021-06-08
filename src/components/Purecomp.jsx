import React, { PureComponent } from 'react'

export class Purecomp extends PureComponent {

    state = {
        name: 'sani'
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Purecomp
