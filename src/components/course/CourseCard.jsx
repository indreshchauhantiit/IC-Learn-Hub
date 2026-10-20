
import { Link } from 'react-router-dom';
import { Star, Users, Clock, ArrowRight } from 'lucide-react';

function CourseCard({ course }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <Link
        to={`/courses/${course.id}`}
        className="relative block overflow-hidden"
      >
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {course.badge && (
          <span className="absolute left-3 top-3 rounded-md bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
            {course.badge}
          </span>
        )}
      </Link>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {course.category}
        </p>

        <Link to={`/courses/${course.id}`}>
          <h3 className="mt-2 min-h-12 font-bold leading-6 text-slate-900 hover:text-indigo-600">
            {course.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-slate-500">
          By {course.instructor}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 font-semibold text-slate-800">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {course.rating}
          </span>

          <span className="flex items-center gap-1 text-slate-500">
            <Users size={15} />
            {course.students.toLocaleString()}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
          <Clock size={14} />
          {course.duration}
          <span>•</span>
          {course.level}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xl font-bold text-slate-900">
              ₹{course.price}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                ₹{course.originalPrice}
              </span>
            )}
          </div>

          <Link
            to={`/courses/${course.id}`}
            aria-label={`View ${course.title}`}
            className="rounded-lg bg-indigo-50 p-2 text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;