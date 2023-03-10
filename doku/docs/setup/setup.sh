#!/bin/bash

# Update File for OSGeo15
# Oliver Archner (oliver.archner@uni-bayreuth.de)
# 10.3.2023

echo "QGIS update"
sudo apt -y install gnupg software-properties-common
sudo wget -O /etc/apt/keyrings/qgis-archive-keyring.gpg https://download.qgis.org/downloads/qgis-archive-keyring.gpg
sudo tee /etc/apt/sources.list.d/qgis.sources << "Types: deb deb-src
URIs: https://qgis.org/ubuntu-ltr
Suites: jammy
Architectures: amd64
Components: main
Signed-By: /etc/apt/keyrings/qgis-archive-keyring.gpg"
sudo apt-get -y update 
sudo apt-get -y install qgis 

echo "Conda installation"
wget https://repo.anaconda.com/miniconda/Miniconda3-py310_23.1.0-1-Linux-x86_64.sh
chmod +x Miniconda3-py310_23.1.0-1-Linux-x86_64.sh
./Miniconda3-py310_23.1.0-1-Linux-x86_64.sh -b 
source .bashrc


