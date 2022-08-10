export default {
  name: 'youtube',
  title: 'Youtube',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome do Vídeo',
      type: 'string',
    },
    {
      name: 'valor',
      title: 'Valor',
      type: 'string',
      description: "Coloque o valor do vídeo depois do final de cada url, encontre o valor depois de v=",
    },
    {
      name: "tipo",
      title: "Tipo",
      type: "string",
      description: "Topo, Central ou Rodapé",
      options: {
        list: [
          { title: "Home", value: "h" },
          { title: "Videos", value: "v" }
        ]
      }
    },
  ],
}
