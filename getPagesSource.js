function DOMtoString(document_root) {
    var x = document.getElementsByTagName("button");
    if (x.length > 0) {
        location.reload();
        return "Yes";
    } else {
        return "No";
    }
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document),
});
