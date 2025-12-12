import React, { useState } from "react";

const CommentSection = ({ comments }) => {
  const [hoveredUser, setHoveredUser] = useState(null);

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full sm:max-w-7xl md:w-1/3 shadow px-3 py-2 flex flex-col space-y-2">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>

        {comments && comments.length > 0 ? (
          comments.slice(0, 5).map((comment, index) => (
            <div key={index} className="flex items-center space-x-2">
              {/* User Profile Image (Triggers Pop-up) */}
              <div
                className="relative flex flex-shrink-0 self-start cursor-pointer"
                onMouseEnter={() => setHoveredUser(index)}
                onMouseLeave={() => setHoveredUser(null)}
              >
                <img
                  src={comment.profilePic || "https://via.placeholder.com/50"} // Placeholder if no profilePic
                  alt={comment.user}
                  className="h-8 w-8 object-fill rounded-full"
                />

                {/* Profile Pop-up */}
                {hoveredUser === index && (
                  <div
                    className="absolute mt-8 bg-white px-4 py-4 w-72 shadow rounded cursor-default z-10"
                    onMouseEnter={() => setHoveredUser(index)}
                    onMouseLeave={() => setHoveredUser(null)}
                  >
                    <div className="flex space-x-3">
                      <img
                        src={
                          comment.profilePic || "https://via.placeholder.com/50"
                        }
                        alt={comment.user}
                        className="h-16 w-16 object-fill rounded-full"
                      />
                      <div className="flex flex-col space-y-2">
                        <div className="font-semibold">
                          <a href="#" className="hover:underline">
                            {comment.user}
                          </a>
                        </div>
                        <div className="text-sm">No additional details</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Comment Box */}
              <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                <div className="font-medium">
                  <a href="#" className="hover:underline text-sm">
                    <small>{comment.user}</small>
                  </a>
                </div>
                <div className="text-xs">{comment.comment}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
