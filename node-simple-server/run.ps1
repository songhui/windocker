$subpath = "C:\Users\Public\substitute-server";
if(Test-Path $subpath){
    cp $subpath/* ./
    npm install
} 
npm start;
