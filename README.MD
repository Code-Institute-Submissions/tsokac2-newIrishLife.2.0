<h1 align="center">New Irish Life</h1>

Web-based travel guide for providing correct information on how easily start living and working in Ireland.
Finding work, a place to stay where to buy good cheap food in Ireland can be difficult but with the correct preparation,
advice, and planning this task can be made a lot easier.
This website is a great starting point.

![Website Main Mockup](https://github.com/tsokac2/newIrishLife.2.0/blob/main/assets/wireframes/main.png)

## UX

**Story:**
* Four years ago, one Croatian landed in Dublin, Ireland.
On the web, there was a lot of info about life in Ireland, but not essentials information in one place.
Well, not anymore. *

#### User Story

**As a new Irish resident, I want all NECESSARY AND IMPORTANT information for my New Irish Life in one place and available from any device connected to the internet, so I can organize my life in a fun and simple way.**
**With New Irish Life that is extremely possible!**

* Definition by HOME section - inform the user of page usage and purpose.
* Definition by TRIP section - pitch users on quick links for travel options, regarding trip planning, prices, destinations road travel in Ireland, and major possibilities.
* Definition by WORK section - user advice of most popular web "job-hunt" services in Ireland as well as education offers.
* Definition by LIFE section - give and introduction of general "life" information in Ireland regarding accommodation, mobile networks, and grocery shopping.

#### Design process
* #1 Draft all main section of the web-page - HOME, TRIP, WORK, LIFE.
* #2 Brief list all pop-ups/pages - SING IN and LOG IN sub-elements.
* #3 List all colours pallets - usage - background colour, font colour, border.
* #4 List all font styles for best UX.
* #5 Draft web-page layout using Adobe Photoshop for the main layout and Adobe Illustrator for layout components such us Logo, borders, navigation elements.
* #6 List possible Fowtawesome Icon for best UX in picture experiences.
* #7 List Semantic Mark-up to structure HTML code.
* #8 List CSS folder structure for SASS Pre-processor configuration.
* #9 Plan and implement Google Maps API for orientation purposes.
* #10 Plan and implement Emailjs API service for user forms.

### Wireframes

General Design idea and Elements order - [View](https://github.com/tsokac2/newIrishLife.2.0/blob/master/assets/wireframes/w_03.png)

Responsive Layout Planning - [View](https://github.com/tsokac2/newIrishLife.2.0/blob/master/assets/wireframes/w_04.png)

Main Layout for Larger and Small screens - [View](https://github.com/tsokac2/newIrishLife.2.0/blob/master/assets/wireframes/w_02.png)

Google Maps API Implementation - **Trip.html** - [View](https://github.com/tsokac2/newIrishLife.2.0/blob/master/assets/wireframes/w_01.png)


#### Main Layout
* MENU - Right navigation -- Logo -- Right menu option - Search bar - Sing in  - Log in
* MAIN SECTION AREA - Main section content following website features - HOME - TRIP - WORK - LIFE
* FOOTER -  Footer Menu links - Newsletter Subtraction - Social Media links - Copyrights

## FEATURES

#### HOME
Simple introduction of web page purpose and what value it is bringing to an end-user.
Formatted in three main sub-sections:
* Movie reference pitch
* Welcoming "Hero" area with picture composition
* Quick box-model overview of the web page main section

#### TRIP
Section introduction with intro reference and "call-action" headings

Formatted in two main sub-sections:
* Flights booking web services quick links.
* Ireland public transportation most popular options and guidelines.
* Google Maps with a tracker for public transportation "hot" spots in Dublin, Ireland.

#### WORK
Introduction and quick links of the most popular Irish online recruitment sites with an additional section for online education possibilities

Formatted in two main sub-sections:
* START HERE - Most popular job search services for Irish job market.
* UPGRADE - Most popular online courses and full time education institutions.

#### LIFE
Section with life essentials factors after moving to Ireland

Formatted in three main sub-sections:
* Accommodation online search agencies
* Mobile/internet networks providers
* Irish Top food chains for grocery shopping.

#### CROS-PROJECT FEATURES
The Main Menu is placed on to header and footer portion of the webpage.

The menu bar is designed for large and small devices for an easier user experience.

Footer offers a simple user form for newsletter services.

### Features Left to Implement
Expansion plan:
* Implementing website functionality for UX regarding Sign Up and Login forms validation.
* Implementing comments section for the users, regarding specific website content.
* Implement section for all necessary documentation in Ireland, regarding and PPS number, Bank Account option.
* Implement section regarding social events and gathering for necessary user connection expansion.
* Connect to external API for creating user account regarding receiving news and updates - database configuration.
* Offer add for recruitment agencies  - the connection between end-user and possible employer or recruitment agent.

## TECHNOLOGIES USED
**HTML** - Semantic elements - nav, section, footer
**CSS3**
**SASS** - Pre-processor - tools included -
* SASS Compiler -  package.json - `"scripts" {"watch" : "node-sass -o public/css public/scss/index.scss -w" }`
* SASS interpolation
* SASS Mixings - Responsive layout functions
* SASS Variables
* SASS Nesting

**JavaScript** - Programming language

**jQuery** - JavaScript library

**BOOTSTRAP 4.5.3**  - Mani layout control - responsive layout usage - helper classes included - example -  .mt, .pt, .d-none .d-md-block, etc...

* Library provider: https://getbootstrap.com

* LibraryURL: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">`

**GOOGLE CDN's and GOOGLE API**

* Google Fonts - Merienda `<link href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap" rel="stylesheet">`
* Google Fonts - Lato `<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merienda:wght@400;700&display=swap" rel="stylesheet">`
* Google API Google Maps API - `<script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDadfKOCQK6Iu6tBeOXDAvZp5071lP8Us0&callback=initMap"></script>`

Google Maps Api IMPLEMENTATION STEPS:
* STEP#1 -


**EMAILJS**
* Emailjs - Library provider - https://dashboard.emailjs.com -  `<script type="text/javascript"src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>`

Google Maps Api IMPLEMENTATION STEPS:
* STEP#1 -

**JASMINE BEHAVIOR-DRIVEN JavaScript**
* Library provider: https://jasmine.github.io/

**NODE.JS** -  Open-source, cross-platform, back-end, JavaScript runtime environment - href="https://nodejs.org/en/

**NPM** - Package manager - Use package - npm i node-sass - https://www.npmjs.com/

**GIT** - Project deployment

**GITHUB** - Hosting Platform - https://github.com/

**IDE** - Visual Studio Code - https://code.visualstudio.com/ and Atom - https://atom.io/

**ADOBE PHOTOSHOP** - Images preparation - Logo Design

**ADOBE ILLUSTRATOR** - Logo Design

**BALSAMIQ** - Wireframes design tool


## TESTING

Major testing web browsers included in project testing - Goggle Chrome - Mozilla Firefox  - Microsoft Edge
When the website is successfully uploaded to GitHub and the website URL is generated, the testing process can start:

* STEP 1.	Copy website URL to -  **W3C Mark-up Validation Service**
* STEP 2.	Correct all code errors and warnings - a possible source of solutions on **stack overflow** -  https://stackoverflow.com/
* STEP 3.	Check any console error by using Google Chrome or Mozilla Firefox  **Developer Tools** -  shortcut - Ctrl + Shift + I
* STEP 4.	By using Developers Tools chose option **Toggle device toolbar** and test the website on all devices - starting from the smallest device and working to the largest
* STEP 5.	When testing the website on multiple devices and screen sizes is recommended to check viewport rotation on mobile devices since the viewport is different for portrait and landscape orientation.
* STEP 6.	Check website breaking points for smartphones, tablets, and desktop devices
* STEP 7. 	Check paragraph margins, padding, and font sizing on small and larger devices
* STEP 8.	Make sure all external links are opening in a separate browser tab and leading the user to the correct website destination
* STEP 9.	Check Colour contras for foreground and background colours by using **Contrast Checker** - https://contrastchecker.com/
* STEP 10.	Check code organization for future updates


Development and testing overview in order as follow:
* xxs max - MAX width - 240px     - element padding - element margins - centre alignment - fluent font size
* xxs     - MIN width - 240px     - element padding - element margins - centre alignment - fluent font size
* xs      - MIN width - 360px     - element padding - element margins - centre alignment - fluent font size
* sm      - MIN width - 576px     - element padding - element margins - centre alignment - fluent font size
* md      - MIN width - 768px     - element padding - element margins - centre alignment - fluent font size
* lg      - MIN width - 992px     - element padding - element margins - centre alignment - fluent font size
* xl      - MIN width - 1200px    - element padding - element margins - centre alignment - fluent font size

### TESTING TOOLS

**MOZILLA FIREFOX**     -   https://www.mozilla.org/en-US/firefox/new/

**GOOGLE CHROME**       -   https://www.google.com/chrome

**MICROSOFT EDGE**      -   https://www.microsoft.com/en-us/edge

**GITCMD**              -   https://git-scm.com/

**CODE VALIDATION PLATFORMS** - W3C Mark-up Validation Service - https://validator.w3.org/

**CONTRAST CHECKER** - https://contrastchecker.com/


### W3 Validator Error's and Solutions VALIDATOR ERROR's and SOLUTIONS

**ISSUE #1**

Error: Duplicate ID username

`<input type="text" id="username" placeholder="Username or Email">`

SOLUTION: Create unique  ID - `id="username"` for Sign Up form  - `id="username-log"` for Login form

**ISSUE #2**

Error: Bad value public\img\Logo.png for attribute src on element img: Backslash ("\") used as path segment delimiter.

`<img src="assets\img\Logo.png" width="100" alt="New Irish Logo"></a>`

SOLUTION: `<img src="assets/img/Logo.png" width="100" alt="New Irish Logo"></a>` - change "\" to "/"

**ISSUE #3**

The aria-labelledby attribute must point to an element in the same document.

`<div class="modal fade" id="sing-in" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">`

SOLUTION: ` <div class="modal fade" id="sing-in" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="sing-in" aria-hidden="true">`

SOLUTION SOURCE -  [Stackoverflow](https://stackoverflow.com/questions/39831658/how-to-fix-the-aria-labelledby-attribute-must-point-to-an-element-in-the-same-d)

**ISSUE #4**

Error: Duplicate attribute class.

SOLUTION: Remove class duplicates in `<a href="https://www.jetcost.ie/" target="_blank" class="q-links a">FLIGHTS</a>`

**ISSUE #5**
Error: The type attribute is unnecessary for JavaScript resources

SOLUTION: Remove type attribute from`<script  src="assets/js/emailnews.js"></script>`

**ISSUE #6**
Error: No space between attributes

SOLUTION: Add space between `<script>` and `src=""` attribute in `<script  src="assets/js/emailnews.js"></script>`

**ISSUE #7**
Error: Start tag seen without seeing a doctype first. Expected `<!DOCTYPE html>`

SOLUTION: Add doctype before opening `<html>` DOM element

### FireFox and Chrome Developer Tools Console

**ISSUE #1**
Error:  CSS background property - bad path property `background-image: url("../img/rent_fav.png");`
SOLUTION: `background-image: url("../img/rent_fav.png");` - no quotes
SOLUTION SOURCE: [Stackoverflow](https://stackoverflow.com/questions/21374534/css-background-image-not-loading)

**ISSUE #2**
Error:  jQuery .show() and .hide() - not applicable on DOM elements
SOLUTION: Implement jQuery Core 3.5.1 - uncompressed version - [jQuery](https://code.jquery.com/)

**ISSUE #3**
Error:
> Google Maps API - "We have detected a publicly accessible Google API key associated with the following Google Cloud Platform project"
SOLUTION:
1. If this key is intended to be public (or if a publicly accessible key isn’t preventable):
	- Log in to the Google Cloud Console and review the API and billing activity on your account, ensuring the usage is in line with what you expected.
	- Add API key restrictions to your API key, if applicable.
2. If this key was NOT meant to be public:
	- Regenerate the compromised API key: Search for Credentials in the cloud console platform, Edit the leaked key, and use the Regenerate Key button to rotate the key. For more details, review the instructions     on handling compromised GCP credentials.
	- Take immediate steps to ensure that your API key(s) are not embedded in public source code systems, stored in download directories, or unintentionally shared in other ways.
	- Add API key restrictions to your API key, if applicable.
The security of your Google Cloud Platform account(s) is important to us.


### TESTING WITH JASMINE [VIEV](--- LINK --)

## DEPLOYMENT

Project link -  [newIrishLife](https://tsokac2.github.io/newIrishLife.2.0/)

**GIT CMD**  -  https://git-scm.com/

STEPS:
* Create a new repository on GitHub https://github.com
* Download Git CMD app from https://git-scm.com/
* Install and Git CMD app on your local devices
* Navigate to the root folder of the project
* Initialize project root folder with the following command: `git init`
* Log in to GitHub repository with the following command: `git config --global user. name "username"`
* Initiate git add for all or a single file in the root folder: `git add .` //all or `git add "filename"`
* Commit the last incremental change: `git commit -m "Commit comment"`
* Push/upload all commits to master branch: `git push -u git push -u origin main`
* On GitHub select project repository, under "Settings" navigate to "GitHub Pages" and activate the "live" version of the project
* More information about Git version control - https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html


## CREDITS
* Intro pitch - *"The Hobbit: An Unexpected Journey"* - Wiki - https://en.wikipedia.org/wiki/The_Hobbit_(film_series)
* Website images source - [UNSPLASH](https://unsplash.com/s/photos/smartphone
* Website images source - [PIXABAY](https://pixabay.com/photos)
* Bootstrap carousel fade effect - [Source](https://silvawebdesigns.com/how-to-change-the-bootstrap-4-carousel-to-a-fade-transition-instead-of-slide/)
* Resizing Google Maps markers  - [Source](https://stackoverflow.com/questions/15096461/resize-google-maps-marker-icon-image)
* Home page icons - [Flaticon](https://www.flaticon.com/)
