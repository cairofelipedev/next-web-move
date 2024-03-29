import { groq } from "next-sanity";

export const postquery = groq`
*[_type == "post" ] | order(_createdAt desc)  {
  ...,
  author->,
  categories[]->
}
`;

export const configQuery = groq`
*[_type == "siteconfig"][0] {
  ...,
}
`;

export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  author->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 )
}
`;

export const pathquery = groq`
*[_type == "post"] {
  'slug': slug.current,
}
`;

export const authorsquery = groq`
*[_type == "author"] {
 ...
}
`;

// test below
// to delete later

export const listquery = groq`
*[_type == "listing"] | order(_createdAt desc) [$start..$end] {
  ...,
  category->
 }
`;

export const productquery = groq`
*[_type == "listing" && slug.current == $slug][0] {
  ...,
  category-> {
    ...,
    enqform->,
    vendorform->
  }
 }
`;

export const destaques = groq`
*[_type == "post" && destaque == "s"] | order(_createdAt desc)  {
  ...,
  author->,
  categories[]->
}
`;

export const destaques2 = groq`
*[_type == "post" && destaquelist == "s"] | order(_createdAt desc)  {
  ...,
  author->,
  categories[]->
}
`;

export const publi = groq`
*[_type == "publicidade" && tipo == "c"] {
  ...
 }
`;

export const publi2 = groq`
*[_type == "publicidade" && tipo == "t"] {
  ...
 }
`;

export const publi3 = groq`
*[_type == "publicidade" && tipo == "r"] {
  ...
 }
`;

export const videosyoutube = groq`
*[_type == "youtube" && tipo == "v"] {
  ...
 }
 `;
