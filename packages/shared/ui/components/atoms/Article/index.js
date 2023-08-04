import { useState, useEffect } from "react";

const Article = ({ data }) => {
  // If response using html string
  // const [article, setArticle] = useState({ __html: "" });

  // useEffect(() => {
  //   async function createMarkUp() {
  //     return await { __html: data };
  //   }

  //   createMarkUp().then((result) => setArticle(result));
  // }, []);

  // return <div dangerouslySetInnerHTML={article} />;
  return <div className="w-full bg-black px-4">HELLO</div>;
};

Article.defaultProps = {
  data: "",
};

export default Article;
