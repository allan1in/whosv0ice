// 这是一个实用工具函数，用于合并和优化 CSS 类名，使用了 clsx 和 tailwind-merge 库

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
