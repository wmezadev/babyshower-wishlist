import { useState } from "react";

export default function useProducts() {
  const [isLoadingProduct, setIsLoading] = useState(false);

  const lockProduct = async ({ id }) => {
    let result;
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/product/${id}`,
        {
          method: "PATCH"
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

  return { isLoadingProduct, lockProduct };
}
