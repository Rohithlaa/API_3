const cat_btn = document.getElementById('cat_btn')
const cat_res = document.getElementById('cat_res')

cat_btn.addEventListener('click', getRandomCat)

function getRandomCat() {
  fetch("https://thatcopy.pw/catapi/rest/").
  then(res => res.json()).
  then(data => {
    cat_res.innerHTML= `<img src=${data.url} alt="Image Not Found" />`
  })
}