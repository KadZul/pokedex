# PokedeX

Ссылки: <br>
:page_with_curl: [GIT](https://marklodato.github.io/visual-git-guide/index-ru.html) <br>
:page_with_curl: [RegExp](https://learn.javascript.ru/regular-expressions) <br>
:page_with_curl: [axios](https://www.digitalocean.com/community/tutorials/react-axios-react-ru) <br>
:page_with_curl: [REST API](https://habr.com/ru/post/351890/) <br>


### Этап 1
#### Задача 0
- Клонируем репозиторий `git@github.com:Krakazybik/pokedex.git`
- Внимание! <b>В проекте используется `yarn`</b> Устанавливаем все зависимости. `yarn` или `yarn install`
- Настраиваем `ESLint` на автоматическое исправление с использованием конфига `.eslintrc.json`
- Каждое этап выполняется в отдельной ветке с префиксом `feature-`. Пример: `feature-pokeapi`. Для переключения на другую ветку используем `git checkout -b feature-pokeapi`.

#### Задача 1
- Создаём файл /src/api/pokeapi.ts в котором описываем класс PokeAPI.
- Работу с `REST API` осуществляем с помощью библиотеки `axios`.
- Созадём `async` метод
  `getPokemonWithLimit(limit = 20)`
  возвращающией объект с пачкой покемоенов и сохраняющий offset из строки с ссылкой на следующий поиск в свойство `offset`
- При повторном вызове метода `getPokemonWithLimit()` возвращает пачку со смещением на offset
- Описываем все необходимые типы, ипользование `any` не допускается.
