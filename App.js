import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// II. Maven Web Automation Steps:
// └── Step 1: Open Jenkins (localhost:8080)
//  ├── Click on "New Item" (left side menu)
 
//  └── Step 2: Create Freestyle Project (e.g., MavenWeb_Build)
//  ├── Enter project name (e.g., MavenWeb_Build)
//  ├── Click "OK"
//  └── Configure the project:
//  ├── Description: "Web Build demo"
//  ├── Source Code Management:
//  └── Git repository URL: [GitMavenWeb repo URL]
//  ├── Branches to build: */Main or master
//  └── Build Steps:
//  ├── Add Build Step -> "Invoke top-level Maven targets"
//  └── Maven version: MAVEN_HOME
//  └── Goals: clean
//  ├── Add Build Step -> "Invoke top-level Maven targets"
//  └── Maven version: MAVEN_HOME
//  └── Goals: install
//  └── Post-build Actions:
//  ├── Add Post Build Action -> "Archive the artifacts"
//  └── Files to archive: **/*
//  ├── Add Post Build Action -> "Build other projects"
//  └── Projects to build: MavenWeb_Test
//  └── Trigger: Only if build is stable
//  └── Apply and Save
 
//  └── Step 3: Create Freestyle Project (e.g., MavenWeb_Test)
//  ├── Enter project name (e.g., MavenWeb_Test)
//  ├── Click "OK"
//  └── Configure the project:
//  ├── Description: "Test demo"
//  ├── Build Environment:
//  └── Check: "Delete the workspace before build starts"
//  ├── Add Build Step -> "Copy artifacts from another project"
//  └── Project name: MavenWeb_Build
//  └── Build: Stable build only
//  └── Artifacts to copy: **/*
//  ├── Add Build Step -> "Invoke top-level Maven targets"
//  └── Maven version: MAVEN_HOME
//  └── Goals: test
//  └── Post-build Actions:
//  ├── Add Post Build Action -> "Archive the artifacts"
//  └── Files to archive: **/*
//  ├── Add Post Build Action -> "Build other projects"
//  └── Projects to build: MavenWeb_Deploy
//  └── Apply and Save
 
//  └── Step 4: Create Freestyle Project (e.g., MavenWeb_Deploy)
//  ├── Enter project name (e.g., MavenWeb_Deploy)
//  ├── Click "OK"
//  └── Configure the project:
//  ├── Description: "Web Code Deployment"
//  ├── Build Environment:
//  └── Check: "Delete the workspace before build starts"
//  ├── Add Build Step -> "Copy artifacts from another project"
//  └── Project name: MavenWeb_Test
//  └── Build: Stable build only
//  └── Artifacts to copy: **/*
//  └── Post-build Actions:
//  ├── Add Post Build Action -> "Deploy WAR/EAR to a container"
//  └── WAR/EAR File: **/*.war
//  └── Context path: Webpath
//  └── Add container -> Tomcat 9.x remote
// └── Credentials: Username: admin, Password: 1234
// ── Tomcat URL: https://localhost:8085/
//  └── Apply and Save
 
//  └── Step 5: Create Pipeline View for MavenWeb
//  ├── Click "+" beside "All" on the dashboard
//  ├── Enter name: MavenWeb_Pipeline
//  ├── Select "Build pipeline view"
//  └── Pipeline Flow:
//  ├── Layout: Based on upstream/downstream relationship
//  ├── Initial job: MavenWeb_Build
//  └── Apply and Save
 
//  └── Step 6: Run the Pipeline and Check Output
//  ├── Click on the trigger “RUN” to run the pipeline
//  Note: 
// 1. After Click on Run -> click on the small black box to open the console to check if the build is success
// 2. Now we see all the build has success if it appears in green color
//  ├── Open Tomcat homepage in another tab
//  ├── Click on the "/webpath" option under the manager app
//  Note:
// 1. It ask for user credentials for login ,provide the credentials of tomcat.
// 2. It provide the page with out project name which is highlighted.
// 3. After clicking on our project we can see output.

// <role rolename="manager-gui"/>
// <role rolename="manager-script"/>
// <role rolename="manager-status"/>
// <role rolename="manager-jmx"/>

// <user username="shashank" password="admin123" roles="manager-gui,manager-script,manager-status,manager-jmx"/>


