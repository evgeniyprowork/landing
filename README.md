## Перед стартом проекта необходимо:

* Убедиться что уставновленный node.js и npm. Для этого достаточно написать в терминале
> node -v

Если вы видите версию, например, v6.9.2 тогда все ок

> npm -v

Если вы видите версию, например, 4.3.0 тогда все ок

* Убедиться что установлен gulp 4 версии, так как если будет меньше - работать не будет. 
Если он не установлен - тогда ставим:

> npm install gulpjs/gulp-cli#4.0 -g

## Инструкция для старта проекта:
* Склонировать данный репозиторий
> git clone https://github.com/sergeyamator/itvdn-landing.git 

* Запустить команду npm install в терминале. Данная команда установит все пакеты, которые указанны в файле 
packege.json, а также все их зависимости


## Hot command
1. Git
- git status
- git add (git add .)
- git commit -m "some comment"
- git push (git push origin lesson-1)
- git branch => проверка на какой ветке, (git branch lesson-1 => создаст новую ветку lesson-1)
- git checkout (git checkout lesson-1 => переключится на ветку lesson-1)
- git merge

2. Gulp
- Попрактиковаться с установкой галпа и его пакетов
- autoprefixer и sourcemaps Разобраться что это и установить в проект
