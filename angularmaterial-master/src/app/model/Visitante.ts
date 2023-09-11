export class visitante{
    Visi_Dni?: string;
    Visi_Nombres?: string;
    Visi_ApePaterno?: string;
    Visi_ApeMaterno?: string;
    Visi_Correo?: string;
    Visi_Celular?: string;
    Ocup_codigo?: number;
    Visi_FechaRegistro?: Date;
}

// limite Dni
function limiteDni(input: string): string {
    if (input.length == 8) {
      return input as string;
    } else {
      throw new Error('DNI debe de tener 8 dígitos');
    }
  }

  // limite celular
function limitecelular(input: string): string {
    if (input.length == 9) {
      return input as string;
    } else {
      throw new Error('El número de celular debe de tener 9 dígitos');
    }
  }
