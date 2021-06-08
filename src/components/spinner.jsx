import React from 'react';

export default class loading extends React.Component {
    constructor() {
        super();
        this.ref = React.createRef();
    }

    render() {
        return (
            <div ref={this.ref} className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div
                    className="spinner-border text-danger ml-auto"
                    role="status"
                    aria-hidden="true"></div>
            </div>
        );
    }
}
