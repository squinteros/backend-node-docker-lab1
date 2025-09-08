import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private leaks: number[][] = []; // aquí guardamos los "leaks"

  getHello(): string {
    return 'Hola mundo!!';
  }

  runCpuTask(): string {
    const start = Date.now();
    let count = 0;

    // Bucle que consume CPU por al menos 1 segundo
    while (Date.now() - start < 1000) {
      count += Math.sqrt(Math.random() * Math.random());
    }

    return `CPU test done! Iterations: ${count}`;
  }

  runMemoryTask(size: number): string {
    const arr: number[] = [];

    for (let i = 0; i < (size * 1024 * 1024) / 8; i++) {
      arr.push(Math.random());
    }

    this.leaks.push(arr);

    return `Allocated ~${size} MB of memory. Total leaks: ${this.leaks.length}`;
  }
}
