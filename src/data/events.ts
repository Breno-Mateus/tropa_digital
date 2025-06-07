export interface EventItem {
  id: number;
  name: string;
  total: string;
  status: string;
  date: string;
}

export const events: EventItem[] = [
  {
    id: 1,
    name: "Festival do Peão de Barretos",
    total: "25",
    status: "Ativo",
    date: "20 a 30 de Agosto",
  },
  {
    id: 2,
    name: "Expo Pantanal",
    total: "15",
    status: "Inativo",
    date: "05 a 10 de Setembro",
  },
  {
    id: 3,
    name: "Rodeio Internacional de Cuiabá",
    total: "30",
    status: "Ativo",
    date: "12 a 15 de Outubro",
  },
  {
    id: 4,
    name: "Arraial do Povo",
    total: "8",
    status: "Ativo",
    date: "01 a 06 de Julho",
  },
  {
    id: 5,
    name: "Festa do Divino Espírito Santo",
    total: "12",
    status: "Inativo",
    date: "20 a 25 de Maio",
  },
  {
    id: 6,
    name: "Encontro Nacional de Colecionadores",
    total: "50",
    status: "Ativo",
    date: "10 a 12 de Novembro",
  },
];
