# Allowed Keycompose

There are a list of docker configurations that dappnode supports. That means, when you use the DAppNodeSDK to build a package, this one read the docker-compose file and create an object in typescript, then using typescript its created the docker-compose again in the dappnode. Its a simplification of the process, but its to understand why not all the configuration keys are allowed.

The configuration that are allowes you can read them in the following list:

- cap_add
- cap_drop
- command
- depends_on
- devices
- entrypoint
- environment
- expose
- extra_hosts
- healthcheck
- labels
- logging
- network_mode
- networks
- ports
- privileged
- restart
- stop_grace_period
- stop_signal
- user
- volumes
- working_dir
- security_opt
- image
- build
- volumes
- environment
- pid
- container_name
- dns
- ulimits
- deploy
