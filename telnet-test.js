var telnetClient = require("telnet-client");
var telnetConnection = null;
var params = { "host" : "192.168.1.1", "port" : 23};
var data = {"config":{}, "cpu":{}, "mem":{}};
try {
  telnetConnection = new telnetClient();
  telnetConnection.connect(params).then( function(prompt) {
    telnetConnection.exec("cat /data/config.ini").then(function(res) {
      nvp2Json(res, DELIMITER_EQUALS, data.config);
      telnetConnection.exec("cat /proc/cpuinfo").then(function(res) {
        nvp2Json(res, DELIMITER_COMMA, data.cpu);
        telnetConnection.exec("cat /proc/meminfo").then(function(res) {
          nvp2Json(res, DELIMITER_COMMA, data.mem);
        })
      })
    });
  }, function(error) {
    console.log("Ups, failed to open telnet connection. ", error)
  });
} catch (error) { console.error("Ups, telnet operation failed. ", error); }
finally { telnetConnection.destroy(); }