#critico 

Muitas vezes você ouve streamers, youtubers ou outros jogadores falando sobre a proporção ideal entre taxa crítica (crit rate) e dano crítico (crit damage) no seu DPS. Mas quase ninguém explica por que a proporção 1:2 é a melhor e a que você deve tentar alcançar.

No fim das contas, eu entendo por que muita gente não quer explicar por que a proporção 1:2 é a ideal, porque isso acaba sendo um problema matemático. Mas se você tiver interesse e quiser entender completamente o motivo, estou aqui para ajudar.

Isso vai ser um pouco matemático (e portanto meio “chato”), mas vou tentar usar o mínimo de matemática possível (e vou avisar quando entrar em mais detalhes).

Primeiro, preciso derivar uma fórmula para expressar o aumento de dano causado pela taxa crítica (crit rate) e pelo dano crítico (crit damage). Um exemplo simples:

Digamos que você ataque causando 1000 de dano e ataque 10 vezes. Vamos supor uma taxa crítica de 50% e dano crítico de 50%. Então, 5 dos 10 ataques (em média) serão críticos e causarão 500 de dano extra. Assim, você causará:

5 × 1000 + 5 × 1500 = 12500 de dano.

Isso resulta em 2500 de dano bônus no total, ou seja, um aumento de 25%.

Se você tiver 100% de dano crítico, então causará:

5 × 1000 + 5 × 2000 = 15000 de dano,

ou seja, um aumento de 50%.

Portanto, o aumento de dano em relação à sua taxa crítica e dano crítico é:

(crit × cdmg) / 100

(quando crit e cdmg são apenas os valores deles).

Isso foi derivado a partir de exemplos, o que não é a forma matematicamente correta de provar. Vou mostrar matematicamente que o aumento de dano é realmente:

(crit × cdmg) / 100

de forma geral. Se você não tiver interesse nessa parte, pode simplesmente pular.


---

Vamos primeiro definir algumas variáveis:

c = o valor da sua taxa crítica   ->  (50% de crit → c = 50)
cd = o valor do seu dano crítico   ->  (100% de dano crítico → cd = 100)
n = o número de vezes que você ataca
d = o dano causado por ataque

O que eu quero determinar é a razão entre o dano calculado com críticos (dwc) e o dano sem críticos (dwoc).

![[Pasted image 20260528074142.png]]
Eu calculo o dano com críticos (dwc) apenas como um valor médio, e não como uma distribuição. Portanto, a quantidade média de críticos acertados é:

(n × c) / 100

e o dano desses ataques é:

d × (1 + cd / 100)

já que o dano crítico é um dano bônus que é adicionado por cima do dano original (representado pelo 1).

Então, o dano médio com críticos é:

![[Pasted image 20260528074310.png]]

quantidade de críticos × dano dos críticos + quantidade de ataques não críticos (= quantidade total de ataques − quantidade de críticos) × dano dos ataques não críticos

então:

![[Pasted image 20260528074320.png]]

mas eu quero apenas o aumento no dano, que é a segunda parte da última soma, em porcentagem (atualmente está em números decimais normais, onde 1/2 = 50%). Então, o aumento de dano é:

![[Pasted image 20260528074344.png]]

que é a fórmula mostrada anteriormente.

---
Agora eu tenho uma fórmula que posso otimizar:

![[Pasted image 20260528074421.png]]

Mas essa fórmula sozinha não é satisfatória. Em teoria, você poderia simplesmente aumentar seu dano crítico infinitamente e obter um aumento infinito de dano (enquanto a taxa crítica só contribui até 100% de crit). Então precisamos impor limites aos nossos valores:
![[Pasted image 20260528075832.png]]

Eu simplesmente digo que os valores combinados de taxa crítica e dano crítico não são infinitamente grandes, mas equivalem a algum número real positivo. Agora também preciso considerar que crit e dano crítico não possuem o mesmo valor. O que quero dizer é que você obtém (em média) o dobro de valor em dano crítico do que em taxa crítica.

Isso pode ser visto no valor de crítico que uma arma oferece: ou 31,1% de taxa crítica ou 62,2% de dano crítico. Além disso, o valor máximo de subatributo para taxa crítica é 3,9% e para dano crítico é 7,8%.

