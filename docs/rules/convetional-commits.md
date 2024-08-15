# Convetional Commits:

_Obs_: todas as mensagens devem ser em inglês.

- `feat`: Indica a introdução de um novo recurso.

  - Exemplo:

  - Funcionalidade de cancelar pedido. 3 arquivos
  - Funcionalidade de cardápio.

  feat: adiciona funcionalidade de cancelar pedido
  feat: adiciona funcionalidade de cardápio

================================================================================

- `fix`: Refere-se a uma correção de um bug.

  - Exemplo:

  - Toda vez que o usuário manda oi, o bot repete a mesma coisa.
  - Toda vez que o usuário cancela o pedido, o bot não apaga o registro do pedido

  fix: ajusta lógica que estava repetindo mensagens quando o usuário mandava oi
  fix: ajusta lógica que estava impedindo o robo de apagar o registro do pedido do usuário ao cancelar

================================================================================

- `refactor`: Refatoração do código que não corrige bugs nem adiciona recursos.

  - Exemplo:

  - Tem uma função que confere se tem um ou mais itens no pedido do usuário. Número de items de pedidos. ['X-burger', 'Pizza', 'Coca-cola']. 3 items.

    ```js
    //Antes
    const consultarItems = (array) => {
      const x = array.map((y) => {
        if (y && y.item) {
          const a = y.item.some((b) => b > 10);
          const b = y.item.filter((c) => c < 5);
          return a && b.length > 0;
        } else {
          return false;
        }
      });
      const z = x.reduce((acc, val) => acc + (val ? 1 : 0), 0);
      return z > 0 ? "Tem itens" : "Não tem itens";
    };

    // Depois
    const consultarItems = (array) => {
      const items = array.length;

      return items;
    };
    ```

    refactor: realiza uma otimização e uma redução de linhas na função de consultar os items do pedido do usuário.

================================================================================

- `chore`: Outras mudanças que não se enquadram nas categorias acima, geralmente tarefas administrativas.

  - Exemplo:

  - Troquei a mensagem de saudação aplicando o complemento de 'Bom dia', 'Boa tarde' e 'Boa noite'

    chore: troca a mensagem de saudação implementando complemento de horário

================================================================================

- `style`: Modificações que não afetam o código, como formatação e estilo.

  - Exemplo:

  - Mudei a cor do botão para laranja

  style: troca a cor do botão para laranja

================================================================================

- `revert`: Reversão de um commit anterior.

- Exemplo:

- Mudei a cor do botão novamente para azul

style: recolando a cor do botão para azul
