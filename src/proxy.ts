// 这是一个 Next.js 中间件，用于处理用户认证和组织选择的逻辑，确保用户在访问受保护的路由时已经认证并选择了组织。
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 定义公共路由
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
// 定义组织选择路由
const isOrgSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    // WHY? 这里没有按照官方文档推荐的方法，是否有更优的实现方式？
    const { userId, orgId } = await auth();

    // 允许公共路由访问
    if (isPublicRoute(req)) {
        return NextResponse.next();
    }

    // 如果用户未认证，重定向到登录页面
    if (!userId) {
        await auth.protect();
    }

    // 允许组织选择路由访问
    if (isOrgSelectionRoute(req)) {
        return NextResponse.next();
    }

    // 如果用户已认证但未选择组织，重定向到组织选择页面
    if (userId && !orgId) {
        const orgSelection = new URL("/org-selection", req.url);
        return NextResponse.redirect(orgSelection);
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};