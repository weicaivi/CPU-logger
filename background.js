// detect when a new VM is installed or updated
chrome.management.onInstalled.addListener((info) => {
  if (info.type === "virtualmachine") {
    logVMInfo(info.id);
  }
});

// detect when a new VM is uninstalled
chrome.management.onUninstalled.addListener((id) => {
  logVMUninstalled(id);
});

function logVMInfo(id) {
  chrome.management.get(id, (vm) => {
    if (vm.type === "virtualmachine") {
      const vmInfo = chrome.virtualMachine.getInfo(vm.id);
      console.log(`VM ${vm.name} is using ${vmInfo.cpuCount} CPUs`);
    }
  });
}

function logVMUninstalled(id) {
  console.log(`VM with ID ${id} was uninstalled`);
}
