//Fire Application
view = TodoDodayCollectionView ||{}
col  = TodoDodayCollection ||{}
$( document ).ready(function() {
 new view({model: new col , el:$("body")})
});

