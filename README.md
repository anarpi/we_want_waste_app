# Scope

This is an interview exercise where I had to recreate a port of the https://wewantwaste.co.uk page.
I created the select skip part of this page with the given json data.

To test it, type to the terminal `npm i` then `npm start`

# My aproach

Despite the fact that I had to create just a small part, this project can grow really big so the first and most important thing for me was to build on a very good and stable base.
I created using `vite` and added some tools which later would be really good but it is harder to extend an existing project with them. This tools are `i18n` for localization and `eslint` to make sure the code will be maintanable and follows the standards. I also used `sasss` with `scss` files to improve my styling method.
After that I started to create the asked feature and its components and I paid attention on component structure and reusability so I tried to create components in a general way so not to be too specific.
I put components into groups like buttons or cards so in the future I can create an other type of button on that croup without braking or overcomplicating the project structure.
Each component has its own style but also can accept classnames from components where they are used.