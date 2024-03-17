"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/portfolio");
  } catch (err) {
    console.log(err);
    return { error: "Something messed up." };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Post deleted!");
    revalidatePath("/portfolio");
  } catch (err) {
    console.log(err);
    return { error: "Something messed up." };
  }
};
