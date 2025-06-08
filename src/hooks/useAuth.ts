import { useAuthStore } from "../store/authStore";

export const useAuth = () => {
  const { 
    token, 
    isAuthenticated, 
    login, 
    logout 
  } = useAuthStore();

  const loginWithFeedback = async (email: string, password: string) => {
    try {
      await login(email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  return {
    isLoggedIn: isAuthenticated && !!token,
    login: loginWithFeedback,
    logout,
  };
};