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
  
  { id: 1, title: 'Equilibrio', category: 'Cerámica', year: '2025', technique: 'Arcilla', description: 'Pieza inspirada en la armonía y la asimetría.', image: 'assets/images/equilibrio.png?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, title: 'Fragmento de la persona', category: 'Escultura', year: '2025', technique: 'Modelado escultórico', description: 'Un rostro hace parte.', image: 'assets/images/mascara.png?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, title: 'Bodegon Cafe', category: 'Pintura', year: '2025', technique: 'Acrílico sobre lienzo', description: 'El cafe, siempre me identificara como parte de mi identidad Colombiana, no se necesita una bandera solo el aroma.', image: 'assets/images/bodegonCafe.jpg?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, title: 'Archivo digital', category: 'Digital', year: '2026', technique: 'Composición digital', description: 'Intersección entre arte, memoria visual y tecnología.', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, title: 'Fragmentos', category: 'Pintura', year: '2025', technique: 'Técnica mixta', description: 'Capas, texturas y gestos como registro emocional.', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, title: 'Materia viva', category: 'Cerámica', year: '2025', technique: 'Cerámica manual', description: 'Pieza que dialoga con la tierra, la forma y la huella.', image: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?auto=format&fit=crop&w=1200&q=80' }
];
