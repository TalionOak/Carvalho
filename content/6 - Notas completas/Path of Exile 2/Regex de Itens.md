

Status: #inicio 
Tags: [[Path of Exile 2]]

---
# Regex para mapas e itens
<span style="color:rgb(255, 0, 0)">Esses REGEX só funciona na versão em PORTUGUÊS!</span> Para a versão em Inglês, precisa adaptar os regex.

![](https://www.youtube.com/watch?v=lRehMwGDehQ)

![[poe-divine-poe.gif|101]] 
# Mapas

- Mapas com renascimento.
```
"ren.*: ([1-6])$"
```

- Raridade de Itens
```
"r.*itens: \+(?:[4-9]\d|100|[1-9]\d{2,})%"
```

- Tamanho do Grupo
```
"ta.*: \+(?:[4-9]\d|100|[1-9]\d{2,})%"
```

- Efetividade
```
"efet.*: \+(?:[3-9]\d|100|[1-9]\d{2,})%"
```

- Raridade de Monstros
```
"rar.* mon.*: \+(?:[4-9]\d|100|[1-9]\d{2,})%"
```

- Pedra-Guia +100%
```
"pedra.*: \+1\d{2}%"
```

- Pedra-Guia +130% para garantir mapas com +7 modificador
```
"pedra.*: \+(?:13\d|1[4-9]\d)%"
```
# Tábuas lucro 
Serve para todas as tábuas esses regex abaixo:

- Mapa tem modificador aleatório adicional - Fica caro com efetividade
```
"ma.* mod.* ad"
```

- Azmeri adicional - Fica caro com Caixa-Forte
```
"azm.* ad" "cai.* ad"
```
Apesar de ser bem raro, é legal filtrar essas tábuas..

## ![[Tábua Irradiada.png|38]] Tábuas Irradiadas
Esses Regex somente serve para as irradiadas.

- Efetividade - Quantidade Monstros Raros
```
"efet" "q.* mo.* r"
```

- Efetividade - Raridade Itens
```
"efet" "rar.* it"
```

- Efetividade - Raridade Monstros
```
"efet" "rar.* mon"
```

## ![[Tábua de Ritual.png|36]] Tábuas de Ritual
Esses regex somente serve para as do Ritual.

- Recriar Favores
```
"rec.* fav"
```

- Presságios
```
"press"
```
Verificar preço, se estiver muito barato, usar ![[Orbe do Caos.png|27]] <span style="color:rgb(255, 192, 0)">Orbe do Caos</span> até juntar com outra coisa relacionado ao ritual..

# ![[Tábua de Expedição.png|37]] Tábuas de Expedição
Esses regex somente serve para as da expedição.

Grande maioria dos modificadores da expedição, só fica legal se estiverem com outros modificadores interessantes.

- Caixa-forte da Expedição - Fica caro com Monstros Raros 
```
"exp.* con.* ca"
```
-- Nerfado, não vale mais nada.

- Chance Superior Vestígio adicional -  Fica caro com modificador rúnico adicional
```
"sup.* vest.* adi"
```
Fica MUUUITO caro com Modificador adicional...

- Falta testes, mas fica legal com Chance Superior Vestígio adicional
```
"mod.* rúnic" "e: m"
```

# ![[Tábua de Delírio.png|39]] Tábua de Delírio

- Circulo Adicional - Fica caro com Únicos tem Modificador adicional
```
"cir.* ad" "uni.* ad" 
```

- Espelhos Fractais - Tamanho da Pilha
```
"fract" "pilha"
```

- Espelhos Fractais e Tamanho da Pilha - Mágico para jogar Orbe Régio
```
"fract" "e: m"
```
```
"pilha" "e: m"
```
Precisa ter os 2 modificador junto para valer algo, <span style="color:rgb(255, 0, 0)">não use Orbe da Alquimia nesses!</span>

# ![[Anexos/Path of Exile 2/Itens/Tábua de Fenda.png|40]] Tábuas da Fenda

- Sangue e Dádivas encontrados
```
"sangue" "dadi.* enc"
```

- Sangue e Dádivas encontrados - Mágico para jogar Orbe Régio
```
"sangue" "e: m"
```
```
"dadi.* enc" "e: m"
```
Precisa ter os 2 modificador junto para valer algo, <span style="color:rgb(255, 0, 0)">não use Orbe da Alquimia nesses!</span>
Verifique se os valores estão altos

- Sangue e Dádivas de nível maior - Valores altos são caros..
```
"sangue" "dadi.* sup"
```

- Fendas instáveis geram monstros raros adicional.
	- Fica caro com Efetividade
	- Fica caro com Sangue de Colmeia 
```
"inst.* 2.* rar.*"
```

- Sangue de Colmeia
```
"sangue.* [4-6]\d%"
```

- Dadivas encontradas
```
"dadi.* enc.* [5-6]\d%"
```
# ![[Tábua do Abismo.png|42]]Tábuas do Abismo

- Monstros raros e Modificadores Abissais
```
"3 mon" "mod.* abiss"
```

- Monstros raros
```
"3 mon"
```

- Modificadores Abissais
```
"mod.* abiss"
```

- Moeda profanada e Dobro de Chance de Recompensa
```
"moe.* prof" "dobro"
```

- Dobro de Chance de Recompensa
```
"dobro"
```

- Moeda profanada
```
"moe.* prof" 
```

- Falta tábuas no mercado, ninguém farmando? ou está ruim os drops? Recomendo verificar o preço de cada tábua já que existe poucas no mercado. 

# ![[Tábua do Templo.png|41]] Tábuas do Templo

- Cristal Adicional
```
"cris.* ad"
```

