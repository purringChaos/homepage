

#cat ~/homepage/gender.html | grep -e h5 -e img | grep "^<" | head -n 20 | sed "s/.*src=//" | sed -e "s/<h5>//" | sed "s/<\/h5>//" | sed "s/>$//" | xargs -L2 bash gend.sh
wget "$1" -O dl.png
GEND=$(echo $2 | tr '[:upper:]' '[:lower:]')
convert dl.png  ${GEND}.jpg
rm dl.png
