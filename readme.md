<h1>Gulp_BEM</h1>
<p>Среда для разработки веб-проектов на базе Gulp</p>

<p>
	<img src="https://github.com/vlad-pavl/Gulp_BEM/blob/master/app/img/previews.png" alt="Start Template" style="max-width: 100%;">
</p>

<h2>Требования к установке</h2>
<p>Для создания среды у вас должны быть установлены следующие инструменты:</p>
<ul>
	<li>node.js</li>
	<li>npm</li>
	<li>gulp</li>
</ul>

<h2>Как использовать</h2>
<ol>
	<li><a href="https://github.com/vlad-pavl/Gulp_BEM.git">Clone</a> или <a href="https://github.com/vlad-pavl/Gulp_BEM/archive/master.zip">Download</a> <strong>Gulp_BEM</strong> из GitHub</li>
	<li>установить node_modules: npm install</li>
	<li>установить расширение <a href="https://prettier.io/">prettier</a> в редактор кода</li>
	<li>установить расширение <a href="https://stylelint.io/">stylelint</a> в редактор кода</li>
	<li>запустить: gulp</li>
</ol>

<h2>Особенности</h2>
<ul>
	<li>используется БЭМ структура</li>
	<li>используется препроцессор SCSS</li>
	<li>используктся Webpack для сборки JS модулей</li>
	<li>используется транспайлер Babel для преобразования кода в обратно совместимую версию JavaScript</li>
	<li>используется stylelint по код гайду AirBnB, вместе с Prettier</li>
</ul>

<h2>Основные команды</h2>
<ul>
	<li><code>npm run dev</code> или просто <code>gulp</code> для разработки проекта</li>
	<li><code>npm run build</code> для оптимизации и сборки проекта</li>
	<li><code>npm run stylelint</code> для проверки SCSS файлов линтером</li>
	<li><code>npm run stylelint:fix</code> для исправления ошибок в SCSS файлах</li>
	<li><code>npm run bem-m myblock</code> для добавления БЭМ блока, где myblock - имя вашего блока</li>
	<li><code>npm run bem-с mycomponent</code> для добавления БЭМ компонента, где mycomponent - имя вашего компонента</li>
	<li>ознакомиться с полным списком тасков можно с помощью команды <code>gulp --tasks</code></li>
</ul>

<h2>Основные моменты</h2>
<h3>Компонентный подход к веб-разработке</h3>
<p>В его основе лежит принцип разделения интерфейса на независимые блоки</p>
<ul>
	<li>каждый БЭМ-блок имеет свою папку внутри <code>app/blocks/modules</code></li>
	<li>каждая папка одного БЭМ блока может содержать в себе один HTML-файл, один SCSS-файл и один JS-файл</li>
	<li>все HTML-файлы модулей импортируются в необходимые файлы страниц</li>
	<li>все SCSS-файлы модулей импортируются в один файл <code>app/blocks/modules/_modules.scss</code></li>
	<li>все JS-файлы модулей импортируются в <code>app/js/import/modules.js</code></li>
	<li>аналогичным образом происходит работа с компонентами</li>
</ul>
<h3>Шрифты</h3>
<p>Рекомендуется использовать шрифты формата woff-2</p>
<ul>
	<li>шрифты должны помещаться в папку <code>app/fonts/</code></li>
	<li>при запуске gulp шрифты перемещаются в папку <code>dist/fonts</code>, откуда затем должны быть подключены к проекту</li>
	<li>шрифты формата ttf2 автоматически конвертируются в woff2 и так-же перемещаются в папку <code>dist/fonts/</code></li>
	<li>все шрифты подключаются в файл <code>app/styles/base/_fonts.scss</code></li>
</ul>
<h3>Сторонние библиотеки</h3>
<ul>
	<li>сторонние библиотеки устанавливаются в <code>node_modules</code> с помощью npm</li>
	<li>для подключения JS-файлов библиотек, импортируйте их в самом начале файла БЭМ блока, который использует этот скрипт</li>
</ul>
<p>Bootstrap</p>
<ul>
	<li><a href="https://bootstrap-4.ru/docs/4.0/content/reboot/">bootstrap-reboot.scss</a> - коллекция специфических изменений элементов CSS в едином файле, обеспечиваещая Bootstrap элегантную, простую и последовательную основу для быстрого начала работы</li>
	<li><a href="https://bootstrap-4.ru/docs/4.0/layout/overview/">_breakpoints.scss</a> - Bootstrap Breakpoints mixin</li>
	<li><a href="https://bootstrap-4.ru/docs/4.0/layout/grid/">bootstrap-grid.scss</a> - сетка Bootstrap</li>
	<li><a href="https://bootstrap-4.ru/docs/4.0/utilities/sizing/">_sizing.scss</a> - легкое создание элемента таким же широким или высоким (относительно его родителя) с помощью утилит ширины и высоты</li>
</ul>
<p>Для их подключения нужно перейти в директорию <code>app/styles/vendors/_bootstrap.scss</code> и раскомментировать неодходимое.</p>
<ul>
	<li>для других стилевых библиотек можно создать файл <code>app/styles/vendors/_libs.scss</code></li>
</ul>

