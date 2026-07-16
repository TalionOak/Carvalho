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


