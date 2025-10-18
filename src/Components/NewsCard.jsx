// src/components/NewsCard.jsx

import { FaRegBookmark, FaShareNodes, FaEye, FaStar } from "react-icons/fa6";

// A utility to format large numbers (e.g., 6789 -> 6.8k)
const formatViews = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
};

const NewsCard = ({ news }) => {
  // Destructure the necessary properties from the news object
  const { author, title, thumbnail_url, details, rating, total_view } = news;

  // Format the publication date to YYYY-MM-DD
  const publishedDate = new Date(author.published_date)
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", "/");

  // Truncate the details text if it's too long
  const truncatedDetails =
    details.length > 250 ? details.slice(0, 250) + "..." : details;

  return (
    <div className="card bg-base-100 shadow-lg border border-gray-200 rounded-lg overflow-hidden mb-8">
      {/* Card Header: Author Info & Actions */}
      <div className="flex justify-between items-center p-4 bg-gray-50 border-b">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={`Photo of ${author.name}`} />
            </div>
          </div>
          <div>
            <p className="font-bold text-gray-800">
              {author.name || "Anonymous"}
            </p>
            <p className="text-sm text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xl text-gray-500">
          <button
            className="hover:text-primary transition-colors"
            aria-label="Bookmark"
          >
            <FaRegBookmark />
          </button>
          <button
            className="hover:text-primary transition-colors"
            aria-label="Share"
          >
            <FaShareNodes />
          </button>
        </div>
      </div>

      {/* Card Body: Title, Image, and Details */}
      <div className="card-body p-5">
        <h2 className="card-title text-2xl font-bold mb-4 text-gray-900">
          {title}
        </h2>
        <figure className="mb-5">
          <img
            className="w-full h-auto rounded-lg object-cover"
            src={thumbnail_url}
            alt={`Image for ${title}`}
          />
        </figure>
        <div className="text-gray-700 leading-relaxed text-base">
          {truncatedDetails}
          {details.length > 250 && (
            <button className="text-primary hover:underline font-semibold ml-1">
              Read More
            </button>
          )}
        </div>

        <div className="divider my-4"></div>

        {/* Card Footer: Rating & View Count */}
        <div className="card-actions justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="flex text-lg">
              {/* Render stars based on the integer part of the rating */}
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.floor(rating.number)
                      ? "text-orange-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="font-semibold text-lg text-gray-700">
              {rating.number.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye className="text-xl" />
            <span className="font-semibold text-lg">
              {formatViews(total_view)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
