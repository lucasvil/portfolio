#!/bin/bash
echo 'cd /home/ec2-user/portfolio' >> /home/ec2-user/portfolio/deploy.log

echo 'pm3 restart portfolio-express' >> /home/ec2-user/portfolio/deploy.log
pm3 restart portfolio-express >> /home/ec2-user/portfolio/deploy.log