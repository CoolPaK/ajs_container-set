## AJS_Container-Set



---
## Домашнее задание к лекции «Контейнеры»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## `Set`

### Легенда

Игрок может выбирать персонажей в команду на конкретный раунд исходя из их текущего состояния, уровня и стратегии игры. Нам необходимо не позволять ему добавлять в команду несколько раз одного и того же персонажа.

### Описание

Создайте класс `Team` с методами `add`, `addAll` и `toArray`. Класс должен хранить данные о персонажах команды в поле типа `Set`:
```javascript
class Team {
    constructor() {
        this.members = new Set();
    }
    ...
}
```

Метод `add` должен добавлять выбранного персонажа в команду (объект класса `Character`). При этом такой объект уже существует в команде - дублирования происходить не должно, должна генерироваться ошибка.

Метод `addAll` должен иметь возможность добавлять произвольное количество персонажей (используйте rest-parameters) в команду. При этом повторений быть не должно, ошибка генерироваться **не должна**.

Метод `toArray` должен производить конвертацию `Set` в массив.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.

---