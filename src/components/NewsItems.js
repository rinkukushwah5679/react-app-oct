import React from 'react';
const NewsItems = (props) => {
	const {title, description, imageUrl, newsUrl, author, data, source} = props;
	return (
  	<div>
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%', zIndex: 1}}>
          {source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 40)}{(title.length > 40) ? '...' : ''}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-danger"><b>By:-</b> {author?author:"Unknown"}, on {new Date(data).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary" target='_blank'>Details</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
