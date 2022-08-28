import { useRouter } from "next/router";

const getPath = (path) => {
  const router = useRouter();
  return router.pathname === path;
};

export { getPath };
