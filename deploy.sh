#!/bin/bash

# FTP/SFTP server details
SERVER="${SERVER}"
USERNAME="${USERNAME}"
PASSWORD="${PASSWORD}"
LOCALDIR="${LOCALDIR}"
REMOTEDIR="${REMOTEDIR}"

# Commands to upload files
# Replace 'sftp' with 'ftp' if you're using FTP
sftp ${USERNAME}@${SERVER} <<EOF
password ${PASSWORD}
cd ${REMOTEDIR}
put -r ${LOCALDIR}/*
bye
EOF
