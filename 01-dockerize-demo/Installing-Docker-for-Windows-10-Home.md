# Installing Docker for Windows Home users
updated 2-19-2021

## WSL2
Some Windows 10 Home users may be able to install Docker Desktop if their computer supports the Windows Subsystem for Linux (WSL2).

Please see this guide first which includes all of the steps to install and enable WSL2:

https://docs.microsoft.com/en-us/windows/wsl/install-win10

Once you have successfully installed and enabled WSL2 and then installed the Linux OS of your choice, continue to the Docker Desktop installation docs here:

https://docs.docker.com/docker-for-windows/wsl/

With Docker Desktop installed using WSL2 as a backend, you will now be able to follow along with the course. You will access the applications at localhost just like we do in the video lectures.

Important - A significant difference when using WSL2 is that you will need to create and run your project files from within the Linux filesystem, not the Windows filesystem. This will be very important in later lectures when we cover volumes.

You can access your Linux system by running wsl in the Cortana bar. 

## Docker Toolbox
If you are using a Windows 10 machine that does not support WSL2, or, you are using even older versions such as Windows 7, you will need to install Docker Toolbox. It is important to note, however, that this software has been officially deprecated by the Docker engineers and may not continue to work into the future.

Release downloads are available here:
https://github.com/docker/toolbox/releases

Download the .exe for the latest release and run the installer. Docker Toolbox will setup and install everything you need including VirtualBox.

You may also need to enable virtualization in your computer's BIOS settings. This will be different for each manufacturer, please refer to their documentation on which keys to use to access these settings on reboot.

After Toolbox is finished installing, open the Docker Quickstart Terminal. This will complete the setup and provision your VirtualBox machine.

Launch the Docker QuickStart terminal and type the command:

docker run hello-world

This should pull down the test container and print hello-world to your screen.

Important - A major difference between the course lectures using Docker Desktop vs. using Docker Toolbox is that you will not be able to use localhost anymore. Instead, you will need to use the IP address returned by running `docker-machine ip`

Very commonly this is `192.168.99.100` but for you, it could be slightly different.

Ресурсы, относящиеся к этой лекции
[Install WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
[Install Docker Desktop for WSL2](https://docs.docker.com/docker-for-windows/wsl/)