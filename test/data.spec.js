import {filtrarPersonagens, filtrarFeiticos, filtrarPocoes, filtrarLivros} from '../src/data.js';

describe('filtrar nome do personagem', () => {
  it('deve retornar Harry', () => {
    const nomesFiltrados = filtrarPersonagens('harry')
    expect(nomesFiltrados.length).toBe(1)
    expect(nomesFiltrados[0].name).toBe("Harry Potter")
  })
})
describe('filtrar nome do feitico', () => {
  it('deve retornar Accio', () => {
    const nomesFiltrados = filtrarFeiticos('accio')
    expect(nomesFiltrados.length).toBe(1)
    expect(nomesFiltrados[0].name).toBe("Accio")
  })
})
describe('filtrar nome da pocao', () => {
  it('deve retornar Poção do Amor', () => {
    const nomesFiltrados = filtrarPocoes('Poção do Amor')
    expect(nomesFiltrados.length).toBe(1)
    expect(nomesFiltrados[0].name).toBe("Poção do Amor")
  })
})
describe('filtrar nome do livro', () => {
  it('deve retornar Harry Potter e a câmara secreta', () => {
    const nomesFiltrados = filtrarLivros('Harry Potter e a câmara secreta')
    expect(nomesFiltrados.length).toBe(1)
    expect(nomesFiltrados[0].title).toBe("Harry Potter e a câmara secreta")
  })
})
