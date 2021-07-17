function ArrayBufferFromBase64(base64_string) {
// https://stackoverflow.com/a/41106346 CC-BY-SA 2.0
    return Uint8Array.from(atob(base64_string), 
    function(c) {
        return c.charCodeAt(0)
    }).buffer;
}
