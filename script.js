let lang = {
  ar: {
    subscibe :"لا تنسى الاشتراك"
  },
  en :{
    subscibe: "dont forget "
  }
  let selector = document.getElementById('language-selector');
  selector.onchange = updateLanguage();
  function updateLanguage()
  letlanguage = selector.option[selector.selectindex].value;
  let nodes=document.querySelectorAll('[data.lang]');
  let i = nodes.length;
  while(i--) {
    let key = nodes[i].getAttribute('data.lang')
    nodea[i].innerHTML = lang[language] [key];
    //lang['ar']['subscibe'] -> ""
  }
  {
    
  }
