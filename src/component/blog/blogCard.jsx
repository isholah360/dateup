import "./blog.css";

function BlogCard({blogTopic, lifestyle, blogzContent, blogImg }) {
  return (
    <div>
      <div className="blog-blub">
        <div className="blog-img">
          <img src={blogImg} alt="" />
        </div>
        <div className="blog-contents">
          <div className="title">{blogTopic}</div>
          <div className="date-category">
            <div className="date">02/12/2023</div>
            <div className="category">{lifestyle}</div>
          </div>
          <div className="body-blog">
            {blogzContent}
          </div>
          <p>Continue reading</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
