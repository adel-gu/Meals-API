const counter = (h35, ansd) => {
  const sp = ansd.length ? ansd.length : 0;
  const span1 = document.createElement('span');
  span1.setAttribute('id', 'spanh');
  span1.innerText = `Comments (${sp})`;
  h35.appendChild(span1);
};

export default counter;