var require_kdb=[{ filename:"apptest.kdb"  , url:"http://rawgit.com/ahsyuyu/apptest/master/apptest.kdb" , desc:""}];  
var Fileinstaller=Require("fileinstaller");
var kde=Require("ksana-document").kde;
var kse=Require("ksana-document").kse;
var bootstrap=Require("bootstrap");
var main = React.createClass({
  getInitialState:function(){
    return {};
  },
  onReady:function(usage,quota) {
    if (!this.state.db) kde.open("apptest",function(db){
        this.setState({db:db});  
    },this);      
    this.setState({quota:quota,usage:usage});
  },
  openFileinstaller:function(autoclose) {
    if (window.location.origin.indexOf("http://127.0.0.1")==0) {
      require_kdb[0].url=window.location.origin+window.location.pathname+"apptest.kdb";
    }
    return <Fileinstaller quota="512M" autoclose={autoclose} needed={require_kdb} onReady={this.onReady}/>
  },
  render: function() {
    if (!this.state.quota) {
        return this.openFileinstaller(true);
    } else { 
    return (
      <div className="main">
		{"Main of apptest"}      </div>
      );
    }
  }
});
module.exports=main;