import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import ShopingCart from "@/Components/ShoppingCart";
import { client } from "../../../tina/__generated__/client";

export default function index({ data }) {

    return(     
        <ShopingCart postsData={data} />
    );
}

export async function getStaticProps() {
  const { data } = await client.queries.post({ relativePath: `shopping-cart.mdx` });
  return { props: { data } };
}
