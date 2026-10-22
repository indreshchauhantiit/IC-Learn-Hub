
import { Link } from "react-router-dom";
import { BookOpenCheck, ArrowRight } from "lucide-react";

function MCQ() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-14 text-center text-white sm:px-12">
          <BookOpenCheck className="mx-auto mb-5" size={52} />

          <h1 className="text-3xl font-bold sm:text-5xl">
            MCQ Practice
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Test your knowledge, practice important questions,
            and improve your learning with MCQ quizzes.
          </p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("mcq-categories")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Explore MCQs <ArrowRight size={18} />
          </button>
        </div>

        <div id="mcq-categories" className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Choose Your Subject
          </h2>

          <p className="mt-2 text-slate-600">
            Select a subject to begin your practice.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development",
                description: "HTML, CSS, JavaScript and React",
              },
              {
                title: "Programming",
                description: "Programming fundamentals and logic",
              },
              {
                title: "Computer Basics",
                description: "Computer fundamentals and networking",
              },
            ].map((subject) => (
              <div
                key={subject.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <BookOpenCheck size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {subject.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {subject.description}
                </p>

                <p className="mt-4 text-sm font-medium text-indigo-600">
                  Questions coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCQ;
