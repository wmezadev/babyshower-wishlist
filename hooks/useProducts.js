import { useState } from "react";

export default function useProducts() {
  const [isLoadingProduct, setIsLoading] = useState(false);

  const postToggleLockProduct = async ({ id }) => {
    let result;
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/products`,
        {
          method: "POST",
          body: JSON.stringify({ id }),
        }
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      result = res.json();
    } catch (error) {
      result = { error };
    } finally {
      setIsLoading(false);
      return result;
    }
  };

  const lockProduct = async ({ id }) =>
    postToggleLockProduct({ id, is_locked: true });

  const unLockProduct = async ({ id }) =>
    postToggleLockProduct({ id, is_locked: false });

  return { isLoadingProduct, lockProduct, unLockProduct };
}
