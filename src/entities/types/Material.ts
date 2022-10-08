export enum StatusMaterial {
  inCAET = 'No CAET',
  outCAET = 'Fora do CAET'
}

type MaterialType = {
  id: number;
  nome: string;
  status: StatusMaterial,
  description: string;
}

export default MaterialType