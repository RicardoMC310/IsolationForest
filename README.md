<h1>Isolation Forest</h1>

![Static Badge](https://img.shields.io/badge/Finalizado-%2523?style=flat-square&color=%2311AA88)

## Objetivo

Aprender como o algoritmo de ML Isolation Forest funciona na prática, como que por meio de cortes aleatórios, ele separa anomalias

## Quais Tecnologias foram utilizadas

- Node.JS
  - Foi optado o node.js para a utilização do Typescript
- Typescript
  - O Typescript foi escolhido, pois diferentenmente do Javascript, ele possui um ótimo controle de tipos e juntamente com o ecossitema Node, se torna uma ferramenta poderosa, ainda mais para a prototipação de um algoritmo de ML
  - Difentemente do python, escolhi por ter uma melhor dominância no Typescript, por ter que controlar mais manualmente certas partes do algoritmo, difente por exemplo se eu usasse uma lib pronta, como o scikit-learn
 
## Como Executar

Após clonar o repositório e estar dentro da pasta do projeto, comece por

```bash
  tsx src/generate.ts
```

assim você gerará um arquivo de treinamento para o algoritmo, são dados limpos de treino

Logo após, basta executar o main.ts com

```bash
  tsx src/main.ts
```

assim você executará o algoritmo

## Saídas

no código do main.ts, há a linha com os dados

```typescript
    const tests = [
        [1.01, 2.02],   // normal
        [1.11, 2.02],   // normal
        [1.01, 2.22],   // normal
        [2.1, 1],       // borderline
        [-1.1, 1],      // estranho
        [-10, 2000]     // absurdo
    ];
```

Estes são os dados a serem testados, o campo que o algoritmo achar de anomalia, aparecerá no terminal

Também haverá a saída do arquivo model.json, este é o modelo treinado exportado com todos os dados das arvores, o arquivo conterá cerca de 2.5MB proximadamente se gerado com a versão que esta configurada, visto que você poderá mudar os valores para uma outra configuração, podendo ter mais árvores, ou mais nós por árvores, aumentando então o tamanho do arquivo models.json

## O que foi aprendido

Após esta construção de algoritmo, fui capaz de aprender a fundo como este e diversos outros algoritmos de ML funcionam na prática, aprendendo as equações que determinam o corte, o throughput e etc
