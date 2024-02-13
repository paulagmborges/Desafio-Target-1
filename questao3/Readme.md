## Questão 3 - Descrição:

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês
Resp: 0
• O maior valor de faturamento ocorrido em um dia do mês
Resp: 48924.2448
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
Resp: 12
IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

## Instruções:
## Rotas

### `GET` `/faturamento/menor-faturamento `

- O menor valor de faturamento ocorrido em um dia do mês. Exemplo:

```json
{
	"menorFaturamento": 0
}
```

### `GET` `/faturamento/maior-faturamento `

- O maior valor de faturamento ocorrido em um dia do mês. Exemplo:

```json
{
	"maiorFaturamento": 48924.2448
}
```

### `GET` `/faturamento/ `

- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.Exemplo:

```json
{
	"diasAcimaMedia": 12
}

## Como usar:

### Opção 1: local host

1. Clone o repositório :
```command
git clone git@github.com:paulagmborges/Desafio-Target-1.git

2. Instale as dependências no diretório clonado
```command
npm install
```
3. Execute no terminal 
```command
 node .\src\index.js

```
4.Acesse os endpoints conforme descrito:
http://localhost:3000/faturamento/maior-faturamento
http://localhost:3000/faturamento/maior-faturamento
http://localhost:3000/faturamento/dias-acima-media