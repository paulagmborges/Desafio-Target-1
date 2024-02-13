## Questão 3 - Descrição:

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês.<br>
Resp: 0<br>
• O maior valor de faturamento ocorrido em um dia do mês.<br>
Resp: 48924.2448<br>
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.<br>
Resp: 12<br>
IMPORTANTE:<br>
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal.<br>
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.<br>

## Instruções:
### Rotas

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
```
## Como executar:
1. Clone o repositório :
```command
git clone git@github.com:paulagmborges/Desafio-Target-1.git
```

2. Instale as dependências no diretório clonado
```command
npm install
```

3. Execute no terminal 
```command
 node .\src\index.js

```
4.Acesse os endpoints conforme descrito:<br>
http://localhost:3000/faturamento/maior-faturamento<br><br>
http://localhost:3000/faturamento/maior-faturamento<br><br>
http://localhost:3000/faturamento/dias-acima-media<br><br>
