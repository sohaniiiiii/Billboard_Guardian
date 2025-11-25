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

