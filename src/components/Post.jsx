import { useFetching } from "./useFetching";

export const Post = () => {
  const getPost = useFetching("https://jsonplaceholder.org/comments");
  console.log(getPost);
};
