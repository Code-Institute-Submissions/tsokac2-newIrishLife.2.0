## JASMINE - https://jasmine.github.io/

Jasmine is a behavior-driven development framework for testing JavaScript code

## Testing DOM Events Using jQuery and Jasmine 2.0

### IMPLEMENTATION
1.STEP: Create **sepc** folder in project root **assets folder - **assets/spec**

2.STEP: Create **cardspec.js** file in to **assets/spec** folder

3.STEP: Create **indexspec.html** file in **assets** folder

4.STEP: In **indexjasmine.html** create basic **<!DOCTYPE html>** structure with **`<html>`**, **`<head>`** opening and closing tags

5.STEP: In the **`<head>`** element place **CDN** links in the following order - **CDN SOURCE:** https://cdnjs.com/libraries/jasmine :
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine.js"></script>`
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine-html.js" ></script>`
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/boot.js"></script>`
  * `<script src="https://code.jquery.com/jquery-3.5.1.js"></script>`
  * `<script src="spec/jasmine-jquery.js"></script>` SOURCE: https://bowercdn.net/c/jasmine-jquery-2.1.1/lib/jasmine-jquery.js
  * ` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine.css"/>` **SOURCE:** https://code.jquery.com/

6.STEP: Import custom scripts for Jasmine testing under imported **CDN's** in the following order:
  * `<script src="js/cards.js"></script>`
  * `<script src="spec/cardsspec.js"></script>`

### Testing that **DOM** Event was fire

#### Code example from **`<script src="spec/cardsspec.js"></script>`**

```
describe("Testing DOM Elements - Triggering .on('click') Event in trip.html, work.html and life.html", function(){

    it("Should invoke the jQuery click event when elements #showLinks1 and #hideLinks1 are clicked", function(){
        setFixtures('<button id="showLinks1" class="load-links-btn">Quick Links...<i class="fas fa-sort-down"></i></button>');
        $('#showLinks1').on('click', function (){
            var thisCardLinkShow = "." + this.id + "-grid";
                $(thisCardLinkShow).show(300);
                $(".blur").fadeIn(400);
                $(thisCardLinkShow).addClass("rel-card");
                $("#Card1").addClass("wrap-rel");
        });

        var spyEventShow = spyOnEvent('#showLinks1', 'click');
        $('#showLinks1').trigger('click');
        expect(spyEventShow).toHaveBeenTriggered();
    });
});

```

#### Test STEPS

* `setFixtures('<button id="showLinks1"</button>');`        - mimicking `<button>` element on line 265 in trip.html
* `$('#showLinks1').on('click', function (){...}`           - referencing jQuery DOM events applied to `<button>` element
* `var spyEventShow = spyOnEvent('#showLinks1', 'click');`  - creating variable var `var spyEventShow;`for invoking `spyOnEvent` on to `<button>` element
* `$('#showLinks1').trigger('click');`                      - triggering DOM event
* `expect(spyEventShow).toHaveBeenTriggered();`             - including `spyEventShow` variable in to `.toHaveBeenTriggered()` test instance

Test was replicated for all 12 `<button>` elements with unique ID's attributes starting from `id="showLinks1"`and `id="hideLinks1"` element `<button>`

**Live Version of the Jasmine Test** - [Jasmine Test](https://tsokac2.github.io/newIrishLife.2.0/assets/indexjasmine.html)
