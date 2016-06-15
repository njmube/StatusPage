

function hostNameModel( obj ) {

  this.hostname = obj.hostname;
  this.lasterrortime = new Date(obj.lasterrortime * 1000);
  this.lasttesttime = new Date(obj.lasttesttime * 1000) ;
  this.lastresponsetime = obj.lastresponsetime;
  this.status = obj.status == "up" ? true : false;
  this.type = obj.type;
  this.id = obj.id;

  this.summary = [];
  this.summaryRenderedTable = ""
}

hostNameModel.prototype = {

  updateSummary : function( summaryList ){
    this.summary = summaryList
  },


}
