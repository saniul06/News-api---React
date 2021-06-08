const result = (props) => {
    const { totalReaults, totalPage, currentPage, resultRef, callbackRef } =
        props;
    return (
        <div className="d-flex" ref={resultRef}>
            <p className="text-black-50" ref={callbackRef}>
                About {totalReaults} results found
            </p>
            <p className="text-black-50 ml-auto">
                {currentPage} page of {totalPage}
            </p>
        </div>
    );
};

export default result;
