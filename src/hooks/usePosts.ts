import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setPosts, addPost, updatePost, deletePost } from '../store/slices/postsSlice';
import type { Post } from '../types/blog';
import { useCallback } from 'react';

export function usePosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const error = useSelector((state: RootState) => state.posts.error);

  const createPost = useCallback((post: Post) => {
    dispatch(addPost(post));
  }, [dispatch]);

  const editPost = useCallback((post: Post) => {
    dispatch(updatePost(post));
  }, [dispatch]);

  const removePost = useCallback((id: string) => {
    dispatch(deletePost(id));
  }, [dispatch]);

  return {
    posts,
    loading,
    error,
    createPost,
    editPost,
    removePost,
  };
}