(async () => {
    const response = await fetch('secret.wasm');
    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes);
    const sec_ptr = new Uint8Array(instance.exports.memory.buffer, instance.exports.secret());
    let sec = "";
    for (let ii = 0; sec_ptr[ii]; ii++) {
        sec += String.fromCharCode(sec_ptr[ii]);
    }
    console.log('The secret is: ' + sec);
})();