#!/bin/bash

export SSHPASS=${PASSWORD}
sshpass -e sftp -oBatchMode=no -b - ${USERNAME}@${SERVER} << !
   cd ${REMOTEDIR}
   put -r ${LOCALDIR}/*
   bye
!
