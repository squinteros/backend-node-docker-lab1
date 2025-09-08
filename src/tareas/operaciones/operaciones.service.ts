import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b: number) {
    if (operacion === 'suma') {
      return this.#suma(a, b);
    } else if (operacion === 'resta') {
      return this.#resta(a, b);
    }
  }

  #suma(a: number, b: number) {
    return a + b;
  }

  #resta(a: number, b: number) {
    return a - b;
  }
}
