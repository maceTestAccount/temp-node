const path = rquire("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
