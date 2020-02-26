import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Data from "../components/Data";

function Article() {
  console.log('article', Data);
  const [article, setArticle] = useState({});
  let { id } = useParams();

  useEffect(() => {
      let dataArray = Data.filter(article => article.id !== id);
      setArticle(dataArray[0]);
  }, [id]);

  return (
    <div>
      <header>
        <div class="articleHeaderContainer">
          <img src="https://via.placeholder.com/2000x1200"></img>
        </div>
        <div class="articleHeaderContainerText">
          <h1>{article.title}</h1>
          <p>{article.publishedDate}</p>
          <p>{article.blurb}</p>
        </div>
      </header>

      <main>
        <div class="articleTextContainer">
          {article.articleText &&
            article.articleText.map((text, i) => <p key={i}>{text.data}</p>)
          }
        </div>
      </main>



    </div>
  );
}

export default Article;
