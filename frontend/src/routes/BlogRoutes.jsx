import React from 'react';
// import SustainableLivingPage from "../blogs/SustainableLivingPage";
// const blogRoutes = [, { path: "sustainablelivingpage", element: <SustainableLivingPage /> }];

// export default blogRoutes;



import BlogPage from "../pages/BlogPage";

// Automatically import all blog components
const modules = import.meta.glob("../blogs/*.jsx", { eager: true });

function toSlug(fileName) {
  // Remove extension, e.g. JsonToCsvConverterPage.jsx → JsonToCsvConverterPage
  const name = fileName.replace(".jsx", "");
  // Convert PascalCase → kebab-case (JsonToCsvConverterPage → json-to-csv-converter-page)
  return name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

const formattedPages = Object.entries(modules).map(([key]) => {
  const name = key.split("/").pop().replace(".jsx", "");
  return {
    name: name
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/\b\w/g, (c) => c.toUpperCase()), // "Json Format Page"
    url: name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), // "json-format-page"
  };
});
console.log(formattedPages, "format");
const BlogRoutes = Object.entries(modules).map(([path, module]) => {
  const fileName = path.split("/").pop(); // e.g. "JsonToCsvConverterPage.jsx"
  const slug = toSlug(fileName); // → "json-to-csv-converter-page"

  const name = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    name,
    path: slug,
    element: (
      <BlogPage pages={formattedPages}>
        <module.default />
      </BlogPage>
    ),
  };
});

export default BlogRoutes;
