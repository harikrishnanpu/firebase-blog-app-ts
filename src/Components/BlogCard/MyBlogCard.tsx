
import type { Timestamp } from "firebase/firestore";
import React from "react";

interface BlogCardProps {
  title: string;
  content: string;
  createdAt?: Timestamp;
  onEdit: () => void;
  viewBlog: ()=> void;
  onDelete: () => void;
}

const MyBlogCard: React.FC<BlogCardProps> = ({ title, content, createdAt, onEdit, viewBlog, onDelete }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{title}</h2>

      <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>

      <div className="flex justify-between items-center text-sm text-gray-500">
        {createdAt && (
          <p>
            {new Date(createdAt.seconds * 1000).toLocaleDateString()} •{" "}
            {new Date(createdAt.seconds * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}

<div className="flex gap-4">

        <button
          onClick={onDelete}
          className="text-red-600 hover:text-red-700 font-bold cursor-pointer transition-colors"
          >
          Delete
        </button>

                <button
          onClick={viewBlog}
          className="text-green-600 hover:text-green-700 font-bold cursor-pointer transition-colors"
          >
          View
        </button>

        <button
          onClick={onEdit}
          className="text-green-600 hover:text-green-700 font-bold cursor-pointer transition-colors"
          >
          Edit Blog
        </button>
      </div>
            </div>
    </div>
  );
};

export default MyBlogCard;
