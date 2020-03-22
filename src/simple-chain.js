const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if(isNaN(+position) ||
       position == '' ||
       this.chain[position] === undefined) {
         this.chain = [];
         throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finalChain = this.chain.map((item) => `( ${item} )`);
    this.chain = [];
    return finalChain.join('~~');
  }
};

module.exports = chainMaker;