// AWS EC2 + Docker Deployment — Full Steps With Meaning (Quick Notes)

// 1. Connect to EC2 Instance
//    ssh -i your-key.pem ubuntu@EC2-Public-IP
//    → Connects your local system to the Linux server (EC2) using SSH + key pair.

// 2. Install Required Software
//    sudo apt update
//    → Updates package list.

//    sudo apt install docker.io -y
//    → Installs Docker Engine used to build and run container images.

//    sudo apt install git -y
//    → Installs Git so you can clone your project repo.

//    sudo apt install nano -y
//    → Installs nano editor to create/edit files.

// 3. Clone Your GitHub Repository
//    git clone <your-repo-url>
//    cd <repo-folder-name>
//    ls
//    → Downloads your project code from GitHub into EC2 and moves into the folder.

// 4. Create a Dockerfile
//    nano Dockerfile
//    → Opens nano editor. Add these lines:

//    ----- Dockerfile -----
//    FROM nginx:alpine
//    COPY index.html /usr/share/nginx/html/index.html
//   expose 80
//    -----------------------
//    → Uses nginx as base image and copies your website files into nginx’s HTML folder.

// 5. Build Docker Image
//    sudo docker build -t mywebapp .
//    → Creates a Docker image named “mywebapp” using the Dockerfile in the current directory.

// 6. Run Docker Container
//    sudo docker run -d -p 443:80 mywebapp
//    → Runs the image in detached mode (-d)
//    → Maps EC2 port 80 to container’s port 80 so website becomes public.

// 7. Check Running Containers
//    sudo docker ps
//    → Shows container IDs, status, port mapping, image name.

// 8. Stop and Remove Containers
//    sudo docker stop <container-id>
//    sudo docker rm <container-id>
//    → Stops & deletes any running container.

// 9. Remove Docker Image
//    sudo docker images
//    sudo docker rmi <image-id>
//    → Lists images and removes old image to clean space.

// 10. Rebuild and Re-run Updated Docker Image
//     sudo docker build -t mywebapp .
//     sudo docker run -d -p 80:80 mywebapp
//     → After updating code, rebuild image and run new container.

// 11. Terminate EC2 Instance (From AWS Console)
//     AWS Console → EC2 → Instances → Select instance → Instance State → Terminate
//     → Deletes the virtual machine permanently and stops billing.







// # --- On College Laptop Terminal (Host Machine) ---
// docker --version

// # --- Create EC2 Instance in AWS Console manually ---
// # download .pem key and place it in Desktop

// # --- Connect to EC2 using SSH ---
// ssh -i ~/Desktop/your-key.pem ubuntu@EC2_PUBLIC_IP

// # --- Inside EC2 Terminal ---
// sudo apt update
// sudo apt install docker.io git nano -y

// # --- Clone Your GitHub Repo (created today) ---
// git clone campus
// cd campus

// # --- Verify files exist ---
// ls

// # --- Build Docker Image ---
// sudo docker build -t mywebapp:v1 .

// # --- Run Docker Container (serving HTML page via Nginx) ---
// sudo docker run -d -p 80:80 mywebapp:v1

// # --- Check running containers ---
// sudo docker ps

// # --- Later if you need to stop container ---
// sudo docker stop <container-id>











// MINIKUBE----------------
// # --- START MINIKUBE (Docker driver) ---
// minikube start                    # Start Minikube using Docker driver
// minikube status                   # Check Minikube + API server status

// # --- USE MINIKUBE'S BUNDLED KUBECTL (always safest) ---
// minikube kubectl -- get pods -A   # List all pods in all namespaces

// # --- FIX KUBECTL CONTEXT IF BROKEN ---
// minikube update-context           # Reset kubectl to use Minikube

// # --- NORMAL KUBECTL USAGE (YOUR SYSTEM KUBECTL) ---
// kubectl get nodes                 # Verify cluster connection

// # --- CREATE DEPLOYMENT ---
// kubectl create deployment myapp --image=nginx   # Create "myapp" deployment

// kubectl get deployments           # Check deployments list

// # --- EXPOSE DEPLOYMENT AS A NODEPORT SERVICE ---
// kubectl expose deployment myapp \
//   --type=NodePort --port=80 --target-port=80    # Create service for myapp

// kubectl get service myapp         # View NodePort + ports

