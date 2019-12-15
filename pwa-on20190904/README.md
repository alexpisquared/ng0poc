README:
=======      

Creating PWA with Angular 6 using Angular Material
May-2018
www.youtube.com/watch?v=0UKJbtdPx4I


cd .\ng0poc\
npm install -g @angular/cli
ng --version
ng new my-pwa  --style=scss  --routing
cd .\my-pwa\
code .
ng serve 
ng add      @angular/material
ng generate @angular/material:material-nav    --name="app-nav"
ng generate @angular/material:material-table  --name="app-table"
ng add      @angular/pwa

npm install lite-server --save-dev
add to package.json: "start:prod": "ng build --prod && lite-server --baseDir dist/pwa-on20190904",
npm run start:prod

ng build --base-href "/xApi/" --prod
robocopy D:\gh\x\ng0poc\my-pwa\dist\my-pwa\ \\nes-corp\wwwroot\xApi\ -mir
