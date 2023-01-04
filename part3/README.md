
<h1 align="center">
  <br>3 - Aprendendo a desenhar na tela
</h1>
 
 
<p align="center"  > 
  <img src="images/screen.png" alt="animated" />
</p>
   
 
##  Conteúdo 📄
 
1.  [<span style="color:CornflowerBlue;">Visão geral do curso</span> ](https://github.com/dedogames/curso_space_2d_js/tree/main/part1)
    * Qual a finalidade do curso?
    * Requisitos tecnologicos para rodar/desenvolver o jogo
    * Requisitos técnicos recomendável, mas não obrigatórios
2.  [<span style="color:CornflowerBlue;">Estrutura do projeto</span>](https://github.com/dedogames/curso_space_2d_js/tree/main/part2)
    *   Template básico com html, css, e JavaScript 
3.  [<span style="color:CornflowerBlue;   ">Aprendendo a desenhar na tela</span>  ](https://github.com/dedogames/curso_space_2d_js/tree/main/part3)
    *  Qual a importancia de desenhar figuras na tela?
    *  <b>Extra</b>: Criado uma simples classe de log para abstrair o <i>console.log</i>
4.  [<span style="color:CornflowerBlue "> Adicionando o loop do jogo</span>](https://github.com/dedogames/curso_space_2d_js/tree/main/part4)
    *  Movimentnado objetos 
5.  [<span style="color:CornflowerBlue "> Criando atirador</span>](https://github.com/dedogames/curso_space_2d_js/tree/main/part5)
    * Jogador com multiplas armas
6.  [<span style="color:CornflowerBlue "> Criar inimigos com vida( em %)</span>](https://github.com/dedogames/curso_space_2d_js/tree/main/part6)
    * Criando inimigos com herança
    * Adicionando tiros aos inimigos
7.  [<span style="color:CornflowerBlue "> Melhorando as funcionaliaddes do jogo</span>](https://github.com/dedogames/curso_space_2d_js/tree/main/part7)
    * Adicionando colisão entre objetos
    * Setando vidas para jogador/Inimigo
8.  [<span style="color:CornflowerBlue "> Implementar GUI(textos,botoes,....)</span>](https://github.com/dedogames/curso_space_2d_js/tree/main/part8)
9.  [<span style="color:CornflowerBlue "> Criando uma maquina de estado básica</span>](https://github.com/dedogames/curso_space_2d_js/tree/main/part9)
    * Controlar os estados, Inicio, Jogar,Jogando,Pausa e GameOver 
10.  [<span style="color:CornflowerBlue;font-weight: ">Sobre o Autor</span> ](https://github.com/dedogames/curso_space_2d_js/blob/main/ABOUT.md)
---

## 3.1 Qual a importancia de desenhar figuras na tela?
Na versão do curso completo, ao inserir imagens(sprites, backgrounds,fonts...) é importante validar se os pontos de onde saem as balas estão corretos, ou se  os pontos de colisão estão com os limites corretos, entre outras coisas com isso, é possivel habilitar o mode debug exibindo bolas e quadrados, com isso fica mais facil validar o que já foi feito, e adicionar novas funcionalidades.
Um exemplo abaixo , demonstra essa técnica.


<p align="center"  > 
  <img src="images/square_debug.png" alt="animated" />
  </br>Figura de uma nave, contendo 3 retangulos, o maior, que encobre toda a nave, usado para saber os limites para colisão,
   </br>os outros 3 retangulso menores, são para o ponto que irao, sair os projeteis.
</p>







