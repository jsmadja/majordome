#!/bin/bash

cd store
youtube-dl $1 --max-quality=22
lftp nmt:1234@kaddath.hd.free.fr -e "cd SATA_DISK; cd Download; mput *; quit;"
rm -v *
cd
