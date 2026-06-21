export interface Work {
  id: number;
  title: string;
  category: 'Pintura' | 'Cerámica' | 'Escultura' | 'Digital'| 'Ilustración';
  year: string;
  technique: string;
  description: string;
  image: string;
}

export const WORKS: Work[] = [
  
  { id: 1, title: 'Equilibrio', category: 'Cerámica', year: '2025', technique: 'Arcilla', description: 'Pieza inspirada en la armonía y la asimetría.', image: 'assets/images/equilibrio.png?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, title: 'Fragmento de la persona', category: 'Escultura', year: '2025', technique: 'Modelado escultórico', description: 'Un rostro hace parte.', image: 'assets/images/mascara.png?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, title: 'Frolero', category: 'Cerámica', year: '2025', technique: 'Arcilla', description: 'Un florero con cecado simple y esmalte brillante adentro, se quiere transmitir el color natural de este tipo de archilla y que se note la textura del proceso en el torno.', image: 'assets/images/florero.png?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, title: 'Gombey', category: 'Ilustración', year: '2026', technique: 'Papel, acuarela y lapices de colores', description: 'Esta ilustración captura, a través de trazos vibrantes y el dinamismo del color, la energía y fluidez de la danza tradicional Gombey. Más que un movimiento, el baile es una poderosa expresión de libertad e identidad cultural', image: 'assets/images/Gombey.jpeg?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, title: 'Penumbra', category: 'Pintura', year: '2026', technique: 'Acrílico sobre lienzo', description: 'Un estudio de tonos fríos y nocturnos, donde la serenidad del violeta envuelve los objetos en una quietud íntima y melancólica.', image: 'assets/images/Morado.png?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, title: 'Luz Fluida', category: 'Pintura', year: '2026', technique: 'Acrílico sobre lienzo', description: 'Calidez y energía. Los fondos encendidos irradian una vibración lumínica que parece emanar del propio lienzo', image: 'assets/images/NaranjaPintura.png?auto=format&fit=crop&w=1200&q=80' },
  { id: 7, title: 'Contraste Primario', category: 'Pintura', year: '2026', technique: 'Acrílico sobre lienzo', description: 'El equilibrio de la serie, donde el contraste del fondo rojizo profundo resalta los volúmenes.', image: 'assets/images/ColoresOriginales.png?auto=format&fit=crop&w=1200&q=80' },
  { id: 8, title: 'Bodegon Cafe', category: 'Pintura', year: '2025', technique: 'Acrílico sobre lienzo', description: 'El cafe, siempre me identificara como parte de mi identidad Colombiana, no se necesita una bandera solo el aroma.', image: 'assets/images/bodegonCafe.jpg?auto=format&fit=crop&w=1200&q=80' }
];
