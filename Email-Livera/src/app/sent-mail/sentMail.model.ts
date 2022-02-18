export class Article {
  object: string;
    link: string;
  
    constructor(object: string, link: string, votes?: number) {
      this.object = object;
      this.link = link;
    }

      // domain() is a utility function that extracts
      // the domain from a URL, which we'll explain shortly
      text(): string {
        try {// e.g. http://foo.com/path/to/bar
          const domainAndPath: string = this.link.split('//')[1]; // e.g. foo.com/path/to/bar
          return domainAndPath.split('/')[0];
        } 
        catch (err) {
          return "";
        }
      }
    
}