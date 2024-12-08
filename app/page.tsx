import fs from "fs";
import path from "path";

export default function Home() {
    const filePath = path.join(process.cwd(), "public", "index.html");
    const htmlContent = fs.readFileSync(filePath, "utf8");

    return (
        <div
            id="app"
            style={{ width: "100%", height: "100%", margin: "0" }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}
