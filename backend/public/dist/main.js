"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const frontendDistPath = (0, path_1.join)(__dirname, '..', '..', '..', 'frontend', 'src', 'app');
    const frontendCSSPath = (0, path_1.join)(__dirname, '..', '..', '..', 'frontend', 'src', 'app');
    app.useStaticAssets(frontendCSSPath);
    app.setBaseViewsDir(frontendDistPath);
    app.use((req, res) => {
        res.sendFile((0, path_1.join)(frontendDistPath, 'app.component.html'));
        res.sendFile((0, path_1.join)(frontendCSSPath, 'app.component.css'));
    });
    await app.listen(4200);
    console.log(`Backend está rodando na porta 4200`);
}
bootstrap();
//# sourceMappingURL=main.js.map