// 这是一个环境变量配置文件，使用了 @t3-oss/env-nextjs 库来定义和验证环境变量的结构和类型
import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    POLAR_ACCESS_TOKEN: z.string().min(1),
    POLAR_SERVER: z.enum(["sandbox", "production"]).default("sandbox"),
    POLAR_PRODUCT_ID: z.string().min(1),
    POLAR_METER_VOICE_CREATION: z.string().min(1),
    POLAR_METER_TTS_GENERATION: z.string().min(1),
    POLAR_METER_TTS_PROPERTY: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    APP_URL: z.string().min(1),
    R2_ACCOUNT_ID: z.string().min(1),
    R2_ACCESS_KEY_ID: z.string().min(1),
    R2_SECRET_ACCESS_KEY: z.string().min(1),
    R2_BUCKET_NAME: z.string().min(1),
    CHATTERBOX_API_URL: z.url(),
    CHATTERBOX_API_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {},
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});