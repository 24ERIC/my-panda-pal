const elementSet = document.getElementById("set");
const elementSecond = document.getElementById("sec");
const elmClear = document.getElementById("clear");

const alarm_id = "alarm1";
elementSet.onclick = () => {
    const sec = elementSecond.value;
    console.log("SET", sec);
    const dt = new Date();
    dt.setSeconds(dt.getSeconds() +parseInt(sec));
    chrome.alarms.create(alarm_id, {when: dt.getTime()})
};

elementClear.onclick = () => {
    console.log("CLEAR");
    chrome.alarms.clear(alarm_id);
}