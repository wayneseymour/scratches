import { rxToStream, streamToStringRx } from "rxjs-stream";

// Read stdin and make it upper case then send it to stdout
let ob = streamToStringRx(process.stdin).map((text) => text.toUpperCase());

rxToStream(ob).pipe(process.stdout);
