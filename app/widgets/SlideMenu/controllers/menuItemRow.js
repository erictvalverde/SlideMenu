var args = arguments[0] || {};
var data = args.data;
$.row.data = data;
$.icon.image = data.image || "";
$.title.text = data.title;