import { 
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import type { Post } from '../types/blog';

export const createPost = async (post: Omit<Post, 'id'>, coverImage?: File) => {
  try {
    let coverImageUrl;
    if (coverImage) {
      const storageRef = ref(storage, `covers/${Date.now()}_${coverImage.name}`);
      await uploadBytes(storageRef, coverImage);
      coverImageUrl = await getDownloadURL(storageRef);
    }

    const docRef = await addDoc(collection(db, 'posts'), {
      ...post,
      coverImage: coverImageUrl,
      publishedAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });

    return { id: docRef.id, ...post, coverImage: coverImageUrl };
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id: string, post: Partial<Post>, coverImage?: File) => {
  try {
    let coverImageUrl = post.coverImage;
    if (coverImage) {
      const storageRef = ref(storage, `covers/${Date.now()}_${coverImage.name}`);
      await uploadBytes(storageRef, coverImage);
      coverImageUrl = await getDownloadURL(storageRef);
    }

    const postRef = doc(db, 'posts', id);
    await updateDoc(postRef, {
      ...post,
      coverImage: coverImageUrl,
      updatedAt: Timestamp.now()
    });

    return { id, ...post, coverImage: coverImageUrl };
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'posts', id));
    return id;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const q = query(
      collection(db, 'posts'),
      where('status', '==', 'published'),
      orderBy('publishedAt', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Post[];
  } catch (error) {
    throw error;
  }
};