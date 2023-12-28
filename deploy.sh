#!/bin/bash

export SSHPASS=${PASSWORD}
sshpass -e sftp -oBatchMode=no -b - ${USERNAME}@${SERVER} << !
   put -r ${LOCALDIR}/*
   bye
!
