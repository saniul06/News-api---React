import { Component, forwardRef } from "react";
import { newsCategory } from "../news";

class Header extends Component {
    state = {
        searchTerm: "",
    };

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value,
        });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.props.search(this.state.searchTerm);
        }
    };

    render() {
        const { category } = this.props;
        return (
            <div className="my-r">
                <h1 className="mb-4" style={{ fontWeight: "300" }}>
                    Block Buster Headlines
                </h1>
                <input
                    ref={this.props.searchRef}
                    type="search"
                    className="form-control"
                    placeholder="Type keyword & press enter to search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="my-4">
                    {newsCategory &&
                        Object.keys(newsCategory).map((item, index) =>
                            category === newsCategory[item] ? (
                                <button
                                    key={index}
                                    className="btn btn-sm btn-warning mr-2 mb-2"
                                >{`#${newsCategory[item]}`}</button>
                            ) : (
                                <button
                                    onClick={(e) =>
                                        this.props.changeCategory(
                                            newsCategory[item]
                                        )
                                    }
                                    key={index}
                                    className="btn btn-sm btn-light mr-2 mb-2"
                                >{`#${newsCategory[item]}`}</button>
                            )
                        )}
                </div>
            </div>
        );
    }
}

export default Header;