Essa circunstância é justamente o motivo pelo qual a proporção 1:2 é a ideal, então preciso considerar esses valores diferentes. Se a GGG algum dia decidir mudar os valores possíveis dos rolls de crit/dano crítico, outra proporção se tornaria a ideal.

Então, preciso redefinir a condição de limite:

![[Pasted image 20260528075856.png]]

onde n_c é a quantidade de rolls de taxa crítica e n_cd a quantidade de rolls de dano crítico que você obtém. A variável c_V é simplesmente o valor de taxa crítica que você recebe por roll.

Minha nova condição de limite agora é que a quantidade de rolls é finita.

Agora, a proporção entre taxa crítica e dano crítico se torna:

![[Pasted image 20260528080258.png]]

Então, em vez de calcular diretamente a proporção, eu posso calcular a proporção dos rolls. Agora, a única coisa que resta é resolver o problema de otimização. A matemática necessária para isso é matemática padrão de ensino médio. Vou fazer em detalhes, mas se você não estiver interessado nisso e só quiser saber por que a proporção 1:2 é a melhor, posso apresentar apenas uma explicação relativamente insuficiente:

## Explicação

Imagine que você tem uma quantidade limitada de rolls para distribuir entre taxa crítica e dano crítico. Se você colocar rolls demais em dano crítico, ele ficará muito alto, mas você quase nunca dará crítico, tornando o investimento em dano crítico irrelevante. Se você colocar rolls demais em taxa crítica, você acertará críticos na maior parte do tempo, mas o aumento de dano será insatisfatório, porque cada 1% de crit que você investiu poderia equivaler a 2% de dano crítico. Investir demais em crit simplesmente não é eficiente.

>[!tip]- Observação
>Isso só é valido em jogos onde a taxa de crítico e dano crítico tem o mesmo peso.. ou seja, são fáceis de conseguir. 
>
>Se a taxa de crítico for mais difícil de conseguir que o dano crítico, o peso pode mudar e ai 1:2 talvez não seja o valor ideal.. Então avalie o qual fácil é obter esses valores e tente chegar em um peso aproximado para cada.

Agora, a forma matemática:

---
Eu começo com a condição de limite:

![[Pasted image 20260528080308.png]]

e incluo isso na função que quero otimizar:

![[Pasted image 20260528080433.png]]

isso reduz a antiga di(n_c , n_cd) (que dependia de duas variáveis: n_c e n_cd) para di(n_c) (dependendo de apenas uma variável). É por isso que eu precisava da condição de limite.

Para encontrar o valor ideal de n_c, preciso encontrar o máximo de di(n_c) (tirar a derivada de di(n_c) e igualá-la a zero):

![[Pasted image 20260528080451.png]]

como chegar nisso: desenvolva os parênteses na fórmula de di, tire a derivada em relação a n_c, iguale a zero e multiplique ambos os lados por 100.

Os únicos passos restantes não são muito complicados:

![[Pasted image 20260528080525.png]]

Portanto, já que

![[Pasted image 20260528080540.png]]

Isso significa que n_cd é igual a n_c:

![[Pasted image 20260528080550.png]]

e, no fim, eu consigo:

![[Pasted image 20260528080604.png]]


Isso prova que a proporção 1:2 entre taxa crítica e dano crítico é realmente a ideal.

---

Sim, é isso. Só é preciso um pouco de matemática para chegar a esse resultado. Se você tiver alguma dúvida sobre a matemática, qualquer outra coisa, ou quiser ver a matemática por trás de outro problema, não hesite em comentar.

Quero destacar que, no final, eu não otimizei exatamente os valores de taxa crítica e dano crítico, mas sim o número de rolls investidos nesses atributos.

Isso é importante porque, no fim das contas, você só consegue aumentar taxa crítica/dano crítico através de fontes limitadas, sendo a mais importante os itens. É evidente que cada roll investido em taxa crítica poderia também ser investido em dano crítico, e vice-versa. Isso significa que é necessário otimizar a quantidade de rolls (para cada roll em crit, um roll em dano crítico, como mostrado acima: n_c = n_cd = N/2) e não os valores de taxa crítica/dano crítico em si.

Agora caso você queira só saber quantos de critico ou dano critico você precisa investir na sua build para aumentar mais o dano, acessa a calculadora de dano critico abaixo:

https://www.brandonfowler.me/critical-analysis/

