async function fetchData() {
  let response = await fetch("./data.json");
  let data = await response.json().then(res=> res);
  

  return data;
}
let response = fetchData().then((data) => console.log(Object.entries(data)));




// du mussst 

let commentsArr = dataJson.comments;
console.log(commentsArr)
let cardHtml;
for(let i = 0; i < commentsArr.length; i++) {

  cardHtml = `
  <div id="card" class="card">
      <div class="card__header">
        <img src=${dataJson.comments.user['image']['png']} alt="" class="profile-pic">
        <h3 class="name">${dataJson.comments.user["username"]}</h3>
        <h4 class="time">${dataJson.comments.createdAt}</h4>
      </div>
      <p class="card__body">${dataJson.comments.content}</p>
      <div class="card__footer">
        <div class="footer__vote">
          <button class="upvote">+</button>
          <h5 class="votes">${dataJson.comments.score}</h5>
          <button class="downvote">-</button>
        </div>
        <button><span class="reply-icon"></span>Reply</button>
      </div>
  `;
  document.body.innerHTML = cardHtml;
}
