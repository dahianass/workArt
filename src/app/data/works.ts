export interface Work {
  id: number;
  title: string;
  category: 'Pintura' | 'Cerámica' | 'Escultura' | 'Digital';
  year: string;
  technique: string;
  description: string;
  image: string;
}

export const WORKS: Work[] = [
  { id: 1, title: 'Memoria púrpura', category: 'Pintura', year: '2026', technique: 'Acrílico sobre lienzo', description: 'Exploración visual sobre identidad, emoción y movimiento.', image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, title: 'Vasija nocturna', category: 'Cerámica', year: '2026', technique: 'Arcilla esmaltada', description: 'Pieza inspirada en formas orgánicas y tonos profundos.', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, title: 'Figura interior', category: 'Escultura', year: '2025', technique: 'Modelado escultórico', description: 'Cuerpo, silencio y transformación como lenguaje plástico.', image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, title: 'Archivo digital', category: 'Digital', year: '2026', technique: 'Composición digital', description: 'Intersección entre arte, memoria visual y tecnología.', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, title: 'Fragmentos', category: 'Pintura', year: '2025', technique: 'Técnica mixta', description: 'Capas, texturas y gestos como registro emocional.', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, title: 'Materia viva', category: 'Cerámica', year: '2025', technique: 'Cerámica manual', description: 'Pieza que dialoga con la tierra, la forma y la huella.', image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?auto=format&fit=crop&w=1200&q=80' }
];
