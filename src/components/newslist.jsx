import React from 'react';
import Link from './link';

const NewsItem = ({ item, newsListRefs }) => (
    <div className="card mb-r" ref={newsListRefs}>
        {item.urlToImage && (
            <img
                src={item.urlToImage}
                alt={item.title}
                className="card-img-top"
            />
        )}
        <div className="card-body">
            <Link value={item.title} url={item.url} />
            <Link value={item.content} url={item.url} />
            <div className="mt-2 d-flex align-items-center">
                <small>
                    <strong>
                        publised at {new Date(item.publishedAt).toDateString()}
                    </strong>
                </small>
                <div
                    style={{
                        padding: '0.25rem 0.5rem',
                        color: '#424242',
                        background: '#ededed',
                        display: 'inline-block',
                        borderRadius: '0.25rem',
                        marginLeft: 'auto'
                    }}>
                    <small>{item.source.name}</small>
                </div>
            </div>
        </div>
    </div>
);

function newslist({ news, newsListRefs }) {
    return (
        <div>
            {news && news.length === 0 && <h4>There is no news</h4>}
            {news &&
                news.map((item, index) => (
                    <NewsItem
                        key={index}
                        item={item}
                        newsListRefs={newsListRefs}
                    />
                ))}
        </div>
    );
}

export default newslist;
