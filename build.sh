
cd sign_up_api_basic
echo Building API App
sudo docker build -t app-users:1.0 .
cd ..

cd courses_api
echo Building SA web App	
sudo docker build -t app-courses:1.0 .
cd ..

echo Checking process
sudo docker ps

echo BUILD COMPLETE