import React, { Component } from "react";

export class pagination extends Component {
    state = {
        isEditable: false,
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    doubleClick = () => {
        this.setState({ isEditable: !this.state.isEditable });
    };
    render() {
        const {
            next,
            previous,
            isNext,
            isPrevious,
            currentPage,
            totalPage,
            handlePageChange,
            goToPage,
            goToTop,
        } = this.props;
        return (
            <div>
                <div className="d-flex my-5 align-items-center">
                    <button
                        className="btn btn-sm btn-warning"
                        disabled={!isPrevious}
                        onClick={previous}
                    >
                        Previours
                    </button>
                    <div className="flex-grow-1 text-center">
                        {this.state.isEditable ? (
                            <input
                                type="number"
                                name=""
                                value={currentPage}
                                onChange={(e) =>
                                    handlePageChange(e.target.value)
                                }
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        goToPage();
                                        this.setState({ isEditable: false });
                                    }
                                }}
                            />
                        ) : (
                            <p
                                style={{
                                    userSelect: "none",
                                    lineHeight: "1.1",
                                }}
                                title="Doutble tap to jump page"
                                onDoubleClick={this.doubleClick}
                            >
                                {currentPage} of {totalPage}
                                <br />
                                <small>Double tap to edit</small>
                            </p>
                        )}
                    </div>
                    <button
                        className="btn btn-sm btn-warning ml-auto"
                        disabled={!isNext}
                        onClick={next}
                    >
                        Next
                    </button>
                </div>
                <button onClick={goToTop} className="btn btn-secondary">
                    scroll to top
                </button>
            </div>
        );
    }
}

export default pagination;
