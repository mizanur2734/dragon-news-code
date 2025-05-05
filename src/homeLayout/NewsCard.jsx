import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, total_view, rating } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="bg-base-100 shadow-md rounded-lg overflow-hidden">
      {/* Author & Action */}
      <div className="flex bg-base-200 items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p className="text-sm text-gray-700 mb-3">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...{" "}
              <Link
                to={`/news-details/${id}`}
                className="text-blue-500 font-semibold cursor-pointer"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "" : "opacity-30"} />
          ))}
          <span className="text-black ml-1">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
