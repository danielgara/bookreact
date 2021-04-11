const linda = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: () => {
        let uniqueId = linda.id + "-" + linda.name;
        if (!linda.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueId());
const pam = {
    name: "pam",
    id: 1,
    isManager: true,
    getUniqueId: () => {
        let uniqueId = pam.id + "-" + pam.name;
        if (pam.isManager) {
            return "mgr-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(pam.getUniqueId());
