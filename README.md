# lemytalk
Идея: Проект для быстрого поиска спикинг-партнера для изучения иностранных языков. Функционал: видео-аудио связь, чат, переводчик.

Деплой - https://lemytalk.com/ (не последняя версия)

Не работает через Safari (ввиду остуствия макбука приложение не адаптировано под браузер)\

Авторизация реализована только через google

Для проверки видеосвязи зайти через 2 разных аккаунта, выбрать одинаковый изучаемый язык, нажать старт. Замечание: алгоритм не соединит 2 аккаунта два раза подряд (так задумано)

Чат и переводчик не реализован

Имеются недоработоки (верстка, использование стейт-менеджера MobX, безопасность авторизации, слабая переиспользованность компонент в React)

Ввиду остутсвия .env файлов приложение не запустится локально. (В env хранятся креденшелы от Google, Twilio)