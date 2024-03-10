#!/bin/bash

REP=/home/abarret/minidash

if [[ "$#" -lt 1 ]]; then
    echo "Usage: $0 start|stop|restart"
    echo "$# parameters given."
    exit 1
fi

PID_FILE_PATH="$REP/minidash.pid"
DEBUG=0
PID_CALCULED=0


# nohup java -jar $REP/minidash-webapp-1.0.0-SNAPSHOT.jar --spring.config.location=$REP/config/application.yml > /dev/null 2>&1 &
# echo $! > $REP/minidash.pid

function get_pid() {
        if [ -f ${PID_FILE_PATH} ]; then
            pid=$(cat ${PID_FILE_PATH}) 
            if [ -n "$pid" ] ; then
                 exists=$(ps -p ${pid} -aux | grep java | grep minidash | awk '{print $2}') 
                 if [ -n "$exists" ] ; then
                      PID_CALCULED=$pid
                      #if $(ps -p ${pid} > /dev/null); then
                      #    echo "Already running [PID: ${pid}], you can stop it and retry."
                      #    exit 1
                      #fi
                      return
                fi
            fi
        fi
        PID_CALCULED=0
        return
}

start_server() {
# Already running
        #if [ -f ${PID_FILE_PATH} ]; then
        #    pid=$(cat ${PID_FILE_PATH})
        #    if $(ps -p ${pid} > /dev/null); then
        #        echo "Already running [PID: ${pid}], you can stop it and retry."
        #        exit 1
        #    fi
        #fi
        get_pid
        if [ $PID_CALCULED -eq "0" ] ; then
                echo "pas de pid"
        else
             echo "déjà démarré (pid= $PID_CALCULED)"
             exit 1 
        fi
        #exit 0

	if [ "$DEBUG" -eq "1" ]; then
	        nohup java -jar $REP/minidash-webapp-1.0.0-SNAPSHOT.jar --spring.config.location=$REP/config/application.yml >> $REP/logs/nohup.log 2>&1 &
                RES=$?
	else
	        nohup java -jar $REP/minidash-webapp-1.0.0-SNAPSHOT.jar --spring.config.location=$REP/config/application.yml > /dev/null 2>&1 &
                RES=$?
	fi
        #echo "RES=$RES"
        PID=$(ps -ef | grep "java" | grep minidash | grep -v grep | awk '{print $2}')
        echo "PID=$PID"
	#echo $! > $REP/minidash.pid
        #nohup "$2" 2>&1 \
        #    & echo $! > ${PID_FILE_PATH}

        if [ $PID -ne 0 ]; then
            echo "Succeeded to start (pid=$PID)."
            echo $PID > $REP/minidash.pid
        else
            echo "Failed to start."
            exit 1
        fi


}


stop_server() {
        get_pid

        if [ "$PID_CALCULED" -eq "0" ] ; then
              echo "le programme est deja� arrete"
		exit 1
        else
		kill $PID_CALCULED

        	if [ $? -eq 0 ] ; then
        		rm ${PID_FILE_PATH}
	            echo "Succeeded to stop $PID_CALCULED."
	        else
        	    echo "Failed to stop $PID_CALCULED."
	            exit 1
	        fi
	fi

}

echo "param ${1}."

case "${1}" in
    start)
        # Already running
	echo "start"
        start_server
    ;;
    stop)
	echo "stop"
        stop_server
    ;;
    restart)
	echo "restart"
        stop_server && sleep 5 && start_server
    ;;
esac

