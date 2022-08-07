export default {
  name: 'publicidade',
  title: 'Publicidade',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome da Publicidade',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: "tipo",
      title: "Tipo",
      type: "string",
      description: "Topo, Central ou Rodapé",
      options: {
        list: [
          { title: "Topo", value: "t" },
          { title: "Central", value: "c" },
          { title: "Rodapé", value: "r" }
        ]
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Descrição',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
