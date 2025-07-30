"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { initializeAuth, logout as logoutAction } from "@/store/authSlice";
import { loginAsync } from "@/store/authThunks";

// Redux Provider Wrapper
export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  );
}

// Component to initialize auth state
function AuthInitializer({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Initialize auth state from cookies on mount
    dispatch(initializeAuth());
  }, [dispatch]);

  return <>{children}</>;
}

// Custom hook for auth operations
export function useAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuthenticated, loading, user } = useAppSelector(
    (state) => state.auth
  );

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      await dispatch(loginAsync({ username, password })).unwrap();
      router.push("/dashboard");
      return true;
    } catch (error) {
      // @typescript-eslint/no-unused-vars
      return false;
    }
  };

  const logout = () => {
    dispatch(logoutAction());
    router.push("/login");
  };

  return {
    isAuthenticated,
    loading,
    user,
    login,
    logout,
  };
}

// ProtectedLayout HOC
export function withAuth<T extends object>(Component: React.ComponentType<T>) {
  return function ProtectedComponent(props: T) {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, loading, router]);

    // Show loading spinner while checking authentication
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      );
    }

    // If not authenticated, don't render the component (redirect will happen)
    if (!isAuthenticated) {
      return null;
    }

    // Render the protected component
    return <Component {...props} />;
  };
}
