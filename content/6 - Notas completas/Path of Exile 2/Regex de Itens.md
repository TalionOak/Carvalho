

Status: #inicio 
Tags: [[Path of Exile 2]]

---
# Regex para mapas e itens

# Mapas

- Mapas com renascimento.
```
"ren.*:\s*([1-9])$"
```

- Raridade de Itens
```
"r.*itens: \+[1-8]\d%"
```

- Tamanho do Grupo
```
"ta.*: \+[1-8]\d%"
```

- Efetividade
```
"efet.*: \+[1-8]\d%"
```

- Raridade de Monstros
```
"rar.* mon.*: \+[1-8]\d%"
```

# Tábuas lucro 
Serve para todas as tábuas esses regex abaixo:

- Mapa tem modificador aleatório adicional
```
"ma.* mod.* ad"
```

- Azmeri adicional - Fica caro com Caixa-Forte
```
"azm.* ad" "cai.* ad"
```

## ![[Tábua Irradiada.png|38]] Irradiadas
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
Verificar preço, se estiver muito barato, usar orbe do caos até juntar com outra coisa..

# ![[Tábua de Expedição.png|37]] Tábuas de Expedição
Esses regex somente serve para as da expedição.

Grande maioria dos modificadores, só funciona se estiverem com outros modificadores interessantes, então você vai precisar usar Orbes do Caos neles..

- Caixa-forte adicional - Fica caro com Azmeri
- Caixa-forte da Expedição - Fica caro com Raridade de Monstros
```
"cai.* ad|exp.* con.* ca"
```

- Azmeri adicional - Fica caro com Caixa-Forte
```
"azm.* ad"
```

- Falta testes, mas fica legal com modificador rúnico
```
"ves.* adi"
```

- Falta testes, mas fica legal com vestígio adicional
```
"mod.* rúnic"
```

# ![[Tábua de Delírio.png|39]] Tábua de Delírio

- Circulo Adicional - Fica caro com Únicos tem Modificador adicional
```
"cir.* ad" "uni.* ad" 
```

- Efetividade - Monstros Raros
```
"efet" "q.* mon.* raro"
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
Precisa ter os 2 mod junto para valer algo, não use Orbe da Alquimia nesses!

# ![[Tábua de Fenda.png|40]] Tábuas da Fenda

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

- Sangue e Dádivas de nível maior - Valores altos são caros..
```
"sangue" "dadi.* sup"
```

- Fendas instáveis geram monstros raros adicional.
	- Fica caro com Efetividade
	- Com Sangue de Colmeia 
```
"inst.* 2.* rar.*"
```


# Tábuas do Abismo
- Falta tábuas no mercado, ninguém farmando? ou está ruim os drops?

