/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('index.html', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  test('debe contener un encabezado h1 con el texto correcto', () => {
    const h1 = document.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe('¡Hola Mundo desde mi CI/CD!');
  });
});


