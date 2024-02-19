function bookmarkletLaunch(){
  bookmarklet = document.getElementById('bookmarklet');
  var imagesFound = bookmarklet.querySelector('.images');
  imagesFound.innerHTML = '';
  bookmarklet.style.display = 'block';

  bookmarklet.querySelector('#close').addEventListener('click', function(){
    bookmarklet.style.display = 'none'
  });
  
}
// bookmarklet not complete

bookmarkletLaunch()