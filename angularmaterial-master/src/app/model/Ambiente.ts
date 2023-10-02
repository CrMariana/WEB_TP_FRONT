import { Area } from "./Area";
import { Pabellon } from "./Pabellon";

export class Ambiente{
    id?: string;
    descripcion?: string;
    foto?: string;
    contacto?: string;
    horario?: string;
    piso?: string;
    referencia?: string;
    area?: Area;
    pabellon?: Pabellon;
}

// Función para crear una cadena de longitud máxima de 2 caracteres
function fpabecodigo(input: string): string {
    if (input.length === 2) {
      return input;
    } else {
      throw new Error('Longitud máxima de 2 caracteres.');
    }
  }
