import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;


   constructor(private http : HttpClient) { }

   postUserDetails(data:any){
    return this.http.post<any>("http://localhost:3000/post-user-details",data);
  }
  getUserDetails(){
    return this.http.get<any>("http://localhost:3000/get-user-details");
  }

  updateUserDetails(data:any,sno:number){
    return this.http.patch<any>(`http://localhost:3000/update-user-details?sno=${sno}`,data);
  }
  deleteUserDetails(data:any){
    return this.http.delete<any>("http://localhost:3000/delete-user-details",data);
  }

//phase two

postUsersDetails(ctryid:string, data:any){
  return this.http.post<any>(`http://localhost:3000/post-user-details?ctryid=${ctryid} `,data);
}
  loginDetails(ctryid:any,phone1:any,pass1:string){
    console.log(phone1)
    let splicembo:string=phone1.slice(1);
    console.log(splicembo)
    let joinprefix:string= '%2B'+splicembo
    console.log(joinprefix)
    return this.http.post<any>(`http://localhost:3000/login?ctryid=${ctryid}&phone1=${joinprefix}&pass1=${pass1} `,'');
  }
//Table

getTableDetails(ctryid:string){
  return this.http.get<any>(`http://localhost:3000/get-table-details?ctryid=${ctryid}`);
}


updateTableDetails(ctryid:string,id: number, data: any) {

  return this.http.put<any>(
    ` http://localhost:3000/update-table-details?ctryid=${ctryid}&user_id=${id}`,
    data
  );
}



deleteTableDetails(ctryid:string, id: number) {
  return this.http.delete<any>(
    `http://localhost:3000/delete-table-details?ctryid=${ctryid}&user_id=${id}`
  );
}

//TripBooking

getTripDetails(){
  return this.http.get<any>("http://localhost:3000/get-trip-details");
}

getTripId(Date:string){
  return this.http.get<any>(`http://localhost:3000/Get-Trip-id?Date=${Date}`);
}

getallTripDetails(){
  return this.http.get<any>("http://localhost:3000/get-all-trip-details");
}


getGuideTripId(Datees:string){
  return this.http.get<any>(`http://localhost:3000/Get-Guide-Trip-id?Datees=${Datees}`);
}


getAverageId(guide_id:string){
  return this.http.get<any>(`http://localhost:3000/Get-Average-id?guide-id=${guide_id}`);
}

}
