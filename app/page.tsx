import fs from "fs";
import path from "path";

export default function Home() {
    const filePath = path.join(process.cwd(), "public", "index.html");
    const htmlContent = fs.readFileSync(filePath, "utf8");

    return (
        <div
            id="app"
            style={{ width: "80%", height: "80%", margin: "auto" }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}
