
export const map = (array, callback) =>{
  Array.prototype.andrea_map = function(callback){
    let arr = []
    for(let i=0; i<this.length; i++)
    {
      arr.push(callback(this[i]));
    }
    return arr
  }
  return array.andrea_map(callback)
}
