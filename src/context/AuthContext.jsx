
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "lms-user";

function getSavedUser() {
  try {
    const savedUser = localStorage.getItem(STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);

  // Login, register, logout aur profile update ke baad
  // user data browser storage mein save rahega.
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      console.error("Unable to save user data:", error);
    }
  }, [user]);

  const isAuthenticated = Boolean(user);

  // Demo login: email aur role ke saath user session banata hai.
  const login = ({ name, email, role = "student" }) => {
    if (!email?.trim()) {
      return {
        success: false,
        message: "Email is required.",
      };
    }

    const normalizedRole = role.toLowerCase();

    if (!["student", "instructor"].includes(normalizedRole)) {
      return {
        success: false,
        message: "Invalid account role.",
      };
    }

    const loggedInUser = {
      name: name?.trim() || email.split("@")[0],
      email: email.trim().toLowerCase(),
      role: normalizedRole,
    };

    setUser(loggedInUser);

    return { success: true, user: loggedInUser };
  };

  // Demo registration: user ka basic profile banata hai.
  const register = ({ name, email, role = "student" }) => {
    if (!name?.trim() || !email?.trim()) {
      return {
        success: false,
        message: "Name and email are required.",
      };
    }

    const normalizedRole = role.toLowerCase();

    if (!["student", "instructor"].includes(normalizedRole)) {
      return {
        success: false,
        message: "Invalid account role.",
      };
    }

    const newUser = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role: normalizedRole,
    };

    setUser(newUser);

    return { success: true, user: newUser };
  };

  // Profile page se naam ya anya allowed profile details update karein.
  const updateUser = (updates) => {
    if (!user) {
      return {
        success: false,
        message: "Please log in first.",
      };
    }

    const updatedUser = {
      ...user,
      ...updates,
      email: user.email,
      role: user.role,
    };

    if (typeof updates.name === "string") {
      if (!updates.name.trim()) {
        return {
          success: false,
          message: "Name cannot be empty.",
        };
      }

      updatedUser.name = updates.name.trim();
    }

    setUser(updatedUser);

    return { success: true, user: updatedUser };
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    updateUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}
