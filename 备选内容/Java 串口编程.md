# Java 串口编程

### 来自学姐的Java定制

<br/>

<br/>

### 1. RXTX的安装

<br/>

RXTX开源类库提供串口和并口通信，与sun提供的comm.jar基本相同

<br/>

#### [下载地址](http://rxtx.qbang.org/wiki/index.php/Download) 

推荐下载 stable 版本

<br/>

安装后解压得到如下文件夹：

<img height="160" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/JAVA-RXTX组件.png">

<br/>

安装需要将 RXTXcomm.jar 放到 %JAVA_HOME%\jre\lib\ext\ 下

打开 Windows 文件夹，把里面的 rxtxSerial.dll 放入到 %JAVA_HOME%\jre\bin 中，或 C:\windows\system32 中

<br/>


### 2. Serial port utility

<br/>

Serial port utility 是串口调试工具

#### [下载地址](http://www.alithon.com/downloads)

<br/>

### 3. 通信接口标准

<br/>

#### 3.1 rs232

<br/>

美国电子工业联盟（EIA）制定的串行数据通信的接口标准

目前使用的是 RS-232-C

<br/>

#### 3.2 rs485

<br/>

RS485是隶属于OSI模型物理层的电气特性规定为2线、半双工、平衡传输线多点通信的标准。

在线性多点总线的配置下，可以在一个网络上有多个接收器，因此适用在工业环境中。

<br/>

#### 3.3 rs422

<br/>

RS-422是一系列的规定采用4线，全双工，差分传输，多点通信的数据传输协议。

和RS-485不同的是RS-422不允许出现多个发送端而只能有多个接受端。

硬件构成上RS-422相当于两组RS-485，即两个半双工的RS-485构成一个全双工的RS-422。

这个标准的一些关键优点包括RS-423定义的多重接受端，当电缆线的长度为12米（40英尺）时传输速率可以达到10Mb/s，以及工业环境的长距离数据传输。

<br/>

<br/>