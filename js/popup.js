let app = new Vue({
  el:"#app",
  data: {
    searchText:"",
    display:[]
  },
  methods:{
    searchHistory:function(){
      this.display = [];
      chrome.history.search({text:this.searchText,
      startTime:Date.parse("Sep 2, 2008"), maxResults:10000}, function (results) {
        results.forEach(function (result) {
            this.display.push(result);
        }.bind(this));
      }.bind(this));
    },

    createTab:function(url){
      chrome.tabs.create({url: url, active: false});
    }
  },
});
