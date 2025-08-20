const Post = {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "mdx",
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/shopping-cart/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: false,
          },
          {
            type: "image",      // paints a thousand words
            name: "beautifulImage",
            label: "Beautiful Image",
            required: false,
          },
          {
  type: "number",
  name: "beautifulImageWidth",
  label: "Image Width",
  required: false,
  description: "Width of the image in pixels",
},
{
  type: "number",
  name: "beautifulImageHeight",
  label: "Image Height",
  required: false,
  description: "Height of the image in pixels",
}
        ],
    };
        export default Post;