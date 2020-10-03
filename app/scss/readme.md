<h1>The 7-1 Pattern</h1>
<p>You have all your partials stuffed into 7 different folders, and a single file at the root level (usually named main.scss) which imports them all to be compiled into a CSS stylesheet.<p>
<ul>
   <li>base/</li>
   <li>components/</li>
   <li>layout/</li>
   <li>pages/</li>
   <li>themes/</li>
   <li>utils/</li>
   <li>vendors/</li>
</ul>
<p>And of course:</p>
<ul>
   <li>main.scss</li>
</ul>

<h2>the structure looks something like this</h2>

<pre>
scss/
|
|– base/
|   |– _base.scss       # Some standard styles for commonly used HTML elements
|   |– _typography.scss # Typography rules
|   |- _fonts.scss      # All fonts are connected here
|   ...                 # Ect…
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
|– utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   |- _normalize.scss   # Normalize/reset
|   ...                  # Etc…
|
|
`– main.scss             # Main Sass file
</pre>

<p>let's take a closer look at the purpose of each folder.</p>

<h2>Base</h2>
<p>The <em>base/</em> folder holds what we might call the boilerplate code for the project. In there, you might find some typographic rules, and probably a stylesheet (that I’m used to calling _base.scss), defining some standard styles for commonly used HTML elements.</p>

<h2>Components</h2>
<p>For small components, there is the <em>components/</em> folder. While <em>layout/</em> is macro (defining the global wireframe), <em>components/</em> is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in <em>components/</em> since the whole site/application should be mostly composed of tiny modules.</p>

<h2>Layout</h2>
<p>The <em>layout/</em> folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.</p>

<h2>Pages</h2>
<p>If you have page-specific styles, it is better to put them in a <em>pages/</em> folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a _home.scss file in <em>pages/</em>.</p>

<h2>Themes</h2>
<p>On large sites and applications, it is not unusual to have different themes. There are certainly different ways of dealing with themes but I personally like having them all in a <em>themes/</em> folder.</p>
<p><i>Note — This is very project-specific and is likely to be non-existent on many projects.</i></p>

<h2>Utils</h2>
<p>The <em>utils/</em> folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.</p>
<p>The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.</p>

<h2>Vendors</h2>
<p>Most projects will have a <em>vendors/</em> folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.</p>
<p>If you have to override a section of any vendor, I recommend you have an 8th folder called <em>vendors-extensions/</em> in which you may have files named exactly after the vendors they overwrite. For instance, <em>vendors-extensions/_bootstrap.scss</em> is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.</p>

<h2>Main file</h2>
<p>The main file (usually labelled <em>main.scss</em>) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but <i>@import</i> and comments.</p>