// # --- SCALE DEPLOYMENT ---
// kubectl scale deployment myapp --replicas=4     # Scale to 4 pods

// # --- PORT FORWARD FOR LOCAL ACCESS ---
// kubectl port-forward svc/myapp 8081:80          # Access app on http://localhost:8081

// # --- IF KUBECTL FAILS TO CONNECT (API server error) ---
// minikube status                   # Check if Minikube is running
// minikube start                    # Restart Minikube if needed

// # --- IF DOCKER WAS OFF (common issue) ---
// # Start Docker Desktop manually (required for Docker driver)

// # --- HARD RESET (only if cluster is broken) ---
// minikube stop
// minikube delete
// minikube start






// minikube start
// kubectl create deployment mynginx --image=nginx
// kubectl get deployments
// kubectl expose deployment mynginx --type=NodePort --port=80 --target-port=80
// kubectl scale deployment mynginx --replicas=4
// kubectl get service myngnix
// kubectl port-forward svc/mynginx 8081:80
// minikube dashboard





// # ----------------------------------------------------------
// # NAGIOS AUTOMATION STEPS (DOCKER)
// # ----------------------------------------------------------

// # STEP 1: PULL NAGIOS DOCKER IMAGE
// docker pull jasonrivers/nagios:latest

// # STEP 2: RUN NAGIOS CONTAINER
// # - Container name: nagiosdemo
// # - Host port 8888 -> Container port 80
// docker run --name nagiosdemo -p 8888:80 jasonrivers/nagios:latest

// # ACCESS NAGIOS DASHBOARD IN BROWSER
// # URL:
// #   http://localhost:8888
// # LOGIN:
// #   Username: nagiosadmin
// #   Password: nagios

// # STEP 3: STOP & REMOVE NAGIOS CONTAINER
// docker stop nagiosdemo
// docker rm nagiosdemo

// # OPTIONAL: LIST IMAGES
// docker images

// # OPTIONAL: REMOVE NAGIOS IMAGE
// docker rmi jasonrivers/nagios:latest







// Docker + Ubuntu + Nginx Experiment – Command List

// 1. Check Docker Version
// docker --version

// 2. Pull Ubuntu Image
// docker pull ubuntu:latest

// 3. Run Ubuntu Container
// docker run -it -p 3000:80 --name myubuntu ubuntu:latest

// 4. Inside Container: Update Packages
// apt update

// 5. Install Nginx
// apt install nginx -y

// 6. Start Nginx
// nginx

// 7. Navigate to Web Directory
// cd /var/www/html

// 8. Rename Default Page
// mv index.nginx-debian.html index.html

// 9. Edit Homepage Content
// echo '<h1>Hello from Docker Nginx!</h1>' > index.html

// 10. View in Browser
// http://localhost:3000








// Docker Image Creation Experiment (Two Methods)
// -------------------------------------------------

// PART A: Create Image Using docker commit
// ---------------------------------------

// 1. Pull Ubuntu image
// docker pull ubuntu:latest

// 2. Run Ubuntu container
// docker run -it --name mycontainer ubuntu:latest

// 3. Inside container: create a file using cat
// cat > myfile.txt
// Hello from my custom image!
// <Ctrl + D>

// 4. Exit the container
// exit

// 5. Create an image from the container
// docker commit mycontainer myimage:v1

// 6. Verify image
// docker images

// 7. Run a new container from committed image
// docker run -it myimage:v1


// PART B: Create Image Using Dockerfile
// --------------------------------------

// 1. Create a new folder
// mkdir mydockerfileimages
// cd mydockerfileimages

// 2. Create a message file
// notepad message.txt
// (Write: This image was created using Dockerfile.)

// 3. Create Dockerfile (Notepad may save as .txt)
// notepad Dockerfile

// 4. If Notepad saved it as Dockerfile.txt, rename it:
// rename-item Dockerfile.txt Dockerfile

// 5. Verify files
// ls
// (Dockerfile and message.txt must be visible)

// 6. Build image using Dockerfile
// docker build -t mydockerfileimage:v1 .

// 7. Verify image
// docker images

// 8. Run container from Dockerfile image
// docker run -it mydockerfileimage:v1

// 9. Check the copied file inside container
// cat /message.txt






// Docker Compose Experiment – Running Multiple Containers
// -------------------------------------------------------------

