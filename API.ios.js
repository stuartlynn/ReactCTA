key  = "SXihhdEh3mEAPZ3ULqV4Cpam5"
base = "http://www.ctabustracker.com/bustime/api/v1/"


module.exports={

  busTimes: function(busNo){
    fetch("gettime?key=89dj2he89d8j3j3ksjhdue93j")
  },
  hashToParams:function(hash){
    Object.keys(hipChatSettings).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(hipChatSettings[k]);
    }).join('&')
  },
  query: function(url, params){
    fetch(base+url+this.hashToParams(params))
  }

}
