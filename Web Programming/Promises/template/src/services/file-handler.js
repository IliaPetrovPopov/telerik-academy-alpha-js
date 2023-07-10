/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

export class FileHandler {
  read(filename = '') {
    filename = join(__dirname, '..', filename);

    // missing implementation
  }

  write(filename = '', data = '') {
    filename = join(__dirname, '..', filename);

    // missing implementation
  }
}