// AIM:
// To run two servers (Nginx and TomEE) simultaneously using Docker Compose.

// -------------------------------------------------------------
// PART 1: Running Two Servers Manually
// -------------------------------------------------------------

// 1. Run Nginx on port 8010:
// docker run -d -p 8010:80 nginx

// 2. Run TomEE on port 8020:
// docker run -d -p 8020:8080 tomee

// 3. Open localhost to view servers:
// http://localhost:8010   (Nginx)
// http://localhost:8020   (TomEE)


// -------------------------------------------------------------
// PART 2: Running the Same Two Servers Using Docker Compose
// -------------------------------------------------------------

// Step 1: Create project folder:
// mkdir comp-1-server
// cd comp-1-server

// Step 2: Create docker-compose.yml:
// notepad docker-compose.yml

// Paste the following content:

// -------------------------------------------------------------
// docker-compose.yml (CODE)
// -------------------------------------------------------------
// services:
//   web:
//     image: nginx
//     ports:
//       - "8060:80"

//   db:
//     image: tomee
//     ports:
//       - "8050:8080"
// -------------------------------------------------------------

// Step 3: If saved incorrectly, rename (optional):
// ren Dockerfile docker-compose.yml

// Step 4: Start both containers using Docker Compose:
// docker-compose up -d

// Step 5: Verify containers:
// docker ps

// Step 6: Open the servers in browser:
// http://localhost:8060   (Nginx from Compose)
// http://localhost:8050   (TomEE from Compose)

// -------------------------------------------------------------

// END OF EXPERIMENT









// Flask + MySQL Docker Compose Experiment
// =========================================

// AIM:
// To create a Flask application and MySQL database using Docker Compose and run them together.

// ---------------------------------------------------------
// Step 1: Create project folder
// ---------------------------------------------------------
// mkdir custom_flask
// cd custom_flask

// ---------------------------------------------------------
// Step 2: Create app.py
// ---------------------------------------------------------
// # app.py
// from flask import Flask
// app = Flask(__name__)

// @app.route("/")
// def home():
//     return "Hello from 24BDSA0503 - NEKSHASRINIVAS"

// if __name__ == "__main__":
//     app.run(host="0.0.0.0", port=5000)

// ---------------------------------------------------------
// Step 3: Create Dockerfile
// ---------------------------------------------------------
// # Dockerfile
// FROM python:3.10-slim

// WORKDIR /app
// COPY app.py /app/
// RUN pip install flask
// CMD ["python", "app.py"]

// ---------------------------------------------------------
// Step 4: Create docker-compose.yml
// ---------------------------------------------------------
// # docker-compose.yml
// services:
//   web:
//     build: .
//     ports:
//       - "5000:5000"
//     depends_on:
//       - db

//   db:
//     image: mysql:8.0
//     restart: always
//     environment:
//       MYSQL_ROOT_PASSWORD: root
//       MYSQL_DATABASE: mydb
//     ports:
//       - "3307:3306"   # Changed because 3306 is busy on Windows

// ---------------------------------------------------------
// Step 5: Build and Run Containers
// ---------------------------------------------------------
// docker compose up --build

// ---------------------------------------------------------
// Step 6: Test the Application
// ---------------------------------------------------------
// Open in browser:
// http://localhost:5000

// MySQL connection (optional):
// Host: localhost
// Port: 3307
// User: root
// Password: root

// ---------------------------------------------------------
// END OF EXPERIMENT








// WORDPRESS + MYSQL USING DOCKER COMPOSE
// ==========================================

// AIM:
// To deploy WordPress with a MySQL database using Docker Compose and complete the WordPress installation.

// ---------------------------------------------------------
// STEP 1: Create a folder and docker-compose.yml file
// ---------------------------------------------------------
// mkdir mysql
// cd mysql
// notepad docker-compose.yml

// If saved as docker-compose.txt, rename it:
// ren docker-compose.txt docker-compose.yml

// ---------------------------------------------------------
// STEP 2: docker-compose.yml CONTENT
// ---------------------------------------------------------
// services:

//   wordpress:
//     image: wordpress:latest
//     ports:
//       - "9080:80"
//     environment:
//       WORDPRESS_DB_HOST: db:3306
//       WORDPRESS_DB_USER: wordpress
//       WORDPRESS_DB_PASSWORD: wordpress
//       WORDPRESS_DB_NAME: wordpress
//     depends_on:
//       - db

