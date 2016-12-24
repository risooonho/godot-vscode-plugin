import GDScriptSymbolParser from './gdscript/symbolparser';

class Config {
  private symbols;
  public parser: GDScriptSymbolParser;

  constructor() {
    this.symbols = {};
    this.parser = new GDScriptSymbolParser();
  }

  loadSymbolsFromFile(path) {
    const script = this.parser.parseFile(path);
    this.setSymbols(path, script);
    return script;
  }

  setSymbols(path, s) {
    this.symbols[path] = s;
  }

  getSymbols(path) {
    return this.symbols[path];
  }

  setAllSymbols(s) {
    this.symbols = s;
  }
  
  getAllSymbols() {
    return this.symbols;
  }

  normalizePath(path) {
    let newpath = path;
    if( path.indexOf(":") != -1){
      let parts = path.split(":");
      newpath = parts[0].toUpperCase()
      for(let i=1; i<parts.length; i++)
        newpath += parts[i].replace(/\\/g, "/");
    }
    return newpath;
  }

};

export default new Config();