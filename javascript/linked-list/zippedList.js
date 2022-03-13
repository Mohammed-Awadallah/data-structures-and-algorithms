const LinkedList = require('./index')
function zipLists(ll1, ll2) {
    let zipList = new LinkedList();
    let x = 0;
    if (!ll1.head) {
        return ll2;
    }
    if (!ll2.head) {
        return ll1;
    }
    if (ll1.length > ll2.length) {
        x = ll1.length - 1
    } else {
        x = ll2.length - 1
    }
    zipList.append(ll1.head.value);
    zipList.append(ll2.head.value);
    let reminderOfll1 = ll1.head;
    let reminderOfll2 = ll2.head;
    while (x > 0) {
        if (reminderOfll1.next) {
            zipList.append(reminderOfll1.next.value);
            reminderOfll1 = reminderOfll1.next;
        }
        if (reminderOfll2.next) {
            zipList.append(reminderOfll2.next.value);
            reminderOfll2 = reminderOfll2.next;
        }
        x--;
    }
    return zipList;
}

module.exports = zipLists;



