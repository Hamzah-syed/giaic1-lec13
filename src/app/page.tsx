import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"

export default async function Home() {

  const data = await client.fetch(`*[_type == "homepage"]{
  heading,
  paragraph,
  image,
  buttonText
}[0]
`)

  console.log(data)

  return (
    <>
      <h1>
        {data.heading}
        <img  
        src={urlFor(data.image).url()}  
        alt="Poster"
        width={200}
        height={200}
        />
      </h1>
    </>
  );
}
