class ItemPriorizator {
  readonly ASCII_LOWERCASE_OFFSET = 96;
  readonly ASCII_UPPERCASE_OFFSET = 64;
  readonly UPPERCASE_BONUS = 26
  execute(item: string) {
    
    if(item[0] === item[0].toLowerCase()) {
      return item.charCodeAt(0) - this.ASCII_LOWERCASE_OFFSET;
    }
    
    return item.charCodeAt(0) - this.ASCII_UPPERCASE_OFFSET + this.UPPERCASE_BONUS;
    
  }
}

export default ItemPriorizator;