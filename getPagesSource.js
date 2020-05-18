function DOMtoString(document_root) {
    var x = document.getElementsByTagName("button");
    if (x.length > 0) {
        return "Yes";
    } else {
        location.reload();
        return "No";
    }
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document),
});
