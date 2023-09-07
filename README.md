
# Llama Moodle
You can set up llama_moodle locally here. Llama Moodle is an LMS app to manage and provide the course of mindfulness-based sessions.


## Run Locally

Open up Terminal and install the following;

Adding the php7 ppa:
```bash
sudo add-apt-repository ppa:ondrej/php 
sudo apt-get update
```

Install Apache/MySQL/PHP
```bash
sudo apt install apache2 mysql-client mysql-server php7.4 libapache2-mod-php
```

Install Additional Software
```bash
 sudo apt install graphviz aspell ghostscript clamav php7.4-pspell php7.4-curl php7.4-gd php7.4-intl php7.4-mysql php7.4-xml php7.4-xmlrpc php7.4-ldap php7.4-zip php7.4-soap php7.4-mbstring

```

Restart Apache so that the modules are loaded correctly
```bash
sudo service apache2 restart
```

We will be using Git to install/update the Moodle Core Application
```bash
  sudo apt install git

```

Download Moodle -
Setup your local repository and download Moodle, We will use /var/www/html for this installation.
```bash
/var/www/html
```


Download the Moodle Code and Index
```bash
sudo git clone https://github.com/MyLlama/llama_moodle.git
```

Change directory into the downloaded Moodle folder
```bash
cd llama_moodle
```


Retrieve a list of each branch available
```bash
sudo git branch -a

```

Copy local repository to /var/www/html/
```bash
sudo cp -R /var/www/html/
```
```bash
sudo mkdir /var/moodledata

```
Give Read and Write permissions to the directory
```bash
sudo chown -R www-data /var/moodledata
```
```bash
sudo chmod -R 777 /var/moodledata
```

```bash
sudo chmod -R 0755 /var/www/html/llama_moodle

```


## Setup MySQL Server
#### To install it, update the package index on your server if you’ve not done so recently:
```bash
sudo apt update
```
#### Then install the `mysql-server` package:
```bash
sudo apt install mysql-server
```

#### Ensure that the server is running using the `systemctl start` command:
```bash
sudo systemctl start mysql.service
```
These commands will install and start MySQL, but will not prompt you to set a password or make any other configuration changes. Because this leaves your installation of MySQL insecure, we will address this next.

## Configuring MySQL
First, open up the MySQL prompt:


```bash
sudo mysql
```
Then run the following `ALTER USER` command to change the root user’s authentication method to one that uses a password. The following example changes the authentication method to` mysql_native_password`:

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

```
After making this change, exit the MySQL prompt:

```bash
exit
```
Following that, you can run the `mysql_secure_installation` script without issue.

Once the security script completes, you can then reopen MySQL and change the root user’s authentication method back to the default, `auth_socket`. To authenticate as the root MySQL user using a password, run this command:
```bash
mysql -u root -p

```
Check if the password is working and exit.


## Editing config.php for moodle


Database Type :
```bash
Choose: mysqli
```

Database Settings :

```bash
Host server: localhost

Database: <database_name>

User: moodledude (the user you created when setting up the database)

Password: passwordformoodledude (the password for the user you created
```

For hosting our llama_moodle :
```bash
$CFG->wwwroot   = 'http://localhost/llama_moodle';
```

Restart MySQL Server for changes to take affect
```bash
sudo service mysql restart
```

 start llama_moodle on this URL IN your browser
```bash
'http://localhost/llama_moodle';
```
