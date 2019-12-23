import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class TextService {
  constructor(private http: HttpClient) {}

  getMockText() {
    return new Promise<string>(resolve => {
      const storedText = this.getText();
      if (storedText) {
        resolve(storedText);
      } else {
        resolve(`A year ago I was in the audience at a gathering of designers in San Francisco. 
          There were four designers on stage, and two of them worked for me. I was there to support them. 
          The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. 
          What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, 
          that modern design problems were very complex. And we ought to need a license to solve them.`);
      }
    });
  }

  getSynonims(forString) {
    const param = forString.replace(" ", "+");
    return this.http.get<any[]>(`https://api.datamuse.com/words`, {
      params: new HttpParams().set("ml", param)
    });
  }

  saveText(text) {
    localStorage.setItem("text", text);
  }

  getText() {
    return localStorage.getItem("text");
  }
}
