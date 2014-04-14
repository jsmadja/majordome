#!/bin/bash

cd store
echo "youtube-dl $1 --max-quality=22"
youtube-dl $1 --max-quality=22
lftp nmt:1234@kaddath.hd.free.fr -e "cd SATA_DISK; cd Download; mput *; quit;"
rm -v *
cd
