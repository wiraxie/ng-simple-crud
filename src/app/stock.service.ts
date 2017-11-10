import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';

//lesson 63rd dari sini
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/RX';

//template lession 63rd
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
//habis inject masukkan ke provider module.ts dan include ke komponen.ts
export class stockService
{
    public id='';
    public name='';
    public year='';
    public semester='';
    public major='';
    public score='';
    public email='';

    public newId='';
    public newName='';
    public newYear='';
    public newSemester='';
    public newMajor='';
    public newScore='';
    public newEmail='';

    constructor(private http: Http){}

    //template reqeust json
    //request
    getStocksAPI(): Observable<any>
    {
        //return this.http.get("http://localhost:3000/Student/") //perhatikan port localhost
        return this.http.get("https://jsonblob.com/api/jsonblob/d8fc409d-c5d7-11e7-a9dc-ab45beee027e/")
        .map( (res: Response) => res.json() )
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }
    //end of request

    //template create
    //add
    addStudent(newId: string, newName: string, newYear: string, newSemester: string, newMajor: string, newScore: string, newEmail: string): Observable<any>
    {
        //return this.http.post("http://localhost:3000/Student/", {id: newId, name: newName, year: newYear, semester: newSemester, major: newMajor, score: newScore, email: newEmail});
        return this.http.post("https://jsonblob.com/api/jsonblob/d8fc409d-c5d7-11e7-a9dc-ab45beee027e/", {id: newId, name: newName, year: newYear, semester: newSemester, major: newMajor, score: newScore, email: newEmail});
    }
    //end of add

    //template update
    //update
    updStudent(Id: string, newName: string, newYear: string, newSemester: string, newMajor: string, newScore: string, newEmail: string): Observable<any>
    {
        return this.http.put("https://jsonblob.com/api/jsonblob/d8fc409d-c5d7-11e7-a9dc-ab45beee027e/"+Id,
            {
                Id: Id,
                name: newName, 
                year: newYear,
                semester: newSemester,
                major: newMajor,
                score: newScore,
                email: newEmail
            });
             
        //  return this.http.put("http://localhost:3000/Student/"+Id,
        //  {
        //      Id: Id,
        //      name: newName, 
        //      year: newYear,
        //      semester: newSemester,
        //      major: newMajor,
        //      score: newScore,
        //      email: newEmail
        //  });
     }
     //end of update

    //template delete
    //delete
    delStudent(id: string): Observable<any>
    {
        //return this.http.delete("http://localhost:3000/Student/" +id);
        return this.http.delete("https://jsonbhttps://jsonblob.com/api/jsonblob/d8fc409d-c5d7-11e7-a9dc-ab45beee027e/" +id);
    }
    //end of delete

    getStocks() : string[]
    {
        return ['1', '2', '3'];
    }

}
