import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { setUser, setLoading, setError } from '../store/slices/authSlice';
import type { RootState } from '../store';

export function useAuth() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        dispatch(setUser(user));
      },
      (error) => {
        dispatch(setError(error.message));
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  return { user, loading, error };
}