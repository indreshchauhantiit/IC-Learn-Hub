
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";

const EnrollmentContext = createContext(null);
const STORAGE_KEY = "lms-enrollments";

export function EnrollmentProvider({ children }) {
  const { user } = useAuth();

  const [allEnrollments, setAllEnrollments] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allEnrollments));
  }, [allEnrollments]);

  const emailKey = user?.email?.toLowerCase() || "";
  const enrolledCourses = emailKey
    ? allEnrollments[emailKey] || []
    : [];

  const enrollCourses = (courses) => {
    if (!emailKey) return;

    setAllEnrollments((previous) => {
      const existing = previous[emailKey] || [];
      const merged = [...existing];

      courses.forEach((course) => {
        const alreadyEnrolled = merged.some(
          (item) => String(item.id) === String(course.id)
        );

        if (!alreadyEnrolled) {
          merged.push({
            ...course,
            completedLessons: [],
          });
        }
      });

      return { ...previous, [emailKey]: merged };
    });
  };

  const markLessonComplete = (courseId, lessonId) => {
    if (!emailKey) return;

    setAllEnrollments((previous) => {
      const courses = previous[emailKey] || [];

      const updatedCourses = courses.map((course) => {
        if (String(course.id) !== String(courseId)) return course;

        const completedLessons = course.completedLessons || [];

        if (completedLessons.some((id) => String(id) === String(lessonId))) {
          return course;
        }

        return {
          ...course,
          completedLessons: [...completedLessons, lessonId],
        };
      });

      return { ...previous, [emailKey]: updatedCourses };
    });
  };

  const isEnrolled = (courseId) =>
    enrolledCourses.some(
      (course) => String(course.id) === String(courseId)
    );

  const getProgress = (courseId, totalLessons) => {
    if (!totalLessons) return 0;

    const course = enrolledCourses.find(
      (item) => String(item.id) === String(courseId)
    );

    return Math.min(
      100,
      Math.round(
        ((course?.completedLessons?.length || 0) / totalLessons) * 100
      )
    );
  };

  return (
    <EnrollmentContext.Provider
      value={{
        enrolledCourses,
        enrollCourses,
        markLessonComplete,
        isEnrolled,
        getProgress,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollments() {
  const context = useContext(EnrollmentContext);

  if (!context) {
    throw new Error(
      "useEnrollments must be used inside EnrollmentProvider"
    );
  }

  return context;
}
