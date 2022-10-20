const thebody = document.getElementById('body');
const df = 52768;
const filledcomments = [];
const loadData = async () => {
  const fetcs = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N317ounBUtSwOefLVAgO/comments?item_id=52768');
  const dataz = fetcs.json();
  dataz.then((json) => {
    json.forEach((adn) => {
      filledcomments.push(adn);
    });
  });
};
loadData();
const populateComment = (shs) => {
  const popup = document.createElement('div');
  popup.setAttribute('class', 'popup');
  popup.setAttribute('id', 'popup');

  const upperpopup = document.createElement('div');
  upperpopup.setAttribute('class', 'upperpopup');

  const upperpopupFigure = document.createElement('figure');
  upperpopupFigure.setAttribute('class', 'upperpopup_figure');

  const image = document.createElement('img');
  image.setAttribute('src', 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg');
  image.setAttribute('id', 'legendimage');
  image.setAttribute('class', 'image_u');
  image.setAttribute('alt', 'image');
  image.setAttribute('width', '250');

  upperpopupFigure.appendChild(image);

  const closeicon = document.createElement('a');
  closeicon.setAttribute('href', '#');
  closeicon.setAttribute('class', 'close_container');
  closeicon.setAttribute('id', 'close');

  const closesvg = document.createElement('i');
  closesvg.setAttribute('class', 'lni lni-close close');

  closeicon.appendChild(closesvg);

  upperpopup.appendChild(upperpopupFigure);
  upperpopup.appendChild(closeicon);

  const middlepopup = document.createElement('div');
  middlepopup.setAttribute('class', 'middlepopup');

  const middlepopSimpleTitles = document.createElement('div');
  middlepopSimpleTitles.setAttribute('class', 'middlepop_simple_titles');

  const h31 = document.createElement('h3');
  h31.setAttribute('class', 'detail');
  h31.innerText = 'Name: ';

  const p1 = document.createElement('p');
  p1.setAttribute('class', 'detail_p');
  p1.innerText = 'Apple Frangipan Tart';
  h31.appendChild(p1);

  const h32 = document.createElement('h3');
  h32.setAttribute('class', 'detail');
  h32.innerText = 'Category: ';

  const p2 = document.createElement('p');
  p2.setAttribute('class', 'detail_p');
  p2.innerText = 'Dessert';
  h32.appendChild(p2);

  const h33 = document.createElement('h3');
  h33.setAttribute('class', 'detail');
  h33.innerText = 'Origin: ';

  const p3 = document.createElement('p');
  p3.setAttribute('class', 'detail_p');
  p3.innerText = 'British';
  h33.appendChild(p3);

  middlepopSimpleTitles.appendChild(h31);
  middlepopSimpleTitles.appendChild(h32);
  middlepopSimpleTitles.appendChild(h33);

  const middlepopupMiddleDetail = document.createElement('article');
  const h34 = document.createElement('h3');
  h34.setAttribute('class', 'detail2');
  h34.innerText = 'Instruction';

  const p4 = document.createElement('p');
  p4.setAttribute('class', 'detail_p');
  p4.innerText = 'Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.';

  middlepopupMiddleDetail.appendChild(h34);
  middlepopupMiddleDetail.appendChild(p4);
  middlepopup.appendChild(middlepopSimpleTitles);
  middlepopup.appendChild(middlepopupMiddleDetail);

  const popupCommentSection = document.createElement('article');
  const h35 = document.createElement('h3');
  h35.setAttribute('class', 'detail detail3');
  h35.innerText = 'Comments';
  const span1 = document.createElement('span');
  span1.innerText = '(2)';
  h35.appendChild(span1);
  popupCommentSection.appendChild(h35);
  filledcomments.map((datd) => {
    const dateComment1 = document.createElement('div');
    dateComment1.setAttribute('class', 'date_comment');
    const b1 = document.createElement('b');
    b1.setAttribute('class', 'detail_p');
    b1.innerText = `${datd.creation_date}`;
    const p5 = document.createElement('p');
    p5.setAttribute('class', 'detail_p');
    p5.innerText = `${datd.username}: ${datd.comment}`;
    dateComment1.appendChild(b1);
    dateComment1.appendChild(p5);
    popupCommentSection.appendChild(dateComment1);

    return null;
  });

  const popupForm = document.createElement('form');
  popupForm.setAttribute('class', 'popup_form');
  popupForm.setAttribute('id', 'form');
  const h36 = document.createElement('h3');
  h36.setAttribute('class', 'detail detail4');
  h36.innerText = 'Add a Comment';
  const username = document.createElement('input');
  username.setAttribute('name', 'username');
  username.setAttribute('class', 'detail_p');
  username.setAttribute('id', 'username');
  username.setAttribute('minlength', '5');
  username.setAttribute('placeholder', 'Your name');
  username.setAttribute('required', true);
  username.setAttribute('type', 'text');
  const insight = document.createElement('input');
  insight.setAttribute('name', 'insight');
  insight.setAttribute('class', 'detail_p');
  insight.setAttribute('value', ' ');
  insight.setAttribute('id', 'insight');
  insight.setAttribute('minlength', '1');
  insight.setAttribute('placeholder', 'Your name');
  insight.setAttribute('required', true);
  insight.setAttribute('type', 'text');
  const formbutton = document.createElement('button');
  formbutton.setAttribute('type', 'submit');
  formbutton.setAttribute('class', 'button1');
  formbutton.setAttribute('id', 'comment');
  formbutton.innerText = 'Comment';

  popupForm.appendChild(h36);
  popupForm.appendChild(username);
  popupForm.appendChild(insight);
  popupForm.appendChild(formbutton);

  popup.appendChild(upperpopup);
  popup.appendChild(middlepopup);
  popup.appendChild(popupCommentSection);
  popup.appendChild(popupForm);

  thebody.appendChild(popup);

  closeicon.addEventListener('click', () => {
    const thepopup = document.getElementById('popup');
    thepopup.classList.remove('popup2');
  });

  const formsd = document.getElementById('form');
  formsd.addEventListener('submit', async (event) => {
    event.preventDefault();

    const thefetch = await fetch(shs, {
      method: 'POST',
      body: JSON.stringify({
        item_id: df,
        username: formsd.username.value,
        comment: formsd.insight.value,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const mystatus = thefetch.status;
    if (mystatus === 201) {
      document.getElementById('form').reset();
      loadData();
    }
  });
};

export default populateComment;