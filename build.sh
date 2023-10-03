cd sign_up_api_basic
echo Building Users API App
cp dot-env-template .env 
sudo docker build -t app-users:1.0 .
cd ..

cd courses_api
echo Building Courses API App
cp dot-env-template .env	
sudo docker build -t app-courses:1.0 .
cd ..

cd classnotes_api
echo Building Classnotes API App
cp dot-env-template .env 
sudo docker build -t app-classnotes:1.0 .
cd ..

cd frontend_react/my-react-app
echo Building Frontend App
cp dot-env-template .env 
sudo docker build -t app-frontend:1.0 .
cd ../..

echo Checking process
sudo docker ps

echo BUILD COMPLETE