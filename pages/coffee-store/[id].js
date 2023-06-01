import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <h1>Hello from new page {router.query.id}</h1>
  );
};

export default CoffeeStore;
