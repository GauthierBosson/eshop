import type { NextPage } from "next";
import { useRouter } from "next/router";

const Product: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return <h1>Product : {slug}</h1>
}

export default Product
