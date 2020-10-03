<h1>StartupGULP</h1>
<p>Environment for developing web projects, based on Gulp</p>

<p>
	<img src="https://raw.githubusercontent.com/agragregra/oh5/master/app/images/src/preview.jpg" alt="Start HTML Template" style="max-width: 100%;">
</p>

<h2>Environmental requirements</h2>
<p>To create an environment, you must have the following tools installed:</p>
<ul>
	<li>node.js</li>
	<li>npm</li>
	<li>gulp</li>
</ul>

<h2>How to use</h2>
<ol>
	<li>Clone or Download <strong>StartupGULP</strong> from GitHub</li>
	<li>Install Node Modules: npm i</li>
	<li>Run: gulp</li>
</ol>


<h2>Main Gulp tasks:</h2>

<ul>
	<li><p><strong><em>gulp</em></strong>- run default gulp task (images, fonts, styles, scripts, browsersync, startwatch)</p>
		<p>images from folder src are optimized moved to the dist folder</p>
		<p>ttf format fonts are automatically converted to woff2 format and placed in dist folder</p>
		<p>styles are concatenated, compressed, optimized and collected in a file main.min.css</p>
		<p>all scripts are also collected in the file</p>
		<p>the browser automatically refreshes the page after making changes</p>
	</li>
</ul>

<ul>
	<li><strong><em>cleanimg</em></strong>: Clean all compressed images</li>
	<li><strong><em>otf2ttf</em></strong>: With this task, you can convert fonts in otf format to ttf format. Fonts should be placed in the src folder. After that, by running gulp, all fonts will be converted to woff2 format and placed in the dist folder</li>
	<li><strong><em>styles, scripts, images, assets</em></strong>: build assets (css, js, images or all)</li>
	<li><strong><em>rsync</em></strong>: project deployment via <strong>RSYNC</strong></li>
	<li><strong><em>build</em></strong>: build a project in a folder <i>dest</i></li>
</ul>

<h2>Focal points:</h2>

<ul>
	<li>In gulpfile you can use a variable you can quickly select a preprocessor convenient for you</li>
	<li>Included in the assembly: bootstrap-reboot, bootstrap-grid, bootstrap breakpoints.</li>
	<li>To use JQuery it is necessary to uncomment the corresponding field in gulpfile, and install the module with the command <i>npm i --save-dev jquery</i></li>
	<li>You can read more about organizing scss code in the corresponding directory in app / scss / README.md</li>
	<li>Rename ht.access to .htaccess before place it in your web server. This file contain rules for htaccess resources caching.</li>
</ul>


