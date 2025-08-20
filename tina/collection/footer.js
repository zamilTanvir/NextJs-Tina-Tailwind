const Footer = {
  label: "Footer",
  name: "footer",
  path: "content/footer", // Path for storing footer content,
   ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/footer/${document._sys.filename}`
        },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Footer Title",
    },

    {
      type: "object",
      name: "links",
      label: "Footer Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "label",
          label: "Link Label",
        },
        {
          type: "string",
          name: "url",
          label: "Link URL",
        },
      ],
    },
    {
      type: "string",
      name: "copyright",
      label: "Copyright Text",
    },
  ],
};

export default Footer;
