import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';

 
export const appRouter = createTRPCRouter({

  health: baseProcedure
    .query(async (opts) => {
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay
      // throw new Error('Error occurred');
      return {
       status: 'ok',
      };
    }),
});
 
// export type definition of API
export type AppRouter = typeof appRouter;