chrome.system.cpu.getInfo(function (info) {
  console.log("Number of CPUs: " + info.numOfProcessors);
});
