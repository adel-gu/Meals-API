const handlePostingComment = async (dat, url)=>{

  fetch(url, {
    method: 'POST',
    body: dat,
    headers: {
      'content-Type': 'application/json; charset-UTF-8'
    }
  });

  await fetch(url).then(Response => Response.json()).then(json=>console.log(json))
}

export default handlePostingComment;