const thebody = document.getElementById('body');
const populateComment = () => {
  const holder = `<div class="popup" id="popup">
      <div class="upperpopup">
        <figure class="upperpopup_figure">
          <img src="https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg" id="legendimage" class="image_u" width="250" alt="food">
        </figure>
        <a href="javascript:void()" class="close_container" id="close" onclick="handleClick()"><i class="lni lni-close close"></i></a>
      </div>
      <div class="middlepopup">
        <div class="middlepop_simple_titles">
          <h3 class="detail">Name: <p class="detail_p">Apple Frangipan Tart</p></h3>
          <h3 class="detail">Category: <p class="detail_p">Dessert</p></h3>
          <h3 class="detail">Origin: <p class="detail_p">British</p></h3>
        </div>
        <article class="middlepopup_middle_detail">
          <h3 class="detail2">Instruction</h3>
          <p class="detail_p">Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.</p>
        </article>
      </div>
      <article class="popup_comment_section">
        <h3 class="detail detail3">Comments <span>(2)</span></h3>
        <div class="date_comment"><b class="detail_p">03/11/2021</b><p class="detail_p">Alex: I'd love to buy it</p></div>
        <div class="date_comment"><b class="detail_p">03/12/2021</b><p class="detail_p"></p>I love</div>
      </article>
      <form action="" class="popup_form" onsubmit="handleSubmit()"  id="form">
        <h3 class="detail detail4">Add a Comment</h3>
        <input type="text" name="username" class="detail_p" value="" id="username" minlength="5" placeholder="Your name" required>
        <input type="text" class="detail_p" id="insight" value=""  placeholder="Your Insight" required>
        <button type="submit" id="comment" class="button1">Comment</button>
      </form>
    </div>`;
  thebody.innerHTML = holder;
};

export default populateComment;