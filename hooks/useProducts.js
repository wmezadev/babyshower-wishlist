import { useState } from "react";

export default function useProducts() {
  const [isLoading, setIsLoading] = useState(false);

  const postToggleLockProduct = async ({ id, isLocked }) => {
    let result;
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/products`,
        {
          method: "POST",
          body: JSON.stringify({ id, isLocked }),
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
    postToggleLockProduct({ id, isLocked: true });

  const unLockProduct = async ({ id }) =>
    postToggleLockProduct({ id, isLocked: false });

  return { isLoading, lockProduct, unLockProduct };
}
