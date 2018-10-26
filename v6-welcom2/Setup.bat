rem Guide to the Best Bits of the 6.0 Release of Angular
rem npm install @angular/cli    
rem npm install @angular/cli@latest
rem ng update @angular/cli    
rem call ng update @angular/core  
rem call ng add @angular/material   

call ng generate @angular/material:material-nav --name=my-nav
call ng generate @angular/material:material-dashboard --name=my-dav
call ng generate @angular/material:material-table --name=my-table
call ng add @angular/elements
rem ng g c my-element 
rem ng generate library my-shared-lib
rem ng build   --project=my-shared-lib
rem ng generate service my-data-service

say 'Looks like i am done the whole script'