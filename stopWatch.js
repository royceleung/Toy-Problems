//StopWatch

var StopWatch = function() {
  this.startTime = 0;
  this.elapsedTime = 0;
};

StopWatch.prototype.currentTime = function() {
  var date = new Date();
  return date.getTime();
}

StopWatch.prototype.start = function() {
  if(!this.startTime) {
    this.startTime = this.currentTime();
  }
  return this;
};

StopWatch.prototype.stop = function() {
  if(this.startTime) {
    this.elapsedTime = this.elapsedTime + this.currentTime() - this.startTime;
  }
  startTime = 0;
  return this;
};

StopWatch.prototype.reset = function() {
  this.startTime = 0;
  this.elapsedTime = 0;
  return this;
};

StopWatch.prototype.log = function() {
  var result = this.elapsedTime;
  if(this.startTime) {
    result+= this.currentTime() - this.startTime;
  }
  return result;
};

//Racer

var Racer = function(name) {
  StopWatch.call(this);
  Racer.all.push(this);
}

Racer.prototype = Object.create(StopWatch.prototype);
Racer.prototype.constructor = Racer;

Racer.all = [];

Racer.all.start = function() {
  for(var i = 0; i < Racer.all.length; i++) {
    Racer.all[i].start();
  }
}

Racer.getWinner = function() {
  var fastestTime = Number.POSITIVE_INFINITY;
  var winner;
  for(var i = 0; i < Racer.all.length; i++) {
    if(Racer.all[i].log() < fastestTime) {
      fastestTime = Racer.all[i].log();
      winner = Racer.all[i];
    }
  }
  return winner;
}


