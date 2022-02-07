# World Traveler: testing a scalable static skeleton concept.

- This is a skeleton framework for scaling up based off the Atomic Design theory.

## Notes (TODO list and Flaws):

- The biggest problem with scalability from here is the lack of dynamic functionality. With a more dynamic system in place there will be a lot of repetitive Code.
- - DRY is not being followed.
- - Need to re-design cards to work with our psudo dynamic system of Javascript using JSON data to inject HTML at a target ID.
- - The styling in patterns/atoms/card--travel/card--travel.scss is overly repetitive as well.
- - A framework or Library system re-factor could improve the dynamic issue and prevent overly verbose/repetitive HTML. React would lend itself well to compnentization in the Atomic style.

- Accesibilty and Semantic HTML are not being fully utilized. Improve the cards there.

- Cards have potential for uneven sizes (heights) compared to those in same row at some screen sizes, especially with unknown amounts of text possible: Part of a solution below.
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
- - One possible solution is to clamp text overflow (may require several media queries based on intent of usage). Should be used in conjunction with adding modal/pop-up function to Cards so remaining text can be seen. Can wait for React re-factor.
- - Cards are also may need links, but need more info on interaction intentions.

## Dev Commands:

(in the spirit of keeping this a light weight skeleton that can used on a wide variety of projects for me no tools other than sass were added to this version)
sass --watch css-core/wt.scss:style.css

http-server -p 8080

### File Tree:

- [assets/](./world-traveler/assets)
  - [data/](./world-traveler/assets/data)
    - [wt_cards\_\_travel.json](./world-traveler/assets/data/wt_cards__travel.json)
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
                    <!-- do stuff here -->
                }            
        }
    </code>
</pre>
