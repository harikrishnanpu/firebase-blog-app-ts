import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../config/firebase.Config";
import type { Blog } from "../types/Blog";


export const createBlog = async (
  title: string,
  content: string,
  coverImage?: string
) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("You must be logged in to create a blog post.");
  }

  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title,
      content,
      coverImage: coverImage || null,
      authorId: user.uid,
      authorName: user.displayName || "Anonymous",
      authorEmail: user.email,
      createdAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Failed to create blog post.");
  }
};


export const getAllBlogs = async () => {
    try{

        const q = query(collection(db, 'blogs'));
        const snapshot = await getDocs(q);

        const blogs = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            href: `/blog/${docSnap.id}`,
            ...docSnap.data()
        }) as Blog )

    return blogs;

    }catch(err){
       if(err instanceof Error) throw new Error(err.message)
    }

}



export const getUserBlogs = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("You must be logged in.");

  try {
    const q = query(collection(db, "blogs"), where("authorId", "==", user.uid));
    const snapshot = await getDocs(q);

    const blogs = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    return blogs;
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    console.log(err)
    throw new Error("Failed to load blogs.");
  }
};


export const getBlogById = async (id: string) => {
  try {
    const ref = doc(db, "blogs", id);
    const snap = await getDoc(ref);
    if (!snap.exists()) throw new Error("Blog not found");
    return { id: snap.id, ...snap.data() };
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Failed to load blog");
  }
};



export const updateBlog = async (blogId: string, title: string, content: string) => {
  const user = auth.currentUser;
  if (!user) throw new Error("You must be logged in.");

  try {
    const blogRef = doc(db, "blogs", blogId);
    await updateDoc(blogRef, {
      title,
      content,
      updatedAt: new Date(),
    });
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Failed to update blog.");
  }
};


export const deleteBlog = async (id: string): Promise<void> => {
  const user = auth.currentUser;
  if (!user) throw new Error("You must be logged in to delete a blog.");

  try {
    const blogRef = doc(db, "blogs", id);
    const blogSnap = await getDoc(blogRef);

    if (!blogSnap.exists()) {
      throw new Error("Blog not found.");
    }

    const blogData = blogSnap.data();

    if (blogData.authorId !== user.uid) {
      throw new Error("You can only delete your own blogs.");
    }

    await deleteDoc(blogRef);
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Failed to delete blog");
  }
};