import React from 'react';
import ArticleCard from "../components/ArticleCard";
import Data from "../components/Data";

function ArticleListing() {
  console.log('article', Data);
  return (

    <div>
      <div class="articleListingTitle">
        <header>
          <h1>Articles</h1>
        </header>
      </div>
      <main>
        {Data.map((article, i) => (
          <div class="articleListingDiv">
            <ArticleCard
              key={i}
              article={article}
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export default ArticleListing;
