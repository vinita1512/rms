import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ManageReviews = () => {
  const initialReviews = [
    {
      id: 1,
      name: "tjwebdev",
      email: "touseef7294@gmail.com",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos voluptate vero sed tempore illo atque beatae asperiores, adipisci dicta quia nisi voluptates.",
      rating: 4,
      date: "2022-03-11",
    },
    {
      id: 2,
      name: "touseef",
      email: "ask.tjwebdev@gmail.com",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos voluptate vero sed tempore illo atque beatae asperiores, adipisci dicta quia nisi voluptates.",
      rating: 5,
      date: "2022-03-11",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      review:
        "Great experience! The staff was friendly and the rooms were clean. Highly recommend.",
      rating: 5,
      date: "2023-01-15",
    },
    {
      id: 4,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      review:
        "The location was perfect, but the service could be improved. Overall, a decent stay.",
      rating: 3,
      date: "2023-02-20",
    },
    {
      id: 5,
      name: "Carol White",
      email: "carol.white@example.com",
      review:
        "Had a wonderful time! The amenities were top-notch and the food was delicious.",
      rating: 4,
      date: "2023-03-10",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);

  const handleDelete = (id) => {
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== id)
    );
  };

  const deleteAll = () => {
    setReviews([]);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        Ratings & Reviews
      </h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={deleteAll}
            className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow hover:from-red-600 hover:to-red-700"
          >
            Delete all
          </button>
        </div>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border">Sr. No.</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Review</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={review.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{review.name}</td>
                <td className="px-4 py-2 border">{review.email}</td>
                <td className="px-4 py-2 border">{review.review}</td>
                <td className="px-4 py-2 border">
                  <div className="flex">{renderStars(review.rating)}</div>
                </td>
                <td className="px-4 py-2 border">{review.date}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="px-3 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageReviews;
