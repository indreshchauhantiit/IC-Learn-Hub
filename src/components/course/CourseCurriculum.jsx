
import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  PlayCircle,
  Lock,
  Clock,
} from 'lucide-react';

function CourseCurriculum({ curriculum = [] }) {
  const [openSections, setOpenSections] = useState([1]);

  const toggleSection = (id) => {
    setOpenSections((previous) =>
      previous.includes(id)
        ? previous.filter((sectionId) => sectionId !== id)
        : [...previous, id]
    );
  };

  const totalLectures = curriculum.reduce(
    (total, section) => total + section.lectures.length,
    0
  );

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-900">
          Course Curriculum
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          {curriculum.length} sections · {totalLectures} lectures
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        {curriculum.map((section) => {
          const isOpen = openSections.includes(section.id);

          return (
            <div
              key={section.id}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 bg-slate-50 px-4 py-4 text-left transition hover:bg-slate-100 sm:px-5"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {section.lectures.length} lectures
                  </p>
                </div>

                {isOpen ? (
                  <ChevronUp className="shrink-0 text-slate-500" />
                ) : (
                  <ChevronDown className="shrink-0 text-slate-500" />
                )}
              </button>

              {isOpen && (
                <div className="divide-y divide-slate-100 bg-white">
                  {section.lectures.map((lecture) => (
                    <div
                      key={lecture.id}
                      className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <PlayCircle
                          size={18}
                          className="shrink-0 text-indigo-500"
                        />

                        <span className="text-sm text-slate-700">
                          {lecture.title}
                        </span>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        {lecture.preview ? (
                          <span className="hidden text-xs font-medium text-indigo-600 sm:inline">
                            Preview
                          </span>
                        ) : (
                          <Lock
                            size={14}
                            className="text-slate-400"
                          />
                        )}

                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock size={13} />
                          {lecture.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CourseCurriculum;