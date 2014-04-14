#!/bin/bash
dir=$(date +%s)
cd web_store
echo "wget $1 --directory-prefix=$dir"
lftp nmt:1234@kaddath.hd.free.fr -e "cd SATA_DISK; cd Download; mput *; quit;"
rm -rf *
cd ..
