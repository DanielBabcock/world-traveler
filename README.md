# World Traveler: testing a scalable static skeleton concept.

- This is a skeleton framework for projects built with the concept pf tidly scaling and is based off the Atomic Design theory by Brad Frost.
- This Atomic-esque Design structure is not a fit for every project.

## Notes (TODO list, Flaws, Plans):

- FLAW: DRY is not being followed. The biggest problem with scalability from here is the lack of dynamic functionality. WITHOUT a more dynamic system in place there will be a lot of repetitive Code.
- - TODO: (short term improvement for this static version) refactor styling in patterns/atoms/card--travel/card--travel.scss, it is overly repetitive.
- - TODO: Accesibilty and Semantic HTML are not being fully utilized. Improve the cards there.
- - PLANS: Either: Re-design cards to work with our psudo dynamic system of using Javascript/JSON to inject HTML at a target ID for less repitition (for this static version of the system skeleton) ||, A framework or Library system version would further improve the dynamic issue and prevent overly verbose/repetitive patterns. React would lend itself well to componentization in this Atomic style.

- - FLAW: Cards have potential for uneven sizes (heights) compared to those in same row at some screen sizes, especially with unknown amounts of text possible: NEED to determine Product intentions and User Interaction before building further functionality.
- - - One possible solution is to clamp text overflow, example below. AGAIN: should determine Product/User further functionality is added.
    <pre>
        <code>
            .wt-card--travel-body-text {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }        
        </code>
    </pre>

- - TODO: Cards are also may need links, BUT need more info on interaction intentions.

## Dev Commands:

(in the spirit of keeping this a light weight skeleton that can adapted to to a wide variety of projects for me no tools other than sass were added to this version)

<pre> 
  <code>
    sass --watch css-core/wt.scss:style.css
      &&
    http-server -p 8080
  </code>
</pre>

### File Tree:

- TODO: Update links to be relative to readme.md

- [assets/](assets)
  - [data/](assets/data/)
    - [wt_cards\_\_travel.json](assets/data/wt_cards__travel.json)
  - [images/](./world-traveler/assets/images)
- [css-core/](./world-traveler/css-core)
  - [core-variables.scss](./world-traveler/css-core/core-variables.scss)
  - [global-utilities.scss](./world-traveler/css-core/global-utilities.scss)
  - [grid.scss](./world-traveler/css-core/grid.scss)
  - [mixins.scss](./world-traveler/css-core/mixins.scss)
  - [typography.scss](./world-traveler/css-core/typography.scss)
  - [wt-reset.scss](./world-traveler/css-core/wt-reset.scss)
  - [wt.scss](./world-traveler/css-core/wt.scss)
- [js/](./world-traveler/js)
  - [jquery/](./world-traveler/js/jquery)
  - [wt_cards\_\_travel.js](./world-traveler/js/wt_cards__travel.js)
- [node_modules/](./world-traveler/node_modules)
- [patterns/](./world-traveler/patterns)
  - [atoms/](./world-traveler/patterns/atoms)
  - [molecules/](./world-traveler/patterns/molecules)
    - [card--travel/](./molecules/card--travel)
  - [organisms/](./world-traveler/patterns/organisms)
  - [templates/](./world-traveler/patterns/templates)
    - [page-home/](./templates/page-home)
- [.gitattributes](./world-traveler/.gitattributes)
- [.gitignore](./world-traveler/.gitignore)
- [LICENSE](./world-traveler/LICENSE)
- [README.md](./world-traveler/README.md)
- [index.html](./world-traveler/index.html)
- [package-lock.json](./world-traveler/package-lock.json)
- [package.json](./world-traveler/package.json)
- [style.css](./world-traveler/style.css)
- [style.css.map](./world-traveler/style.css.map)

### Useful with IE bugs if needed:

<pre>
    <code>
        @media all and (-ms-high-contrast: none),
            (-ms-high-contrast: active) {
                // IE10+ CSS here // ie bug
                .targeted-class {
                    // do stuff here 
                }            
        }
    </code>
</pre>
