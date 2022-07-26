export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "excerpt",
      title: "Subtítulo",
      description:
        "O subtítulo é usado em feeds de blogs e também para resultados de pesquisa",
      type: "text",
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: "author",
      title: "Colunista",
      type: "reference",
      to: { type: "author" }
    },
    {
      name: "mainImage",
      title: "Imagem Principal",
      type: "image",
      fields: [
        // {
        //   name: "caption",
        //   type: "string",
        //   title: "Image caption",
        //   description: "Appears below image.",
        //   options: {
        //     isHighlighted: true
        //   }
        // },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true
          }
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "destaque",
      title: "Destaque",
      type: "string",
      description: "Post em destaque",
      options: {
        list: [
          { title: "Sim", value: "s" },
          { title: "Não", value: "n" }
        ]
      }
    },
    {
      name: "destaquelist",
      title: "Destaque - Lista",
      type: "string",
      description: "Destaquem que ficam na listagem principal",
      options: {
        list: [
          { title: "Sim", value: "s" },
          { title: "Não", value: "n" }
        ]
      }
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
