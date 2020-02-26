import React from 'react';
import '../App.css';

function ArticleCard( {article} ) {
  return (
    <article>
      <div class="articleListingPicText">
      <div class="articleListingPicBorder">
        <div class="articleListingDivSpacing">
          <img src={article.image.url} alt={article.image.alt}></img>
        </div>
      </div>
      <div>
        <div class="articleListingDivSpacing">
          <h2>{article.title}</h2>
          <p>{article.publishedDate}</p>
          <p>{article.blurb}</p>
          <a href={"article/${article.id}"}>Read More</a>
        </div>
      </div>
      </div>
    </article>
  );
}

export default ArticleCard;