//   db:
//     image: mysql:5.7
//     restart: always
//     environment:
//       MYSQL_ROOT_PASSWORD: rootpassword
//       MYSQL_DATABASE: wordpress
//       MYSQL_USER: wordpress
//       MYSQL_PASSWORD: wordpress
//     ports:
//       - "3307:3306"

// ---------------------------------------------------------
// STEP 3: Run Docker Compose
// ---------------------------------------------------------
// docker-compose up -d

// This starts:
// - WordPress container
// - MySQL database container

// ---------------------------------------------------------
// STEP 4: Open WordPress Installation Page
// ---------------------------------------------------------
// Open browser and go to:
// http://localhost:9080

// Select your preferred language and click Continue.

// ---------------------------------------------------------
// STEP 5: Fill the WordPress Welcome Page
// ---------------------------------------------------------
// Example values:

// Site Title: Hey
// Username: Neksha Srinivas
// Password: Sri@121318
// Email: edigirlaneksha@gmail.com

// Click "Install WordPress".

// ---------------------------------------------------------
// STEP 6: Installation Success Message
// ---------------------------------------------------------
// You will see:
// "WordPress has been installed successfully!"

// Click the Log In button.

// ---------------------------------------------------------
// STEP 7: Log in to WordPress Dashboard
// ---------------------------------------------------------

// Login URL:
// http://localhost:9080/wp-admin

// Use the credentials you created:

// USERNAME:
// Neksha Srinivas

// PASSWORD:
// Sri@121318

// ---------------------------------------------------------
// STEP 8: After Login
// ---------------------------------------------------------
// You will see the WordPress Admin Dashboard:
// - Posts
// - Media
// - Pages
// - Appearance
// - Plugins
// - Settings

// WordPress is now fully installed and running using Docker Compose.

// ---------------------------------------------------------
// END OF EXPERIMENT











// Multi-Module Maven Project – Detailed Explanation
// =================================================

// 1. What is a Multi-Module Maven Project?
// ----------------------------------------
// A multi-module Maven project allows you to manage multiple related modules under
// one parent project. The parent controls dependencies, versions, plugins, and build
// order. All modules build together using: mvn clean install.

// Structure:
// MyParentProject (parent)
//  ├── pom.xml  
//  ├── module1  
//  │     └── pom.xml  
//  └── module2  
//        └── pom.xml  

// ------------------------------------------------------------

// 2. Creating the Parent Project
// ------------------------------

// Step 1: Create folder
// mkdir MyParentProject
// cd MyParentProject

// Step 2: Create parent pom.xml with packaging=pom and module list:

// <project>
//   <modelVersion>4.0.0</modelVersion>
//   <groupId>com.example</groupId>
//   <artifactId>MyParentProject</artifactId>
//   <version>1.0-SNAPSHOT</version>
//   <packaging>pom</packaging>

//   <modules>
//     <module>module1</module>
//     <module>module2</module>
//   </modules>
// </project>

// ------------------------------------------------------------

// 3. Creating Module 1
// --------------------

// Command:
// mvn archetype:generate -DgroupId=com.example -DartifactId=module1 -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

// module1/pom.xml:

// <project>
//   <modelVersion>4.0.0</modelVersion>

//   <parent>
//     <groupId>com.example</groupId>
//     <artifactId>MyParentProject</artifactId>
//     <version>1.0-SNAPSHOT</version>
//   </parent>

//   <artifactId>module1</artifactId>
// </project>

// ------------------------------------------------------------

// 4. Creating Module 2
// --------------------

// Command:
// mvn archetype:generate -DgroupId=com.example -DartifactId=module2 -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

// module2/pom.xml similar to module1 except artifactId=module2.

// ------------------------------------------------------------

// 5. Final Project Structure
// --------------------------

// MyParentProject/
//  ├── pom.xml (parent)
//  ├── module1/
//  │     └── pom.xml
//  └── module2/
//        └── pom.xml

// ------------------------------------------------------------

// 6. Build Entire Multi-Module Project
// ------------------------------------

// Inside parent folder:
// mvn clean install

// This builds:
// - Parent POM
// - Module 1
// - Module 2

// ------------------------------------------------------------





















