import React from "react";
import Footer from "../components/Footer";

const Blogs = () => {
  const posts = Array(5).fill({
    title: "Data Science is the Need of Today",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque, non quaerat illum sequi provident nemo quisquam modi nisi atque voluptatem sunt ipsa hic voluptatum temporibus tenetur tempore quam est, itaque fugiat at esse alias, distinctio nulla.",
    image: "/image/datascience.jpg",
  });

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-5">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-10"
          >
            {/* Image Section */}
            <div className="flex-1 md:flex-[2]">
              <img
                src={post.image}
                alt="post image"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 md:flex-[3]">
              <h1 className="text-primary text-2xl font-libreBaskerville font-bold">
                {post.title}
              </h1>
              <p className="text-lg font-light text-secondary font-notoSansJP mt-3">
                {post.description}
              </p>
              <div className="text-right my-3">
                <input
                  className="text-right border font-libreBaskerville font-bold text-primary px-5 py-2 rounded-full border-secondary hover:bg-secondary hover:border-primary hover:text-white transition duration-200"
                  type="button"
                  value="View More..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
