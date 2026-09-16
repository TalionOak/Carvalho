Status: #inicio 
Tags: [[Path of Exile 2]]

---
# Regex para mapas e itens

# Mapas
```
"ren.*:\s*([1-9])$"
```
Mapas com renascimento.

```
"r.*itens: \+[1-8]\d%"
```
- Raridade de Itens

```
"ta.*: \+[2-8]\d%"
```
- Tamanho do Grupo

```
"!res.*-li.*af"
```
- Monstros têm a resistência-limite a afecções aumentada.

# Tábuas

```
"p.*guia.* 39%"
```
- Pedras-guias

```
"mod.* ale.*"
```
- Mapa tem modificador adicional

```
"p.* recriar"
```
- Altares Ritualísticos no mapa permitem recriar favores mais vezes


Orbe exaltado preço 
"\b([1-9]|[1-3][0-9]|4[0-5])\b exa"


# Tábuas lucro 

## ![[Tábua Irradiada.png|38]] Irradiadas

- Mapa tem modificador aleatório adicional
```
"mod.* alea"
```

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

