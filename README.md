# web-server-demo
## to get this up and running
  - run 'curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -' to add the node repository
  
  - run 'sudo yum install -y nodejs' to get node
  
  - go into directory with package.json
  
  - run 'npm install'
  
  - Make environment variables 
  
      - SERVER_KEY = path to the key for the cert
      
      - SERVER_CERT = path to the cert
      
      - SERVER_PASS = passphrase for server_key 
  
  - run 'npm start'
