# PokedeX

Ссылки: <br>
:page_with_curl: [PokeAPI](https://pokeapi.co/docs/v2)
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
  `getPokemons(limit = 20)`
  возвращающией объект с пачкой покемоенов и сохраняющий offset из строки с ссылкой на следующий поиск в свойство `offset`
- При повторном вызове метода `getPokemons()` возвращает пачку со смещением на offset
- Описываем все необходимые типы, ипользование `any` не допускается.

#### Задача 2
- Создаём `async` метод `getPokemonData(id: number)` описываем интерфейс response.data на основе API.
- При открытии главной страницы отображаем 20 покемонов с их спрайтами и типом. Во время загрузки спрайта отображаем прелоадер.
- Внизу страницы показываем кнопку "Загрузить ещё", во время обмена данными с сервером API и загрузки спрайтов - кнопка не активна. <br>
:page_with_curl: [useState](https://learn-reactjs.ru/core/hooks/state-hook) <br>
:page_with_curl: [useEffect](https://learn-reactjs.ru/core/hooks/effect-hook) <br>

#### Задача 3
- Подключаем `Redux` `yarn add redux react-redux @reduxjs/toolkit`
- Создаём стор средствами `Redux Toolkit`, создаём слайс pokemons.ts, добавляем метод addPokemon(), сохраняющий покемошку в стор.
- Средствами createAsyncThunk получаем с помощью API покемона по его ID `https://pokeapi.co/api/v2/pokemon/{id}` и сохраняем данные в стор, обрабатываем ошибки, сохраняем данные об ошибке в стор `error: string` <br>
[RTK](https://redux.js.org/tutorials/quick-start) <br>
[createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) <br>
