#!/bin/bash

export SSHPASS=${PASSWORD}
sshpass -e sftp -oBatchMode=no -b - ${USERNAME}@${SERVER} << !
   cd version01
   put -r ${LOCALDIR}/*
   bye
!
