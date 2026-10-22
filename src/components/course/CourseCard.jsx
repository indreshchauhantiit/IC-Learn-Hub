
import { Link } from "react-router-dom";
import {
  Star,
  Users,
  Clock,
  ArrowRight,
  BookOpen,
} from "lucide-react";

function CourseCard({ course }) {
  const {
    id,
    title = "Untitled Course",
    subtitle = "",
    image = "",
    badge = "",
    category = "General",
    instructor = "Instructor",
    rating = 0,
    students = 0,
    duration = "Self-paced",
    level = "All Levels",
    price = 0,
    originalPrice = 0,
  } = course || {};

  const courseLink = `/courses/${id}`;

  const formattedPrice = Number(price || 0).toLocaleString("en-IN");

  const showOriginalPrice =
    Number(originalPrice) > Number(price);

  const formattedOriginalPrice = Number(
    originalPrice || 0
  ).toLocaleString("en-IN");

  const formattedStudents = Number(
    students || 0
  ).toLocaleString("en-IN");

  const numericRating = Number(rating || 0);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Course Image */}
      <Link
        to={courseLink}
        aria-label={`View ${title}`}
        className="relative block overflow-hidden bg-slate-100"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-48 w-full flex-col items-center justify-center gap-2 text-slate-400">
            <BookOpen size={42} />
            <span className="text-sm">Course Image</span>
          </div>
        )}

        {badge && (
          <span className="absolute left-3 top-3 rounded-md bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {badge}
          </span>
        )}
      </Link>

      {/* Course Information */}
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {category}
        </p>

        <Link to={courseLink}>
          <h3 className="mt-2 min-h-12 font-bold leading-6 text-slate-900 transition hover:text-indigo-600">
            {title}
          </h3>
        </Link>

        {subtitle && (
          <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-500">
            {subtitle}
          </p>
        )}

        <p className="mt-2 text-sm text-slate-500">
          By {instructor}
        </p>

        {/* Rating and Students */}
        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-1 font-semibold text-slate-800">
            <Star
              className={`h-4 w-4 ${
                numericRating > 0
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-slate-400"
              }`}
            />

            {numericRating > 0
              ? numericRating.toFixed(1)
              : "New"}
          </span>

          <span className="flex items-center gap-1 text-slate-500">
            <Users size={15} />
            {formattedStudents} students
          </span>
        </div>

        {/* Duration and Level */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Clock size={14} />
          <span>{duration}</span>

          <span>•</span>

          <span>{level}</span>
        </div>

        {/* Price and Details Link */}
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xl font-bold text-slate-900">
              ₹{formattedPrice}
            </span>

            {showOriginalPrice && (
              <span className="text-sm text-slate-400 line-through">
                ₹{formattedOriginalPrice}
              </span>
            )}
          </div>

          <Link
            to={courseLink}
            aria-label={`View ${title}`}
            className="shrink-0 rounded-lg bg-indigo-50 p-2 text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
