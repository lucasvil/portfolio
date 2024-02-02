#!/bin/bash
echo 'cd /home/ec2-user/portfolio' >> /home/ec2-user/portfolio/deploy.log
cd /home/ec2-user/portfolio/ >> /home/ec2-user/portfolio/deploy.log

echo 'npm install' >> /home/ec2-user/portfolio/deploy.log
npm install >> /home/ec2-user/portfolio/deploy.log