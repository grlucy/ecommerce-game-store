# Ecommerce Game Store

Deployed at https://dragons-den-store.herokuapp.com/

## Description

A website for a local game store that enables online transactions and curbside pickup scheduling. The Braintree payment system accepts credit card and PayPal payments. Along with a home page and contact page, the site includes:

- a store with products that can be searched, sorted, and filtered
- a cart that stores user-selected products until they are ready to make a transaction
- signup and signin pages with secure user authentication
- a customer dashboard with order history
- an admin dashboard with a built-in inventory management system

## User Story

**_AS A_** tabletop gaming enthusiast who is practicing social distancing<br />
**_I WANT_** to buy games online and schedule a curbside pickup<br />
**_SO THAT_** I can have fun while quarantined without putting my health at risk

## Technologies

|   Front End   |                Back End                |      Testing      | Deployment |    Storage     |
| :-----------: | :------------------------------------: | :---------------: | :--------: | :------------: |
|     React     |               JavaScript               |      Postman      |    Git     | AWS S3 Buckets |
|     Axios     |                MongoDB                 |      Robo 3T      |   Heroku   |                |
| React Router  |                Mongoose                | Braintree Sandbox |    mLab    |                |
|      CSS      |                Express                 |  PayPal Sandbox   |            |                |
|     Bulma     |                Node.js                 |                   |            |                |
|     HTML      |     Password hashing: crypto, uuid     |                   |            |                |
| Formspree API |           Express-validator            |                   |            |                |
|               | User tokens: express-jwt, jsonwebtoken |                   |            |                |
|               |             Cookie-parser              |                   |            |                |
|               |                 Dotenv                 |                   |            |                |

|     Project Management     | Wireframing & Graphics |
| :------------------------: | :--------------------: |
| GitHub (Issues & Projects) |        Adobe XD        |
|           Slack            |   Adobe Illustrator    |
|        Google Drive        |    Adobe Photoshop     |
|            Zoom            |                        |

## Future Development Options

- Events calendar with online classes and tournaments available for purchase
- Video storage for purchased online classes and tournaments
- Push notification reminders for curbside pickup scheduling and events
- Shipping option in addition to curbside pickup
- Blog page

## Testing

Users can test ecommerce transactions on the site using [Braintree Sandbox's test credit cards for Node.js](https://developers.braintreepayments.com/guides/credit-cards/testing-go-live/node) or by using a PayPal sandbox account.

## Credits

Stock images:

- 'dice.jpg' by [Ian Gonzalez on Unsplash](https://unsplash.com/photos/oVXMtsMejqo)
- 'chess1.jpg' by [sk on Unsplash](https://unsplash.com/photos/CNBRg1K9QvQ)
- 'chess2.jpg' by [Charlie Solorzano on Unsplash](https://unsplash.com/photos/aeXK1IeVVoI)
- 'puzzle.jpg' by [Joshua Hoehne on Unsplash](https://unsplash.com/photos/jAomkJlKwPI)
- 'cards.jpg' by [Amanda Jones on Unsplash](https://unsplash.com/photos/P787-xixGio)
- 'dragon.jpg' by [Clint Bustrillos on Unsplash](https://unsplash.com/photos/X-A-LJVAhzk)
- 'mahjong.jpg' by [Ellicia on Unsplash](https://unsplash.com/photos/rMm0dChKUaI)
- 'tarot.jpg' from [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck)
- 'puppypuzzle.jpg' photo by [Jairo Alzate on Unsplash](https://unsplash.com/photos/sssxyuZape8)
- 'flowerpuzzle.jpg' photo by [Yoksel Zok on Unsplash](https://unsplash.com/photos/QathkdBonnY)
- 'skylinepuzzle.jpg' photo by [Luca Bravo on Unsplash](https://unsplash.com/photos/_QdFx92MO2U)
- 'checkers.jpg' by [Trent Jackson on Unsplash](https://unsplash.com/photos/KeLlkIwg038)

Tutorials:

- "MERN Stack React Node Ecommerce" by [Ryan Dhungel on Udemy](https://www.udemy.com/course/react-node-ecommerce/)

## License

© 2020 Gina Lucy & Ben Ferriman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
