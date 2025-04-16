import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
    } = news;

    return (
        <div className="border rounded-lg shadow-md p-5 space-y-4">
            {/* Author Info */}
            <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt="author"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{author?.name || "Unknown Author"}</p>
                        <p className="text-sm text-gray-500">{author?.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-xl text-gray-500">
                    <FaBookmark className="cursor-pointer hover:text-black" />
                    <FaShareAlt className="cursor-pointer hover:text-black" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold">{title}</h2>

            {/* Image */}
            <img
                src={image_url}
                alt="news"
                className="w-full object-cover  rounded-md"
            />

            {/* Details */}
            <p className="text-gray-700 text-sm">
                {details.length > 250 ? (
                    <>
                        {details.slice(0, 250)}...{" "}
                        <span className="text-orange-500 font-semibold cursor-pointer">
                            Read More
                        </span>
                    </>
                ) : (
                    details
                )}
            </p>

            {/* Ratings & Views */}
            <div className="flex justify-between items-center pt-2 border-t mt-4">
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(Math.round(rating?.number || 0))].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-2 text-gray-600">{rating?.number}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;