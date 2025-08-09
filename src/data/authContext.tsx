import { auth } from "../utils/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { useEffect, useState, useMemo, useCallback } from "react";
import { AuthContext, type AuthContextType } from "./authContextParams";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userFrb, setUsrFrb] = useState<User | null | undefined>(undefined); // Initial state undefined signifies "loading"
  const [loader, setLoader] = useState(true);

  const loginEmail = useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
    []
  );

  const logOut = useCallback(async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }, []);

  const googleSignIn = useCallback(async (): Promise<void> => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsrFrb(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []); //

  const value = useMemo<AuthContextType>(
    () => ({
      loginEmail,
      logOut,
      userFrb,
      loader,
      googleSignIn,
    }),
    [loginEmail, logOut, userFrb, loader, googleSignIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
