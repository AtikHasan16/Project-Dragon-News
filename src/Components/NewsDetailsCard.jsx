import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { FaEye, FaRegBookmark, FaShareNodes, FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsCard = ({ newsDetails }) => {
  const { title, thumbnail_url, details, category_id } = newsDetails;
  return (
    <div>
      <div className="card bg-base-100 shadow-lg border-gray-200 rounded-lg overflow-hidden mb-8">
        {/* Card Header: Author Info & Actions */}
        <div className="flex justify-end items-center p-4 bg-gray-50">
          <div className="flex items-center gap-4 text-2xl text-gray-500 ">
            <FaRegBookmark />

            <FaShareNodes />
          </div>
        </div>

        {/* Card Body: Title, Image, and Details */}
        <div className="card-body p-5">
          <figure className="mb-5">
            <img
              className="w-full h-auto rounded-lg object-cover"
              src={thumbnail_url}
              alt={`Image for ${title}`}
            />
          </figure>
          <div>
            <h2 className="card-title text-2xl font-bold mb-4 text-gray-900">
              {title}
            </h2>
            <p className="text-xl text-gray-500">{details}</p>
          </div>
          <div className="divider my-4"></div>

          <Link
            to={`/categories/${category_id}`}
            className="btn btn-lg text-white bg-rose-600 w-fit"
          >
            <BiLeftArrow></BiLeftArrow>All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
