export const every = (array, callback) => {
  Array.prototype.andrea_every = function(callback) {
    for (let i=0; i<this.length; i++) {
      if (!callback(this[i])) return false;
    }

    return this.length < 1 ? false : true;
  };

  return array.andrea_every(callback);
};
