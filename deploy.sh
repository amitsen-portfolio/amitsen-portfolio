#!/bin/bash

export SSHPASS=${PASSWORD}
sshpass -e sftp -oBatchMode=no -b - ${USERNAME}@${SERVER} << !
   cd main-app
   put -r ${LOCALDIR}/*
   bye
!
