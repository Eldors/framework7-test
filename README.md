## После клонирования проекта
Установите зависимости
```
npm install
```
Запустите сервер
```
npm run start
```

## Для воспроизведение проблемы

- Перейдите на главную страницу приложения
- Используйте поиск с помощью Searchbar
- Повторите это действие еще раз, чтобы открыть еще одну страницу /search/ но с другими query параметрами
- Перейдите на предыдущую страницу
- Примените фильтр на странице SearchPage
- Перейдите на страницу вперед
- Вернитесь на предыдущую страницу чтобы вопсроизвести ошибку

## Ожидаемое поведение

При переходе назад состояние query параметров подгрузится из истории браузера

## Текущее поведение

При переходе назад framework7 не может найти route для $previusPage из-за чего приложение падает и требуется перезагрузка

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)
* [Framework7 Vue Documentation](https://framework7.io/vue/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on:
- Patreon: https://patreon.com/framework7
- OpenCollective: https://opencollective.com/framework7
