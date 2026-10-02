Status:  #fim
Tags: [[Path of Exile 2]]

---

# ATENÇÃO! RECOMBINADOR FOI REMOVIDO NA LIGA 0.5!

# 1. O que é o Recombinador?

O recombinador é uma bancada de craft onde você coloca dois itens. É necessário selecionar pelo menos um modificador em cada item, e o jogo mostrará uma probabilidade de sucesso (variando de 0% a 100%) no centro. Você pode selecionar até 6 modificadores no total entre os dois itens. O mesmo tipo de modificador não pode ser selecionado duas vezes (ex.: 2x dano de raio). Depois, basta clicar em **recombinar**.

> [!Info]- Como liberar o recombinador?
> - Você libera após fazer qualquer expedição no End Game.

Ao recombinar, você tem três possíveis resultados (mas não com probabilidades iguais):

- O item da esquerda aparece com todos os modificadores selecionados, preservando o nome e o nível do item.
- O item da direita aparece com todos os modificadores selecionados, preservando o nome e o nível do item.
- Você não recebe nada (recombinação falhou, ambos os itens são destruídos).

> [!Note]- O item será sempre **raro**, mesmo que tenha apenas dois modificadores.

Somente os modificadores que você selecionou estarão no item final (**exceto os modificadores fraturados**, que são uma exceção).
# 2. A seleção da base não é 50/50.
Ao tentar transferir um mod de tier alto de uma base ruim para uma base boa, é muito provável que você falhe na transferência e acabe escolhendo a base ruim novamente. 

Muitas vezes acontece de você dropar um modificador muito bom em uma base ruim e querer transferi-lo para uma base melhor (por exemplo, **160% de dano físico em uma lança**, que só tem dano base de raio, tornando esse mod inútil).
Alguns pontos importantes:

- A recombinação definitivamente **não é 50/50** para seleção de base. A escolha da base provavelmente é influenciada pelos modificadores que você seleciona em cada item.
- Você **não pode transferir um modificador** para uma base que não pode gerá-lo naturalmente (restrições de <span style="color:rgb(255, 0, 0)">tipo de base e nível de item se aplicam</span>).
- Você **não pode selecionar um modificador fraturado**. No entanto, se a recombinação for bem-sucedida e a base fraturada for mantida, o mod fraturado permanece. Fraturas **não afetam a taxa de sucesso**.
- Muito mais testes ainda precisam ser feitos para descobrir as chances exatas de escolher uma base ou outra. Tudo o que podemos afirmar com certeza, até agora, é que as chances **não são 50/50**.
# 3. Melhores práticas para recombinar bases fraturadas. 
Como mencionado acima, **modificadores fraturados**, até onde sabemos, **não afetam a chance de sucesso da recombinação** mostrada na janela do recombinador. Se a base fraturada for escolhida, o mod fraturado será incluído de graça, junto com os mods recombinados.

- Modificadores fraturados são mantidos se a base fraturada permanecer após a recombinação. 
- Modificadores fraturados não podem ser selecionados, mas também não alteram suas chances de recombinação.

**Resumo:** Isso significa que muitas vezes pode ser uma escolha melhor recombinar **dois mods em uma base fraturada** para obter **3 mods (1 deles sendo fraturado)**, em vez de tentar recombinar 3 mods diretamente.

Atualmente, há relatos de que a própria fratura influencia fortemente a escolha da base, mas isso ainda está sendo investigado.

A consequência mais importante para bases fraturadas é que o **peso do mod escolhido na base fraturada deve ter pouca influência nas chances de “vencer” a recombinação**:

- Se você selecionar um mod de peso **baixo**, sua recombinação terá boas chances de sucesso, mas uma probabilidade extremamente baixa de manter a base fraturada, veja mais aqui [[Recombinador#2. A seleção da base não é 50/50]].
- Se você selecionar um mod de peso **alto**, sua recombinação terá chances ruins, mas você estará muito mais propenso a manter a base fraturada.
# 4. Cálculos.
## Calculo com ![[Presságio da Recombinação.png|20]]<span style="color:rgb(0, 176, 240)">Presságio da Recombinação</span>.

$$
\text{Chance de sucesso} = \left( 1 - (1 - \text{porcentagem}\%)^2 \right) \times 100
$$

- Se um item tiver <span style="color:rgb(255, 255, 0)">29,95% de Chance</span> de sucesso, com o ![[Presságio da Recombinação.png|20]]<span style="color:rgb(0, 176, 240)">Presságio da Recombinação</span> ele sobe para <span style="color:rgb(255, 255, 0)">50,92%</span>, e não para <span style="color:rgb(255, 255, 0)">60%</span> como todo mundo imagina. A chance de sucesso ao usar o ![[Presságio da Recombinação.png|20]]<span style="color:rgb(0, 176, 240)">Presságio da Recombinação</span> sobe mais quando usado em uma porcentagem base mais baixa.
# 5. Meus pensamentos.

Embora os **recombinadores** não sejam tão poderosos, eles ainda têm alguns casos de uso aplicáveis e podem ser otimizados para **maximizar suas chances em combinações de 2/3 mods (com fraturas)**. 

Eu acredito que conforme mais pessoas forem descobrindo o poder do recombinador, isso pode causar um impacto econômico considerável, já que os jogadores poderão comprar itens inacabados para finalizar. Isso também afetará o **mercado de itens**, permitindo que os crafters determinem com mais precisão os custos de craft para projetos extremamente caros.

Foto de um recombinador, skin padrão.
![[Recombinador.png]][^1]
![[Recombinador Tela.png]]