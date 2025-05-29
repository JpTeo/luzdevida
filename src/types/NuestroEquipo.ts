export interface Professional {
  id: number;
  title: string;
  name: string;
  license: string;
  icon: string;
  content?: string;
  direction: "left" | "right";
}

export interface NuestroEquipoData {
  professionals: Professional[];
}
