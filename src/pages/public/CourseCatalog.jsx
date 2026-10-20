
import { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, BookOpen, ArrowUpDown } from 'lucide-react';
import { courses } from '../../data/courses';
import CourseCard from '../../components/course/CourseCard';
import CourseFilters from '../../components/course/CourseFilters';

function CourseCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const categories = useMemo(
    () => [...new Set(courses.map((course) => course.category))],
    []
  );

  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory
  );
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sortBy, setSortBy] = useState('popular');

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((course) =>
        [
          course.title,
          course.instructor,
          course.category,
        ].some((value) => value.toLowerCase().includes(query))
      );
    }

    // Category
    if (selectedCategory !== 'All') {
      result = result.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Difficulty
    if (selectedLevel !== 'All') {
      result = result.filter(
        (course) => course.level === selectedLevel
      );
    }

    // Price
    result = result.filter(
      (course) => course.price <= maxPrice
    );

    // Sorting
    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;

      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;

      case 'name':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case 'popular':
      default:
        result.sort((a, b) => b.students - a.students);
    }

    return result;
  }, [
    search,
    selectedCategory,
    selectedLevel,
    maxPrice,
    sortBy,
  ]);

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (search.trim()) {
      params.set('search', search.trim());
    }

    if (selectedCategory !== 'All') {
      params.set('category', selectedCategory);
    }

    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedLevel('All');
    setMaxPrice(3000);
    setSortBy('popular');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm text-indigo-100">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span>Courses</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Explore Our Courses
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
            Discover expert-led courses and develop the skills
            you need to achieve your learning goals.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-8 flex max-w-2xl items-center gap-2 rounded-xl bg-white p-2 shadow-lg"
          >
            <Search className="ml-2 h-5 w-5 shrink-0 text-slate-400" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, instructors..."
              className="min-w-0 flex-1 px-2 py-3 text-sm text-slate-800 outline-none"
            />

            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Catalog Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">

          {/* Sidebar Filters */}
          <div className="lg:sticky lg:top-24">
            <CourseFilters
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedLevel}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              clearFilters={clearFilters}
            />
          </div>

          {/* Course Results */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  All Courses
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Showing {filteredCourses.length} of {courses.length} courses
                </p>
              </div>

              <div className="flex items-center gap-2">
                <ArrowUpDown
                  size={18}
                  className="shrink-0 text-slate-500"
                />

                <label
                  htmlFor="sort"
                  className="whitespace-nowrap text-sm text-slate-600"
                >
                  Sort by:
                </label>

                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="min-w-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Course Name</option>
                </select>
              </div>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
                <BookOpen
                  size={44}
                  className="mx-auto text-slate-300"
                />

                <h3 className="mt-4 text-xl font-bold text-slate-800">
                  No courses found
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or adjusting the filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseCatalog;