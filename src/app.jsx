import React, { Component, createRef } from 'react';
import Header from './components/header';
import Result from './components/result';
import NewsList from './components/newslist';
import News, { newsCategory } from './news';
import Pagination from './components/pagination';
import Spinner from './components/spinner';

const news = new News(newsCategory.technology);

class App extends Component {
    constructor() {
        super();
        this.ref = React.createRef();
    }

    state = {
        news: {},
        category: 'technology',
        isLoading: true
    };

    searchRef = createRef();

    resultRef = createRef();

    cbRef = null;

    newsListRefs = [];

    callbackRef = (element) => (this.cbRef = element);

    newsListCallback = (element) => this.newsListRefs.push(element);

    changeCategory = (category) => {
        this.setState({ isLoading: true });
        news.changeCategory(category)
            .then((news) => {
                this.setState({ news, isLoading: false });
            })
            .catch((e) => {
                console.log(e.message);
                alert('can not set input current page from pagination');
            });
    };

    search = (searchTerm) => {
        this.setState({ isLoading: true });
        news.search(searchTerm)
            .then((news) => {
                this.setState({ news, isLoading: false });
            })
            .catch((e) => {
                console.log(e.message);
                alert('can not set input current page from pagination');
            });
    };

    handlePageChange = (pageNumber) => {
        this.setState({
            news: {
                ...this.state.news,
                currentPage: Number.parseInt(pageNumber)
            }
        });
    };

    goToPage = () => {
        this.setState({ isLoading: true });
        news.setCurrentPage(this.state.news.currentPage)
            .then((news) => {
                this.setState({ news, isLoading: false });
            })
            .catch((e) => {
                console.log(e.message);
                alert('gotoPage function error');
            });
    };

    gotoTop = () => {
        window.scroll(0, this.resultRef.current.scrollTop);
    };

    componentDidMount() {
        this.searchRef.current.focus();
        news.getNews()
            .then((news) => {
                this.setState({ news, isLoading: false });
            })
            .catch((e) => {
                console.log(e.message);
                alert('Somethisng is wrong');
            });
    }

    next = () => {
        if (this.state.news.isNext) {
            this.setState({ isLoading: true });
            news.next()
                .then((news) => {
                    this.setState({ news, isLoading: false });
                })
                .catch((e) => {
                    console.log(e);
                    throw new Error('Can to get news');
                });
        }
    };

    previous = () => {
        if (this.state.news.isNext) {
            this.setState({ isLoading: true });
            news.previous()
                .then((news) => {
                    this.setState({ news, isLoading: false });
                })
                .catch((e) => {
                    console.log(e);
                    throw new Error('Can to get news');
                });
        }
    };

    goToTop = (obj) => {
        window.scroll(0, this.resultRef.current.scrollTop);
    };

    render() {
        const {
            isNext,
            isPrevious,
            currentPage,
            totalPage,
            totalReaults,
            category,
            articles
        } = this.state.news;
        return (
            <div ref={this.ref} className="container">
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Header
                            category={category}
                            changeCategory={this.changeCategory}
                            search={this.search}
                            searchRef={this.searchRef}
                        />
                        <Result
                            totalReaults={totalReaults}
                            totalPage={totalPage}
                            currentPage={currentPage}
                            resultRef={this.resultRef}
                            callbackRef={this.callbackRef}
                        />
                        {this.state.isLoading ? (
                            <Spinner />
                        ) : (
                            <div>
                                <NewsList
                                    news={articles}
                                    newsListRefs={this.newsListCallback}
                                />
                            </div>
                        )}
                        <Pagination
                            next={this.next}
                            previous={this.previous}
                            isNext={isNext}
                            isPrevious={isPrevious}
                            currentPage={currentPage}
                            totalPage={totalPage}
                            handlePageChange={this.handlePageChange}
                            goToPage={this.goToPage}
                            goToTop={this.goToTop}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
