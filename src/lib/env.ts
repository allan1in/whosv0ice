// 这是一个环境变量配置文件，使用了 @t3-oss/env-nextjs 库来定义和验证环境变量的结构和类型
import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1)
  },
  experimental__runtimeEnv: {},
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});