import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTest';

  add(a:number, b:number) {
    return a + b;
  }

  getNull() {
    return null;
  }

  createUser() {
    const user:any = {
      fName: "Artur",
    };
    user["lName"] = "Pavlov";
    return user;
  }

  chunkArray(arr:any, len:any) {
    // Init chunked arr
    const chunkedArr:any = [];
  
    // Loop through arr
    arr.forEach((val:any) => {
      // Get last element
      const last = chunkedArr[chunkedArr.length - 1];
  
      // Check if last and if last length is equal to the chunk len
      if (!last || last.length === len) {
        chunkedArr.push([val]);
      } else {
        last.push(val);
      }
    });
  
    return chunkedArr;
  };
}
