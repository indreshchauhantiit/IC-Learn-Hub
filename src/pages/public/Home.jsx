

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Star,
  Users,
  Clock,
  BookOpen,
  Code,
  Palette,
  Database,
  Megaphone,
  Award,
  PlayCircle,
  ArrowRight,
  GraduationCap,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { courses, categories } from '../../data/courses';

const categoryIcons = {
  Code,
  Palette,
  Database,
  Megaphone,
};

function Home() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/courses?search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              <Award size={16} />
              Learn without limits
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Unlock Your
              <span className="block text-indigo-600">
                Learning Potential
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Explore expert-led courses, develop in-demand skills,
              and take the next step toward your career goals.
            </p>

            <form
              onSubmit={handleSearch}
              className="mt-8 flex max-w-xl items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-indigo-100/50"
            >
              <Search className="ml-2 h-5 w-5 shrink-0 text-slate-400" />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What do you want to learn?"
                className="min-w-0 flex-1 px-2 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Search
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-indigo-600"
              >
                Join for Free
                <PlayCircle size={20} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                Expert instructors
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                Learn at your pace
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-purple-200/50 blur-3xl" />
            <div className="absolute -right-8 bottom-5 h-40 w-40 rounded-full bg-indigo-200/60 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt="Students learning together"
              className="relative h-[360px] w-full rounded-3xl object-cover shadow-2xl sm:h-[450px]"
            />

            <div className="absolute -bottom-5 left-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-green-100 p-3">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-900">
                    10K+
                  </p>
                  <p className="text-sm text-slate-500">
                    Active learners
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-5 rounded-2xl bg-white p-3 shadow-xl sm:-right-5">
              <div className="flex items-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <span className="font-bold text-slate-900">4.9</span>
                <span className="text-xs text-slate-500">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { value: '10K+', label: 'Active Students', icon: Users },
            { value: '500+', label: 'Online Courses', icon: BookOpen },
            { value: '100+', label: 'Expert Instructors', icon: GraduationCap },
            { value: '50+', label: 'Countries Reached', icon: Globe },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-3 h-7 w-7 text-indigo-600" />
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {value}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-indigo-600">
                Explore by interest
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Popular Categories
              </h2>
              <p className="mt-3 text-slate-600">
                Find the right learning path for your goals.
              </p>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all courses <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = categoryIcons[category.icon];

              return (
                <Link
                  key={category.name}
                  to={`/courses?category=${encodeURIComponent(category.name)}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-indigo-50 p-4 transition group-hover:bg-indigo-100">
                    <Icon className="h-7 w-7 text-indigo-600" />
                  </div>

                  <h3 className="font-bold text-slate-900">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {category.courses} courses available
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES SECTION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="font-semibold text-indigo-600">
              Start learning today
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Courses
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Discover courses selected to help you build practical,
              career-ready skills.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <article
                key={course.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
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

                  <span className="absolute left-3 top-3 rounded-md bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    {course.badge}
                  </span>
                </Link>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {course.category}
                  </p>

                  <Link to={`/courses/${course.id}`}>
                    <h3 className="mt-2 min-h-12 font-bold leading-6 text-slate-900 transition hover:text-indigo-600">
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
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-slate-900">
                        ₹{course.price}
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        ₹{course.originalPrice}
                      </span>
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
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
            >
              Explore All Courses
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="Learner studying on a laptop"
              loading="lazy"
              className="h-[350px] w-full rounded-3xl object-cover shadow-lg sm:h-[430px]"
            />
          </div>

          <div>
            <p className="font-semibold text-indigo-600">
              Why LearnHub?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Learn smarter.
              <span className="block text-indigo-600">
                Grow faster.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Build your skills with flexible learning,
              practical projects, and guidance from experienced
              instructors.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: 'Expert-led learning',
                  text: 'Learn from instructors with practical industry experience.',
                },
                {
                  title: 'Flexible study schedule',
                  text: 'Study at your own pace and revisit lessons whenever you need.',
                },
                {
                  title: 'Practical skill development',
                  text: 'Apply what you learn through projects and exercises.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 shrink-0 rounded-lg bg-indigo-100 p-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-indigo-600 px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Learning Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
            Explore new subjects, develop your skills,
            and take the next step toward your goals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Browse Courses
            </Link>

            <Link
              to="/register"
              className="rounded-lg border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;