

export default class General {


  // Handle page scroll
  static  NoScroll (scroll){
    let body = document.body;
    if(scroll){
      // Prevent scroll
      body.style.overflow = 'hidden';
    }
    else{
      body.style.overflow = 'auto';
    }
  }
}