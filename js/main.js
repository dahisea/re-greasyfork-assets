document.addEventListener('click',(event)=>{if(event.target.matches('.mobile-nav-opener')){letnav=document.querySelector('.collapsed');if(!nav.style.display||nav.style.display==='none'){nav.style.display='block';}else{nav.style.display='none';}}if(event.target.matches('.open-sidebar')){letsidebar=document.querySelector('.sidebar');sidebar.style.display='block';}if(event.target.matches('.close-sidebar')){letsidebar=document.querySelector('.sidebar');sidebar.style.display='none';}});document.addEventListener('change',(event)=>{if(event.target.matches('.language-selector-locale')){constselectedOption=event.target.options[event.target.selectedIndex];constlanguageUrl=selectedOption.getAttribute('data-language-url');if(languageUrl){constcurrentPath=window.location.pathname;constqueryParams=window.location.search;constpathSegments=currentPath.split('/');if(pathSegments.length>1){pathSegments[1]=languageUrl.replace('/','');}constnewPath=pathSegments.join('/');constfullUrl=newPath+queryParams;window.location.href=fullUrl;}}});